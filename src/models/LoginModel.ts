import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUsers } from '../interface/IUsers';
import connection from './connection';

export default class LoginModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getUser(user: string, password: string): Promise<IUsers> {
    const [[search]] = await this.connection
      .execute<RowDataPacket[]>(`SELECT * FROM Trybesmith.Users
        WHERE username = ? and password = ?`, [user, password]);
    return search as IUsers;
  }
}