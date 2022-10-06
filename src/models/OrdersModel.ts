import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export default class OrdersModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAllRequests() {
    const [requests] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders');
    return requests;
  }

  async getById(id: number) {
    const [request] = await this.connection
      .execute<RowDataPacket[]>(`SELECT * FROM Trybesmith.Products
        WHERE orderId = ?`, [id]);
    return request;
  }
}