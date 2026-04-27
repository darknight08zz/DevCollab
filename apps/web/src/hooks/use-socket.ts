"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAuth } from "./use-auth";

export function useSocket() {
  const { session } = useAuth();
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!session?.accessToken) return;

    const socket = io(process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000", {
      auth: {
        token: session.accessToken,
      },
    });

    socket.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to real-time server");
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, [session?.accessToken]);

  return {
    socket: socketRef.current,
    isConnected,
  };
}
