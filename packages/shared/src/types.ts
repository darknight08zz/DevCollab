export interface AuthUser {
  id: string;
  email: string;
  name?: string | null;
  avatarUrl?: string | null;
  githubId?: string | null;
  githubUsername?: string | null;
  githubAccessToken?: string | null;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}
