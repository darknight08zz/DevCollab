# DevCollab Deployment Guide

This guide covers the production deployment of DevCollab using **Vercel** for the frontend and **Railway** for the backend.

## Prerequisites
- Node.js 20+
- pnpm 8+
- [Railway CLI](https://docs.railway.app/guides/cli)
- [Vercel CLI](https://vercel.com/docs/cli)

## First-time Setup

### 1. Supabase (Database)
- Create a new project on [Supabase](https://supabase.com).
- Copy the `DATABASE_URL` (Transaction pooler) and `DIRECT_URL` (Session pooler).
- Enable GitHub Auth in Authentication -> Providers.

### 2. Lemon Squeezy (Billing)
- Create an account on [Lemon Squeezy](https://lemonsqueezy.com).
- Create a Store and at least two Products (PRO and TEAM variants).
- Copy the `API Key`, `Store ID`, and `Variant IDs`.
- Set up a Webhook pointing to `https://your-api.railway.app/billing/webhook`.

### 3. Railway (Backend)
- Create a new project on [Railway](https://railway.app).
- Add an empty service for the API.
- Link your GitHub repository.
- Add the **Redis** plugin to the project.
- Configure environment variables as listed in `apps/api/.env.example`.

### 4. Vercel (Frontend)
- Create a new project on [Vercel](https://vercel.com).
- Link the `apps/web` directory.
- Configure environment variables as listed in `apps/web/.env.example`.

## Database Migrations
- **Local**: `pnpm prisma migrate dev`
- **Production**: Railway handles migrations automatically via the `pnpm prisma migrate deploy` command specified in `railway.json`.

## Environment Variables

### API (Railway)
- `DATABASE_URL`: Supabase transaction pooler URL.
- `DIRECT_URL`: Supabase session pooler URL.
- `REDIS_URL`: Railway Redis connection string.
- `JWT_SECRET`: Random string for signing tokens.
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`: From GitHub OAuth App.
- `OPENAI_API_KEY`: For AI code review features.
- `LEMON_SQUEEZY_API_KEY`: From Lemon Squeezy API settings.
- `LEMON_SQUEEZY_STORE_ID`: Your store ID.
- `LEMON_SQUEEZY_WEBHOOK_SECRET`: Secret you set for the webhook.
- `LEMON_SQUEEZY_PRO_VARIANT_ID` / `LEMON_SQUEEZY_TEAM_VARIANT_ID`: Variant IDs for your plans.
- `RESEND_API_KEY`: For transactional emails.
- `CLIENT_URL`: `https://your-app.vercel.app`.

### Web (Vercel)
- `NEXT_PUBLIC_API_URL`: `https://your-api.railway.app`.
- `NEXT_PUBLIC_WS_URL`: `wss://your-api.railway.app`.
- `NEXTAUTH_SECRET`: Random string for session encryption.
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`: Same as API.

## Monitoring & Maintenance
- **API Metrics**: View CPU/RAM/Logs in the Railway dashboard.
- **Frontend Analytics**: Enable Vercel Analytics for performance monitoring.
- **Rollbacks**: 
  - Vercel: Revert to a previous deployment in the "Deployments" tab.
  - Railway: Use the "Rollback" button on the latest deployment.
