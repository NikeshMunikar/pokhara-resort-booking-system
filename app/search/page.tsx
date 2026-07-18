import { Suspense } from "react";
import { SearchResultsContent } from "@/components/search/search-results-content";
import { SearchLoadingSkeleton } from "@/components/search/search-loading-skeleton";

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoadingSkeleton />}>
      <SearchResultsContent />
    </Suspense>
  );
}
