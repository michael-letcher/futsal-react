import { Router } from 'express';

export const usersRouter = Router();

/* GET users listing. */
usersRouter.get('/users', function (req, res, next) {
  res.send('respond with a resource');
});
