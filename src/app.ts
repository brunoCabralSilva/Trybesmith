import express from 'express';
import login from './router/login';
import orders from './router/orders';
import products from './router/products';
import users from './router/users';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);
app.use('/login', login);

export default app;
