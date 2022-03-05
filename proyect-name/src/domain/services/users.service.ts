import { Request } from 'express';
import { User } from '../../infrastructure/interfaces/user.interface';
import { insertUser } from '../repositories/users.repository';

export const userLogic = async (request: Request): Promise<User> => {
  const { name, email, password } = request.body;
  const user = await insertUser(name, email, password);

  return user;
};
