import express from 'express';
import LoginConstroller from '../controller/LoginController';
import VLogin from '../middlewares/VLogin';

const router = express.Router();

const loginController = new LoginConstroller();
const middlewares = new VLogin();

router.post('/', middlewares.password, middlewares.user, loginController.searchUser);

export default router;