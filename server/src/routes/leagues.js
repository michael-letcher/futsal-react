import { Router } from 'express';
import { LeagueModel } from '../models/league.model';
import { createListPayload } from '../utils/object';

export const leaguesRouter = Router();

// READ
leaguesRouter.get('/leagues', (req, res) => {
  LeagueModel.find({}, (err, docs) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.send(createListPayload('leagues', docs));
  });
});
