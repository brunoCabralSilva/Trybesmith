import { IProducts } from "../interface/iProducts";
import { Response, Request } from 'express';
import ProductsService from "../service/ProductsService";

export default class ProductsController {
  service: ProductsService;
  constructor() {
    this.service = new ProductsService;
  }

  getAllProducts = async (req: Request, res: Response) =>  {
    const products = await this.service.getAllProducts();
    return res.status(200).json(products);
  }

  registerProduct = async (req: Request, res:Response) => {
    const { name, amount } = req.body;
    const register = await this.service.registerProduct(name, amount);
    return res.status(201).json({
      id: register.id,
      name: register.name,
      amount: register.amount,
    })
  }
}