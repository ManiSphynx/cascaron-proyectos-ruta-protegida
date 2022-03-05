import { User } from './user.interface';

export interface Login {
  user: User;
  token: string | undefined;
}

export interface JwtPayload {
  id: string;
}
