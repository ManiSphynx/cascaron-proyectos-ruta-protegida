import express from 'express';
import path from 'path';
import cors from 'cors';
import * as swaggerUI from 'swagger-ui-express';
import route from '../routes';
import { docs } from '../swagger';
import { morganMiddleware } from '../../../libs/morgan';
import { mongoDB } from '../../../database/mongo.database';
import { Paths } from '../interfaces/server.interface';
export default class Server {
  app: express.Application;
  port: string;
  paths: Paths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '';
    this.paths = {
      auth: '/api/auth',
      users: '/api/user',
      docs: '/api/docs',
    };
    this.dbConnections();
    this.middlewares();
    this.routes();
  }

  async dbConnections(): Promise<void> {
    await mongoDB();
  }

  routes(): void {
    this.app.use(this.paths.auth, route.auth);
    this.app.use(this.paths.users, route.users);
    this.app.use(this.paths.docs, swaggerUI.serve, swaggerUI.setup(docs));
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morganMiddleware);
    this.app.use(express.static(path.join(__dirname, '../', 'public')));
  }

  listener(): void {
    this.app.listen(this.port, () => {
      console.log(`Application running on the port ${this.port}`);
    });
  }
}
