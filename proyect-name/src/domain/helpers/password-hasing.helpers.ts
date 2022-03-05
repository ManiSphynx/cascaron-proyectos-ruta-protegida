import bcrypt from 'bcrypt';

const passwordHashing = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const checkPassword = (password: string, hashPassword: string): boolean => {
  return bcrypt.compareSync(password, hashPassword);
};

export { passwordHashing, checkPassword };
