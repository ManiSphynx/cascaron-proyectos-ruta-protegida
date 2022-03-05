import { User } from '../../infrastructure/interfaces/user.interface';
import { findUser } from '../repositories/users.repository';
import { error } from '../utils/error.utils';

const emailAlreadyExists = async (email: string): Promise<void> => {
  const { email: mail }: User = await findUser({ email });

  if (mail) {
    error(`The email ${mail} is already registered in the database`);
  }
};

export { emailAlreadyExists };
