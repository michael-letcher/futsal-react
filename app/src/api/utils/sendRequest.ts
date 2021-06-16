import axios, { AxiosResponse } from 'axios';
import { getRootUrl } from './getRootUrl';

export default async function sendRequest<T = any>(
  path: string,
  options: RequestInit = {},
) {
  const headers = {
    ...(options.headers || {}),
    'Content-type': 'application/json; charset=UTF-8',
  };

  const response = (await axios(`${getRootUrl()}${path}`, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    method: 'POST' as any,
    credentials: 'same-origin',
    ...options,
    headers,
  })) as AxiosResponse<T>;

  if (axios.isAxiosError(response)) {
    throw new Error(response.message);
  }

  return response.data;
}
