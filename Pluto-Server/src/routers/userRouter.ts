import config from '../config';
import { Router } from 'express';
import { IUser } from '../interface';
import { UserController } from '../controller';
import { checkAuth } from '../halper/authMiddleware';
const userRouter = Router();

userRouter.post(config.routes.user.register, (req, res) => {
  const body = req.body as IUser;
  const userController = new UserController();
  userController.register(body, (data) => {
    res.send(data);
  });
})

userRouter.get(config.routes.user.verify, (req, res) => {
  const token = req.query.token as string;
  const userController = new UserController();
  userController.verify(token, (data) => {
    res.send(data);
  });
})

userRouter.post(config.routes.user.login, (req, res) => {
  const email = req.body.email as string;
  const password = req.body.password as string;
  const userController = new UserController();
  userController.login(email, password, (data) => {
    const token = data.data.token;
    res.cookie('token', token, { httpOnly: true });
    res.send(data);
  });
})

userRouter.post(config.routes.user.updatePassword, checkAuth, (req, res) => {
  const email = req.user.email
  const oldPassword = req.body.oldPassword as string;
  const newPassword = req.body.newPassword as string;
  const userController = new UserController();
  userController.updatePassword(email, oldPassword, newPassword, (data) => {
    res.send(data);
  });
})


export default userRouter;