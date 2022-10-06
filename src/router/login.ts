import express from 'express';
import LoginConstroller from '../controller/LoginController';
import Middlewares from '../middlewares/Middlewares';

const router = express.Router();

const loginController = new LoginConstroller();
const middlewares = new Middlewares();

router.post('/', middlewares.password, middlewares.user, loginController.searchUser);

export default router;