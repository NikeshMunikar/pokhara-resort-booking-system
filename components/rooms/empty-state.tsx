import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onClear: () => void;
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-line bg-surface px-6 py-16 text-center">
      <SearchX className="h-8 w-8 text-stone-light" />
      <h3 className="mt-4 font-display text-lg text-dusk">
        No rooms match those filters
      </h3>
      <p className="mt-2 max-w-sm text-sm text-stone">
        Try widening your price range or guest count, or clear all filters
        to see every room again.
      </p>
      <Button variant="secondary" size="sm" className="mt-6" onClick={onClear}>
        Clear Filters
      </Button>
    </div>
  );
}
