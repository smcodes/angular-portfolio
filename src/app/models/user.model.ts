export type UserRole = 'CUSTOMER' | 'ADMIN';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
}

export interface UserSession {
  accessToken: string;
  refreshToken?: string;
  expiresAt: string;
}
