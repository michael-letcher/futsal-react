import { Router } from 'express';
import { LeagueModel } from '../models/league.model';

export const leaguesRouter = Router();

// READ
leaguesRouter.get('/leagues', (req, res) => {
  LeagueModel.find({}, (err, docs) => {
    if (err) {
      return res.status(500).json(err);
    }

    const docMap = {};

    if (docs && docs.length) {
      docs.forEach(league => (docMap[league._id] = league));
    }

    res.send({ leagues: docMap, count: docs ? docs.length : 0 });
  });
});
