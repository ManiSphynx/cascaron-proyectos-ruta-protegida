import { User } from '../interfaces/user.interface';
import { Schema, model } from 'mongoose';

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  rol: {
    type: String,
    required: true,
    default: 'USER_ROLE',
  },
  status: {
    type: Boolean,
    default: true,
  },
});

userSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

export const userModel = model<User>('User', userSchema);
