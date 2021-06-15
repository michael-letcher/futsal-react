import axios from 'axios';
import { getRootUrl } from './getRootUrl';

export default async function sendRequest(
  path: string,
  options: RequestInit = {},
) {
  const headers = {
    ...(options.headers || {}),
    'Content-type': 'application/json; charset=UTF-8',
  };

  const response = await axios(`${getRootUrl()}${path}`, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    method: 'POST' as any,
    credentials: 'same-origin',
    ...options,
    headers,
  });

  if (axios.isAxiosError(response)) {
    throw new Error(response.message);
  }

  return response.data;
}
