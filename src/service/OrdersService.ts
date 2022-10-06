import OrdersModel from '../models/OrdersModel';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async getAllRequests() {
    const request = await this.model.getAllRequests();
    const productsIds = await Promise.all(request.map(async (req) => {
      const products = await this.model.getById(req.id);
      const idProd = products.map((p) => p.id);
      const result = {
        id: req.id,
        userId: req.userId,
        productsIds: idProd,
      };
      return result;
    }));
    console.log(productsIds);
    return productsIds;
  }
}