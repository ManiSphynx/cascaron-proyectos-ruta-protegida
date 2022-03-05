import { createUser } from './create-user';
import { loginUser } from './login-user';

export const apis = {
  paths: {
    '/api/auth/login': {
      ...loginUser,
    },
    '/api/user': {
      ...createUser,
    },
  },
};
