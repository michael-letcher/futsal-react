import { Router } from 'express';
import { LeagueModel } from '../models/league.model';

export const leaguesRouter = Router();

// READ
leaguesRouter.get('/leagues', (req, res) => {
  LeagueModel.find({}, (err, docs) => {
    const docMap = {};

    if (docs && docs.length) {
      docs.forEach(league => (docMap[league._id] = league));
    }

    res.send({ leagues: docMap, count: docs ? docs.length : 0 });
  });
});
