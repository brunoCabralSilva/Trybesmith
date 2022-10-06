import UserModel from '../models/UserModel';
import Token from '../utils/token';

export default class UserService {
  model: UserModel;
  
  token: Token;

  constructor() {
    this.model = new UserModel();
    this.token = new Token();
  }

  async registerUser(username: string, classe: string, level: number, password: string) {
    await this.model.registerUser(username, classe, level, password);
    const generate = this.token.generateToken(username, classe, level);
    return generate;
  }
}