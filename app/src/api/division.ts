import axios from 'axios';
import { Division } from '../models/divistion';

const BASE_PATH = '/api/division';

export async function createDivision(division: Partial<Division>) {
  const response = await axios.post(`${BASE_PATH}`, { division });

  const isError = axios.isAxiosError(response);
  if (isError) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // if (response.status !== 201) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }

  return response.data;
}
