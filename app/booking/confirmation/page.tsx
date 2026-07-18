import { Suspense } from "react";
import { ConfirmationContent } from "@/components/booking/confirmation-content";
import { ConfirmationLoadingSkeleton } from "@/components/booking/confirmation-loading-skeleton";

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<ConfirmationLoadingSkeleton />}>
      <ConfirmationContent />
    </Suspense>
  );
}
