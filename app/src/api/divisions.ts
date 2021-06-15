import axios from 'axios';
import { Division } from '../models/divistion';

const BASE_PATH = '/api/divisions';

interface DivisionPayload {
  divisions: { [key: string]: Division };
  count: number;
}

export async function getDivisions() {
  const response = await axios.get<DivisionPayload>(BASE_PATH);

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}

export async function getDivisionsByLeagueId(leagueId: string) {
  const response = await axios.get<DivisionPayload>(
    `${BASE_PATH}?leagueId=${leagueId}`,
  );

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}

export async function getDivisionsByIds(leagueIds: string[]) {
  const response = await axios.get<DivisionPayload>(
    `${BASE_PATH}?leagueId=${leagueIds.toString()}`,
  );

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}
