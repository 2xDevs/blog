import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto mb-8 w-full max-w-6xl space-y-4 px-4 pt-8">
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-10 w-20" />
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-14 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-52" />
              <Skeleton className="h-4 w-44" />
            </div>
          </div>
        </div>
        <Skeleton className="my-10 aspect-video w-full rounded-2xl" />
      </div>
    </div>
  );
}
