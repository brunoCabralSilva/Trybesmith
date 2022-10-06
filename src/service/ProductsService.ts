import { IProducts } from "../interface/iProducts";
import ProductsModel from "../models/ProductsModel";

export default class ProductsService {
  model: ProductsModel;
  constructor() {
    this.model = new ProductsModel();
  }

  async getAllProducts(): Promise<IProducts[]> {
    const products = await this.model.getAllProducts();
    return products;
  }

  async registerProduct(name: string, amount: string) {
    const service = await this.model.registerProduct(name, amount);
    return service;
  }
}