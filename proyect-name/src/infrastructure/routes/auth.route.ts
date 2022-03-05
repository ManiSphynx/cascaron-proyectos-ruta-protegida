import * as express from 'express';
import { login } from '../controllers/auth.controller';
import { validateLogin } from '../middlewares/validate-fields.middleware';
export const auth: express.Router = express.Router();

auth.post('/login', validateLogin, login);
