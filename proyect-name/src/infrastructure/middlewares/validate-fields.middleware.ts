import { check } from 'express-validator';
import { validateFields } from '../../domain/helpers/middleware-validators.helper';
import { emailAlreadyExists } from '../../domain/helpers/database-validators.helpers';

const validateUserCreation = [
  check('name', 'Name is required').not().isEmpty().isString(),
  check(
    'password',
    'The password is mandatory and must contain more than 6 characters',
  ).isLength({ min: 6 }),
  check('email', 'This email format is not valid').isEmail(),
  check('email').custom(emailAlreadyExists),
  validateFields,
];

const validateLogin = [
  check('email', 'Email is required').isEmail(),
  check('password', 'The password is required').not().isEmpty(),
  validateFields,
];

export { validateUserCreation, validateLogin };
