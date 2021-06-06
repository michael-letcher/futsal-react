import { Router } from 'express';
import { DivisionModel } from '../models/division.model';
import { bodyMissing } from '../utils/messages';
import { isEmpty } from '../utils/object';

export const divisionRouter = Router();

// CREATE
divisionRouter.post('/division', (req, res) => {
  if (isEmpty(req.body.division)) {
    return bodyMissing(res);
  }

  let model = new DivisionModel(req.body.division);
  model.save().then(
    doc => {
      if (!doc || doc.length) {
        return res.status(500).send(doc);
      }

      res.status(201).send(doc);
    },
    err => {
      console.error(err);
      res.status(500).json(err);
    },
  );
});

// READ
divisionRouter.get('/division/:id', (req, res) => {
  if (!req.params.id) {
    return res.status(400).send('Request param missing');
  }

  DivisionModel.findById(req.params.id).then(
    doc => {
      res.json(doc);
    },
    err => {
      res.status(500).json(err);
    },
  );
});

// UPDATE
divisionRouter.put('/division/:id', (req, res) => {
  if (isEmpty(req.body)) {
    return bodyMissing(res);
  }

  DivisionModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
divisionRouter.delete('/division/:id', (req, res) => {
  if (!req.params.id) {
    return res.status(400).send('Request param missing');
  }

  DivisionModel.findByIdAndDelete(req.params.id)
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
