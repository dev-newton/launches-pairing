/** @format */

import { Suspense } from 'react';

import Launch from './_components/Launch';
import { CardSkeleton } from './_ui/skeletons';
import { getLaunches } from './_services/launchesApi';

export default async function Page() {
  const launches = await getLaunches();

  return (
    <main>
      <div className="mx-auto w-full container mt-10 pb-20">
        <h2 className="mb-2 text-2xl font-bold">Launches</h2>
        <div className="grid grid-cols-3 gap-6">
          {launches.map((launch) => (
            <Suspense key={launch.id} fallback={<CardSkeleton />}>
              {/* @ts-expect-error Server Component */}
              <Launch launch={launch} />
            </Suspense>
          ))}
        </div>
      </div>
    </main>
  );
}
