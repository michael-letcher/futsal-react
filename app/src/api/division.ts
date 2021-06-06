import axios from 'axios';
import { Division } from '../models/divistion';

export async function createDivision(division: Partial<Division>) {
  const response = await axios.post('/api/division', { division });

  const isError = axios.isAxiosError(response);
  if (isError) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // if (response.status !== 201) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }

  return response.data;
}
