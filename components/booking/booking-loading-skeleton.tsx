import { Skeleton } from "@/components/ui/skeleton";

export function BookingLoadingSkeleton() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-section-sm">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="mt-3 h-10 w-72 max-w-full" />
      <Skeleton className="mt-8 h-10 w-full" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Skeleton className="h-96 w-full rounded-lg" />
        <Skeleton className="h-72 w-full rounded-lg" />
      </div>
    </main>
  );
}
