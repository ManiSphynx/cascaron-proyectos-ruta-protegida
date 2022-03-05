import morgan from 'morgan';

export const morganMiddleware = morgan(
  ':method :url :status - :response-time ms',
);
