import { UserProfile, UserSession } from '../../models/user.model';

export interface UserState {
  session: UserSession | null;
  profile: UserProfile | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const initialUserState: UserState = {
  session: null,
  profile: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const UserActionTypes = {
  Login: '[User] Login',
  LoginSuccess: '[User] Login Success',
  LoginFailure: '[User] Login Failure',
  Logout: '[User] Logout',
  LoadProfile: '[User] Load Profile',
  LoadProfileSuccess: '[User] Load Profile Success',
  LoadProfileFailure: '[User] Load Profile Failure'
} as const;
