import * as dotenv from 'dotenv';
import Server from '../config/server.config';
dotenv.config();

const server = new Server();
server.listener();
