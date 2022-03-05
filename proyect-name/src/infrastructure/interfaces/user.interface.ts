import { Types } from 'mongoose';
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  rol: string;
  status: boolean;
  uid?: string;
}

export interface Token {
  token: string;
}

export interface UserData {
  loginUser: User;
  password: string;
}

export interface UserLogin {
  user: User;
  token: string;
  isValidPassword: boolean;
}
