import { Request, Response } from 'express';
import { userLogic } from '../../domain/services/users.service';

export const createUser = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const user = await userLogic(request);

    response.status(201).json({
      message: 'user created successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: 'An error occurred while creating the user' });
  }
};
