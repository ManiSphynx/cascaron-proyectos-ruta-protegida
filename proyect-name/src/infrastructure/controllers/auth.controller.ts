import { Request, Response } from 'express';
import { findUser } from '../../domain/repositories/users.repository';
import { wrongCredentials } from '../../domain/constants/auth.constants';
import { loginLogic } from '../../domain/services/auth.service';
import { User } from '../interfaces/user.interface';

export const login = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const { email, password } = request.body;
    const loginUser: User = await findUser({ email });

    if (!loginUser || !loginUser.status) {
      response.status(400).json({ message: wrongCredentials });
      return;
    }

    const { user, token, isValidPassword } = await loginLogic({
      loginUser,
      password,
    });

    /* Remove password */
    const { password: pass, ...userData } = user;

    if (!isValidPassword) {
      response.status(400).json({ message: wrongCredentials });
      return;
    }

    if (token) {
      response.status(200).json({ userData, token });
    }
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: 'An error occurred while logging in' });
  }
};
