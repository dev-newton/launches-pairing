// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} flex gap-3 relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="absolute right-3 top-3">
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-20 w-20 rounded-full bg-gray-200" />
      </div>
      <div className="flex flex-col gap-2 items-start justify-center truncate rounded-xl bg-white px-3 py-8 w-[80%]">
        <div className="h-7 w-[100px] rounded bg-gray-200" />
        <div className="h-4 w-[100px] rounded bg-gray-200" />
        <div className="h-2 w-[150px] rounded bg-gray-200" />
        <div className="h-2 w-[120px] rounded bg-gray-200" />
        <div className="h-2 w-[100px] rounded bg-gray-200" />
      </div>
    </div>
  );
}