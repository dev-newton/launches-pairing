import { API_URL } from '../_config';
import { LaunchData } from '../_types';

export async function getLaunches(): Promise<LaunchData[]> {
  const res = await fetch(`${API_URL}`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      options: {
        select: ['name', 'date_utc', 'cores', 'payloads', 'links.patch.small', 'success', 'failures.reason'],
        populate: [
          {
            path: 'cores.core',
            select: ['serial'],
          },
          {
            path: 'payloads',
            select: ['name', 'type'],
          },
        ],
        limit: 10,
      },
    }),
  });
  const launches = await res.json();

  return launches.docs;
}
