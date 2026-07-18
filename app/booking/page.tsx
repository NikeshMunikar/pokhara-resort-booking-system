import { Suspense } from "react";
import { BookingFlow } from "@/components/booking/booking-flow";
import { BookingLoadingSkeleton } from "@/components/booking/booking-loading-skeleton";

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingLoadingSkeleton />}>
      <BookingFlow />
    </Suspense>
  );
}
