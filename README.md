# DevCollab — Real-time Collaborative Code Review

Production-grade monorepo for DevCollab.

## Tech Stack
- **Root**: [pnpm](https://pnpm.io/) Workspaces
- **Web**: [Next.js 14](https://nextjs.org/) (App Router), TypeScript, Tailwind CSS, [shadcn/ui](https://ui.shadcn.com/)
- **API**: Node.js, [Express](https://expressjs.com/), TypeScript
- **Shared**: Common types and utilities package

## Structure
- `apps/web`: Next.js frontend application
- `apps/api`: Express backend application
- `packages/shared`: Shared TypeScript types and utility functions

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 9+

### Installation
```bash
# Install dependencies for all workspaces
pnpm install

# Build shared package first
pnpm --filter @devcollab/shared build
```

### Development
```bash
# Run all apps in development mode
pnpm dev

# Run specific app
pnpm --filter @devcollab/web dev
pnpm --filter @devcollab/api dev
```

### Linting & Formatting
```bash
pnpm lint
pnpm format
```

## Environment Setup
Copy the `.env.example` files to `.env` in the respective app directories:
- `apps/web/.env.example` -> `apps/web/.env`
- `apps/api/.env.example` -> `apps/api/.env`
