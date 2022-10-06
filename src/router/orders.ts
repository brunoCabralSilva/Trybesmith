import express from 'express';
import OrdersController from '../controller/OrdersController';

const router = express.Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAllRequests);

export default router;