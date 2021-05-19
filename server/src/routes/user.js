import { Router } from 'express';
import { UserModel } from '../models/user.model';

export const userRouter = Router();

userRouter.get('/user', (req, res) => {
  res.send('You have requested a user (assume logged in user)');
});

// CREATE
userRouter.post('/user', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request body is missing');
  }

  let model = new UserModel(req.body);
  model.save().then(
    doc => {
      if (!doc || doc.length) {
        return res.status(500).send(doc);
      }

      res.status(201).send(doc);
    },
    err => {
      res.status(500).json(err);
    },
  );
});

// READ
userRouter.get('/user/:userId', (req, res) => {
  if (!req.params.userId) {
    return res.status(400).send('User ID missing');
  }

  UserModel.findById(req.params.userId).then(
    doc => {
      res.json(doc);
    },
    err => {
      res.status(500).json(err);
    },
  );
});

// UPDATE
userRouter.put('/user/:userId', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Missing update body');
  }

  UserModel.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .then(
      doc => {
        res.json(doc);
      },
      err => {
        res.status(500).json(err);
      },
    )
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE
userRouter.delete('/user/:userId', (req, res) => {
  if (!req.params.userId) {
    return res.status(400).send('User ID missing');
  }

  UserModel.findByIdAndDelete(req.params.userId)
    .then(
      doc => {
        res.json(doc);
      },
      err => {
        res.status(500).json(err);
      },
    )
    .catch(err => {
      res.status(500).json(err);
    });
});
