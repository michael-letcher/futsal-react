import axios from 'axios';
import { League } from '../models/league';

const BASE_PATH = '/api/leagues';

interface LeaguesPayload {
  leagues: { [key: string]: League };
  count: number;
}

export async function getLeagues() {
  const response = await axios.get<LeaguesPayload>(BASE_PATH);

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}
