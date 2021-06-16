import axios from 'axios';
import { Division } from '../models/divistion';
import sendRequest from './utils/sendRequest';

const BASE_PATH = '/api/divisions';

interface DivisionPayload {
  divisions: { [key: string]: Division };
  count: number;
}

export async function getDivisions() {
  const data = await sendRequest<DivisionPayload>(BASE_PATH, { method: 'get' });
  return data;
}

export async function getDivisionsByLeagueId(leagueId: string) {
  const data = await sendRequest<DivisionPayload>(
    `${BASE_PATH}?leagueId=${leagueId}`,
    { method: 'get' },
  );
  return data;
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
