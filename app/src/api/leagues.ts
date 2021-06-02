import axios from 'axios';
import { League } from '../models/league';

interface LeaguesPayload {
  leagues: League[];
  count: number;
}

export async function getLeagues() {
  return axios
    .get<LeaguesPayload>('/api/leagues')
    .then(res => {
      console.warn('RESPONSE', res);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
