import axios from 'axios';
import { Division } from '../models/divistion';

interface DivisionPayload {
  divisions: { [key: string]: Division };
  count: number;
}

export async function getDivisions() {
  const response = await axios.get<DivisionPayload>('/api/divisions');

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}

export async function getDivisionsByLeagueId(leagueId: string) {
  const response = await axios.get<DivisionPayload>(
    `/api/divisions?leagueId=${leagueId}`,
  );

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}

export async function getDivisionsByIds(leagueIds: string[]) {
  const response = await axios.get<DivisionPayload>(
    `/api/divisions?leagueId=${leagueIds.toString()}`,
  );

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}
