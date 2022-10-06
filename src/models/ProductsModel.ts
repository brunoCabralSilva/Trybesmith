import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProducts } from '../interface/iProducts';

import connection from './connection';

export default class ProductsModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAllProducts(): Promise<IProducts[]> {
    const [allProducts] = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    return allProducts as IProducts[];
  }

  async registerProduct(name: string, amount: string) {
    const [register] = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products
         (name, amount)
         VALUES (?, ?)`, [name, amount]);
    const [[item]] = await this.connection
      .execute<RowDataPacket[]>(`SELECT * FROM Trybesmith.Products 
        WHERE id = ?`, [register.insertId]);
    return item as IProducts;
  }
}