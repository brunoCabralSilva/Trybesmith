import LoginModel from '../models/LoginModel';

export default class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  async getUser(user: string, password: string) {
    const search = await this.model.getUser(user, password);
    return search;
  }
}