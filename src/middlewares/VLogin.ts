import { Request, Response, NextFunction } from 'express';

export default class VLogin {
  user = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.username || req.body.username === '') {
      return res.status(400).json({ message: '"username" is required' });
    }
    next();
  };

  password = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.password || req.body.password === '') {
      return res.status(400).json({ message: '"password" is required' });
    }
    next();
  };
}