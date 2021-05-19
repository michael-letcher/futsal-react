import { Router } from 'express';
import { UserModel } from '../models/user.model';

export const usersRouter = Router();

/* GET users listing. */
usersRouter.get('/users', (req, res) => {
  UserModel.find({}, (err, docs) => {
    const userMap = {};

    docs.forEach(user => {
      userMap[user._id] = user;
    });

    res.send({ users: userMap, count: docs.length });
  });
});
