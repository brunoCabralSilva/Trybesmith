import { Request, Response } from 'express';
import UserService from '../service/UserServices';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  registerUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const register = await this.service
      .registerUser(username, classe, level, password);
    return res.status(201).json({
      token: register,
    });
  };
}