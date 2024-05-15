import Image from 'next/image';

import { formatDate } from '../_utils';
import {  LaunchData } from '../_types';

const Launch = async ({ launch }: { launch: LaunchData }) => {
  const status = launch.success ? 'successful' : 'failed';
  const failedStatusReason = status === 'failed' && launch.failures[0].reason;
  const payload = launch.payloads[0];
  const core = launch.cores[0].core.serial ??'N/A';

  return (
    <div className="rounded-lg shadow-md border cursor-pointer flex items-center gap-5 px-3 relative min-h-[175px]">
      <div className="flex justify-center items-center p-3 h-full border-0 border-r-[1px] border-gray-200">
        <Image src={launch.links.patch.small} alt="launch-img" width="80" height="80" />
      </div>
      <div className="py-4">
        <h1 className="font-bold text-md uppercase">{launch.name}</h1>
        <p className="text-gray-400 font-light text-sm mb-1">{formatDate(launch.date_utc)}</p>
        <div className="">
          <p className="text-[11px]">
            <span>Payload Name: </span>
            {payload.name ?? 'N/A'}
          </p>
          <p className="text-[11px]">
            <span>Payload Type: </span>
            {payload.type ?? 'N/A'}
          </p>
          <div className="flex items-center">
            <span className="text-[11px] mr-1">Core:</span>
            <p className="bg-gray-500 uppercase w-fit h-fit text-[9px] rounded-full px-1 text-white">
              {core}
            </p>
          </div>
          {status === 'failed' ? (
            <>
              <p className="text-[11px] mr-1 mt-1">Reason for failure:</p>
              <p className="text-[11px] text-gray-400 italic">{failedStatusReason}</p>
            </>
          ) : null}
        </div>
        <p
          className={`${
            status == 'successful' ? 'bg-green-400' : 'bg-red-400'
          } uppercase w-fit h-fit text-[11px] rounded px-1 py-0.5 text-white  absolute right-2 top-2`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default Launch;
