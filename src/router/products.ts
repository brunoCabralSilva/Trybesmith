import express from 'express';
import ProductsController from '../controller/ProductsController';
import VProducts from '../middlewares/VProducts';

const router = express.Router();
const productsController = new ProductsController();
const middlewares = new VProducts();

router.get('/', productsController.getAllProducts);
router.post('/', middlewares.nameProduct, productsController.registerProduct);

export default router;