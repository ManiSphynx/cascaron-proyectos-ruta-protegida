import jsonwebtoken from 'jsonwebtoken';
import { error } from '../utils/error.utils';

export const generateJWT = (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const secret = process.env.SECRET || '';
    const payload = { id };
    try {
      jsonwebtoken.sign(
        payload,
        secret,
        {
          expiresIn: '4d',
        },
        (error, token) => {
          if (error) {
            reject('An error occurred while generating the token');
          } else if (token) {
            resolve(token!);
          }
        },
      );
    } catch (err) {
      error('An error occurred while generating the token');
    }
  });
};
