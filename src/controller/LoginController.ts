import { Response, Request } from 'express';
import LoginService from '../service/LoginService';
import Token from '../utils/token';

export default class LoginConstroller {
  service: LoginService;
  
  token: Token;
 
  constructor() {
    this.service = new LoginService();
    this.token = new Token();
  }
  
  searchUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const search = await this.service.getUser(username, password);
    if (search === undefined) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const generate = this.token
      .generateToken(search.username, search.classe, search.level);
    return res.status(200).json({ token: generate });
  };
}