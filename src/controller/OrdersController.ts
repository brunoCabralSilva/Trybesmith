import { Request, Response } from 'express';
import OrdersService from '../service/OrdersService';

export default class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  getAllRequests = async (req: Request, res: Response) => {
    const requests = await this.service.getAllRequests();
    return res.status(200).json(requests);
  };
}