import { Pool } from 'mysql2/promise';
import connection from './connection';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }
  
  async registerUser(username: string, classe: string, level: number, password: string) {
    await this.connection
      .execute(`INSERT INTO Trybesmith.Users
        (username, classe, level, password) VALUES
        (?, ?, ?, ?)`, [username, classe, level, password]);
  }
}