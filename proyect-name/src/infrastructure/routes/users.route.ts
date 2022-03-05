import * as express from 'express';
import { validateUserCreation } from '../middlewares/validate-fields.middleware';
import { createUser } from '../controllers/users.controller';
export const users: express.Router = express.Router();

users.post('/', validateUserCreation, createUser);
