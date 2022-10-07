import express from 'express';
import UserController from '../controller/UserController';
import VUsers from '../middlewares/VUsers';

const router = express.Router();

const userController = new UserController();
const middlewares = new VUsers();

router.post(
  '/',
  middlewares.username,
  middlewares.classe,
  middlewares.level,
  middlewares.password,
  userController.registerUser,
);

export default router;