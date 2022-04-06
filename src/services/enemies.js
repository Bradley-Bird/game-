import { client, checkError } from './client';

export const fetchEnemies = async () => {
  const resp = await client.from('enemies').select();
  return checkError(resp);
};
