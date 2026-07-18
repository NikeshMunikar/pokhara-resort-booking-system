import { Skeleton } from "@/components/ui/skeleton";

export function ConfirmationLoadingSkeleton() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-section-sm">
      <div className="flex flex-col items-center">
        <Skeleton className="h-14 w-14 rounded-full" />
        <Skeleton className="mt-5 h-4 w-40" />
        <Skeleton className="mt-3 h-10 w-64" />
        <Skeleton className="mt-6 h-16 w-56 rounded-lg" />
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    </main>
  );
}
