import { Router } from 'express';
import { UserModel } from '../models/user.model';
import { bodyMissing } from '../utils/messages';
import { isEmpty } from '../utils/object';

export const userRouter = Router();

// READ - Logged in
userRouter.get('/user', (req, res) => {
  res.send('You have requested a user (assume logged in user)');
});

// CREATE
userRouter.post('/user', (req, res) => {
  if (isEmpty(req.body)) {
    return bodyMissing(res);
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
  if (isEmpty(req.body)) {
    return bodyMissing(res);
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
