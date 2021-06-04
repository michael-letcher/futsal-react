import { Router } from 'express';
import { DivisionModel } from '../models/division.model';

export const divisionsRouter = Router();

// READ all
divisionsRouter.get('/divisions', (req, res) => {
  if (!req.query.ids) {
    DivisionModel.find({}, (err, docs) => {
      if (err) {
        return res.status(500).json(err);
      }
      const docMap = {};

      if (docs && docs.length) {
        docs.forEach(league => (docMap[league._id] = league));
      }

      res.send({ divisions: docMap, count: docs ? docs.length : 0 });
    });
  } else {
    const ids = req.query.ids.split(',');

    DivisionModel.find({ _id: { $in: ids } }, (err, docs) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(docs);
    });
  }
});
