'use client';

export default function Error({  reset }: { reset: () => void }) {
  return (
    <main className="flex h-[80%] flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
