import { SearchResultsContent } from "@/components/search/search-results-content";
import { rooms } from "@/lib/data/rooms";
import {
  getAvailabilityStatus,
  calculateNights,
  calculateEstimatedTotal,
  validateSearchDates,
} from "@/lib/availability";

/**
 * Results depend on the current in-memory `bookings` array (mutated by
 * the reservation Server Action) via getAvailabilityStatus, so this
 * route must never be statically optimized.
 */
export const dynamic = "force-dynamic";

interface SearchPageProps {
  searchParams: Promise<{
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomType?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const checkIn = params.checkIn ?? "";
  const checkOut = params.checkOut ?? "";
  const guests = params.guests ?? "2";
  const roomType = params.roomType ?? "any";

  const hasSearch = Boolean(checkIn && checkOut);
  const validation = hasSearch ? validateSearchDates(checkIn, checkOut) : null;
  const nights = hasSearch && validation?.valid ? calculateNights(checkIn, checkOut) : 0;
  const validationError = hasSearch && validation && !validation.valid ? validation.error : undefined;

  const results =
    hasSearch && validation?.valid
      ? rooms
          .filter((room) => {
            if (roomType !== "any" && room.id !== roomType) return false;
            const minGuests = Number(guests);
            if (!Number.isNaN(minGuests) && room.maxGuests < minGuests) return false;
            return true;
          })
          .map((room) => ({
            room,
            status: getAvailabilityStatus(room.id, checkIn, checkOut),
            total: calculateEstimatedTotal(room.pricePerNight, nights),
          }))
      : [];

  return (
    <SearchResultsContent
      checkIn={checkIn}
      checkOut={checkOut}
      guests={guests}
      roomType={roomType}
      hasSearch={hasSearch}
      validationError={validationError}
      nights={nights}
      results={results}
    />
  );
}
