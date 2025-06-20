import express from 'express';
import { createUser, getCurrentUser, getUsers, googleLogin, loginUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/", createUser)
userRouter.post("/login", loginUser)
userRouter.post("/google", googleLogin)
userRouter.get("/",getUsers)
userRouter.get('/me', getCurrentUser);

export default userRouter;