import { Router } from 'express';
import { LeagueModel } from '../models/league.model';
import { bodyMissing } from '../utils/messages';
import { isEmpty } from '../utils/object';

export const leagueRouter = Router();

// CREATE
leagueRouter.post('/league', (req, res) => {
  if (isEmpty(req.body)) {
    return bodyMissing(res);
  }

  let model = new LeagueModel(req.body);
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
leagueRouter.get('/league/:id', (req, res) => {
  if (!req.params.id) {
    return res.status(400).send('Request param missing');
  }

  LeagueModel.findById(req.params.id).then(
    doc => {
      res.json(doc);
    },
    err => {
      res.status(500).json(err);
    },
  );
});

// UPDATE
leagueRouter.put('/league/:id', (req, res) => {
  if (isEmpty(req.body)) {
    return bodyMissing(res);
  }

  LeagueModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
leagueRouter.delete('/league/:id', (req, res) => {
  if (!req.params.id) {
    return res.status(400).send('Request param missing');
  }

  LeagueModel.findByIdAndDelete(req.params.id)
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
