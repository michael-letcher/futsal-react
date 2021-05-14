import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/user', (req, res) => {
  res.send('You have requested a user (assume logged in user)');
});

userRouter.get('/user/:userId', (req, res) => {
  res.send(`You have requested a user with ID: ${req.params.userId}`);
});
