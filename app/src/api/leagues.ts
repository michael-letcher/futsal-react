import axios from 'axios';
import { League } from '../models/league';

const BASE_PATH = '/api/leagues';

interface LeaguesPayload {
  leagues: League[];
  count: number;
}

export async function getLeagues(): Promise<LeaguesPayload> {
  const response = await axios.get<League[]>(BASE_PATH);

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return {
    leagues: response.data,
    count: response.data.length
  };
}
