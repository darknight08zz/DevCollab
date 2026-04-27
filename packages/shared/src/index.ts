export * from './types';
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ReviewSession {
  id: string;
  title: string;
  createdAt: Date;
  creatorId: string;
}

export const API_ENDPOINTS = {
  SESSIONS: '/sessions',
  USERS: '/users',
} as const;
