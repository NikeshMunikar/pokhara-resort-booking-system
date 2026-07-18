import { Skeleton } from "@/components/ui/skeleton";

export function SearchLoadingSkeleton() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-section-sm">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="mt-3 h-10 w-80 max-w-full" />

      <Skeleton className="mt-8 h-40 w-full rounded-lg" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-96 w-full rounded-lg" />
        ))}
      </div>
    </main>
  );
}
