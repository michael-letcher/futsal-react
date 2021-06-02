import axios from 'axios';
import { League } from '../models/league';

interface LeaguesPayload {
  leagues: { [key: string]: League };
  count: number;
}

export async function getLeagues() {
  const response = await axios.get<LeaguesPayload>('/api/leagues');

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}
