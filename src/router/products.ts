import express from 'express';
import ProductsController from '../controller/ProductsController';

const router = express.Router();
const productsController = new ProductsController();

router.get('/', productsController.getAllProducts);
router.post('/', productsController.registerProduct);

export default router;