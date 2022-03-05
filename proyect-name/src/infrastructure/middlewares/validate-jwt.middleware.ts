import { Request, Response, NextFunction } from 'express';
import jsonWebToken from 'jsonwebtoken';
import {
  invalidToken,
  unauthorizedUser,
} from '../../domain/constants/auth.constants';
import { JwtPayload } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import { userModel } from '../models/user.model';

export const verifyJwt = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const token = request.header('auth-token');
  const secret = process.env.SECRET ?? '';

  if (!token) {
    return response.status(401).json({
      message: unauthorizedUser,
    });
  }

  try {
    const { id } = jsonWebToken.verify(token, secret) as JwtPayload;
    const user: User | null = await userModel.findById(id);

    if (!user?.status) {
      return response.status(401).json({
        message: unauthorizedUser,
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return response.status(401).json({
      message: invalidToken,
    });
  }
};
