import { Server, Socket } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import Redis from "ioredis";
import jwt from "jsonwebtoken";
import { Server as HttpServer } from "http";
import { AuthUser } from "@devcollab/shared";
import { prisma } from "../lib/prisma";

interface SocketWithUser extends Socket {
  user?: AuthUser;
}

export const initSocket = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  // Redis Adapter for scaling
  if (process.env.REDIS_URL) {
    const redisOptions = {
      maxRetriesPerRequest: null,
      retryStrategy: (times: number) => Math.min(times * 100, 3000),
      enableReadyCheck: false,
    };
    
    const pubClient = new Redis(process.env.REDIS_URL, redisOptions);
    const subClient = new Redis(process.env.REDIS_URL, redisOptions);
    
    pubClient.on("error", (err) => console.error("Redis Adapter Pub Error:", err.message));
    subClient.on("error", (err) => console.error("Redis Adapter Sub Error:", err.message));
    
    io.adapter(createAdapter(pubClient, subClient));
  }

  // Memory fallback for presence if Redis is unavailable
  let redis: any;
  if (process.env.REDIS_URL) {
    redis = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: null,
      retryStrategy: (times: number) => Math.min(times * 100, 3000),
    });
    redis.on("error", (err: any) => {
      console.warn("Redis Presence Error:", err.message);
    });
  } else {
    redis = null;
  }

  // Simple memory store for when Redis is unavailable
  const memoryStore = new Map<string, Set<string>>();

  // Authentication Middleware
  io.use((socket: SocketWithUser, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("Authentication error: No token provided"));

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthUser;
      socket.user = decoded;
      next();
    } catch (err) {
      next(new Error("Authentication error: Invalid token"));
    }
  });

  // Socket.io Event Rate Limiting
  io.on("connection", (socket: SocketWithUser) => {
    let eventCount = 0;
    let lastReset = Date.now();

    socket.use(([event, ...args], next) => {
      const now = Date.now();
      if (now - lastReset > 1000) {
        eventCount = 0;
        lastReset = now;
      }

      eventCount++;
      if (eventCount > 50) {
        console.warn(`Socket ${socket.id} rate limited: ${eventCount} events/sec`);
        return next(new Error("Rate limit exceeded"));
      }
      next();
    });
    const user = socket.user!;
    console.log(`User connected: ${user.name} (${socket.id})`);

    socket.on("join-session", async ({ sessionId }) => {
      // Plan Check: Real-time requires PRO
      const session = await prisma.reviewSession.findUnique({
        where: { id: sessionId },
        include: { pullRequest: { include: { repository: true } } }
      });

      if (session && session.pullRequest.repository.workspaceId) {
        const workspace = await prisma.workspace.findUnique({
          where: { id: session.pullRequest.repository.workspaceId }
        });

        if (workspace && (workspace.plan === 'FREE')) {
          socket.emit('error', { 
            code: 'UPGRADE_REQUIRED', 
            message: 'Real-time collaboration requires a PRO plan.' 
          });
          return;
        }
      }

      const room = `session:${sessionId}`;
      socket.join(room);

      let onlineUsers: any[] = [];
      if (redis) {
        try {
          await redis.sadd(`${room}:users`, JSON.stringify(user));
          const onlineUsersStrings = await redis.smembers(`${room}:users`);
          onlineUsers = onlineUsersStrings.map((u: string) => JSON.parse(u));
        } catch (e) {
          redis = null; // Switch to memory on failure
        }
      }
      
      if (!redis) {
        if (!memoryStore.has(room)) memoryStore.set(room, new Set());
        memoryStore.get(room)!.add(JSON.stringify(user));
        onlineUsers = Array.from(memoryStore.get(room)!).map((u) => JSON.parse(u));
      }

      io.to(room).emit("user-joined", { user, onlineUsers });
      console.log(`${user.name} joined session ${sessionId}`);
    });

    socket.on("leave-session", async ({ sessionId }) => {
      const room = `session:${sessionId}`;
      socket.leave(room);

      let onlineUsers: any[] = [];
      if (redis) {
        try {
          await redis.srem(`${room}:users`, JSON.stringify(user));
          const onlineUsersStrings = await redis.smembers(`${room}:users`);
          onlineUsers = onlineUsersStrings.map((u: string) => JSON.parse(u));
        } catch (e) {
          redis = null;
        }
      }
      
      if (!redis) {
        if (memoryStore.has(room)) {
          memoryStore.get(room)!.delete(JSON.stringify(user));
          onlineUsers = Array.from(memoryStore.get(room)!).map((u) => JSON.parse(u));
        }
      }

      io.to(room).emit("user-left", { userId: user.id, onlineUsers });
    });

    socket.on("cursor-move", ({ sessionId, filePath, lineNumber }) => {
      socket.to(`session:${sessionId}`).emit("cursor-update", {
        userId: user.id,
        filePath,
        lineNumber,
      });
    });

    socket.on("comment-created", ({ sessionId, comment }) => {
      socket.to(`session:${sessionId}`).emit("new-comment", { comment });
    });

    socket.on("comment-resolved", ({ sessionId, commentId }) => {
      socket.to(`session:${sessionId}`).emit("comment-resolved", { commentId });
    });

    socket.on("typing", ({ sessionId, filePath, lineNumber, isTyping }) => {
      socket.to(`session:${sessionId}`).emit("typing-indicator", {
        userId: user.id,
        filePath,
        lineNumber,
        isTyping,
      });
    });

    socket.on("disconnecting", async () => {
      for (const room of socket.rooms) {
        if (room.startsWith("session:")) {
          let onlineUsers: any[] = [];
          if (redis) {
            try {
              await redis.srem(`${room}:users`, JSON.stringify(user));
              const onlineUsersStrings = await redis.smembers(`${room}:users`);
              onlineUsers = onlineUsersStrings.map((u: any) => JSON.parse(u));
            } catch (e) {
              redis = null;
            }
          }
          
          if (!redis) {
            if (memoryStore.has(room)) {
              memoryStore.get(room)!.delete(JSON.stringify(user));
              onlineUsers = Array.from(memoryStore.get(room)!).map((u) => JSON.parse(u));
            }
          }
          io.to(room).emit("user-left", { userId: user.id, onlineUsers });
        }
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${user.name}`);
    });
  });

  return io;
};
