import {
  UserData,
  UserLogin,
} from '../../infrastructure/interfaces/user.interface';
import { generateJWT } from '../helpers/jwt-generator.helper';
import { checkPassword } from '../helpers/password-hasing.helpers';

export const loginLogic = async (userData: UserData): Promise<UserLogin> => {
  const { loginUser: user, password } = userData;

  const isValidPassword: boolean = checkPassword(password, user.password);
  const token: string = await generateJWT(user.id);

  return { user, token, isValidPassword };
};
