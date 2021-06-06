import { Router } from 'express';
import { DivisionModel } from '../models/division.model';
import { createListPayload } from '../utils/object';

export const divisionsRouter = Router();

// READ all
divisionsRouter.get('/divisions', (req, res) => {
  // ERROR
  if (!req.query.ids && !req.query.leagueId) {
    DivisionModel.find({}, (err, docs) => {
      if (err) {
        return res.status(500).json(err);
      }
      const docMap = {};

      if (docs && docs.length) {
        docs.forEach(league => (docMap[league._id] = league));
      }

      res.send(createListPayload('divisions', docs));
    });
  }
  // GET BY IDS
  else if (req.query.ids) {
    const ids = req.query.ids.split(',');

    DivisionModel.find({ _id: { $in: ids } }, (err, docs) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.send(createListPayload('divisions', docs));
    });
  }
  // GET BY LEAGUE
  else if (req.query.leagueId) {
    const leagueId = req.query.leagueId;

    DivisionModel.find({ leagueId: leagueId }, (err, docs) => {
      if (err) {
        return res.status(500).json(err);
      }

      // Should be sorted to keep a consistent return
      res.send(createListPayload('divisions', docs));
    });
  }
});
