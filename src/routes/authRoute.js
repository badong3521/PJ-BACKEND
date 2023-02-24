import express from 'express';
import AuthController from '../app/controllers/auth/authController';

const AuthRouter = express.Router();

AuthRouter.post('/login', AuthController.login);
// AuthRouter.post('/refreshToken', AuthController.refreshToken);
// AuthRouter.post('/logout', AuthController.logout);
// AuthRouter.post('/logoutAll', AuthController.logoutAll);

export default AuthRouter;