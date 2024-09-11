import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto mb-8 w-full max-w-3xl space-y-10 px-4 pt-8">
      <div className="flex w-full gap-10">
        <Skeleton className="aspect-square h-48 rounded-full pt-10" />
        <div className="my-3 flex-1 space-y-3">
          <Skeleton className="h-8 w-3/5 rounded-2xl" />
          <Skeleton className="h-6 w-2/5 rounded-2xl" />
          <Skeleton className="h-5 w-1/5 rounded-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="h-10 w-1/6 rounded-2xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton className="h-10 w-1/6 rounded-2xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
      </div>
    </div>
  );
}
