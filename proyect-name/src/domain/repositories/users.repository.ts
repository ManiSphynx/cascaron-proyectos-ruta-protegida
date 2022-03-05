import { User } from '../../infrastructure/interfaces/user.interface';
import { userModel } from '../../infrastructure/models/user.model';
import { userResponseNotFound } from '../constants/users.constants';
import { passwordHashing } from '../helpers/password-hasing.helpers';

const insertUser = async (
  name: string,
  email: string,
  password: string,
): Promise<User> => {
  try {
    const userData = new userModel({ name, email, password });

    if (userData) {
      userData.password = passwordHashing(password);
      await userData.save();
    }

    return userData;
  } catch (error) {
    console.log(error);
    throw new Error('an error occurred when inserting the users');
  }
};

const findUser = async (findBy: object): Promise<User> => {
  try {
    const user = await userModel.findOne(findBy);

    if (user) {
      const { name, email, rol, status, password, id } = user;

      return { name, email, rol, status, password, id };
    } else {
      return userResponseNotFound;
    }
  } catch (error) {
    console.log(error);
    throw new Error('an error occurred while search the user');
  }
};
export { insertUser, findUser };
