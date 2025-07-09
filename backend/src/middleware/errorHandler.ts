import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', error);

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      return res.status(400).json({
        error: 'Validation Error',
        message: 'Email already exists',
      });
    }
    if (error.code === 'P2025') {
      return res.status(404).json({
        error: 'Not Found',
        message: 'User not found',
      });
    }
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      message: error.message,
    });
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong on the server',
  });
};