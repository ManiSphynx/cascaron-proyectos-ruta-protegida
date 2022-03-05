import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validateFields = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    response.status(400).json(errors);
    return;
  }

  next();
};

export { validateFields };
