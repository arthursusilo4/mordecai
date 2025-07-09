import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', error);

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      res.status(400).json({
        error: 'Validation Error',
        message: 'Email already exists',
      });
      return;
    }
    if (error.code === 'P2025') {
      res.status(404).json({
        error: 'Not Found',
        message: 'User not found',
      });
      return;
    }
  }

  if (error.name === 'ValidationError') {
    res.status(400).json({
      error: 'Validation Error',
      message: error.message,
    });
    return;
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong on the server',
  });
};