"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/home/section-heading";
import { RoomCard } from "@/components/home/room-card";
import { EmptyState } from "@/components/rooms/empty-state";
import { SearchResultsBar, type SearchCriteria } from "@/components/search/search-results-bar";
import { rooms } from "@/lib/data/rooms";
import {
  getAvailabilityStatus,
  calculateNights,
  calculateEstimatedTotal,
  validateSearchDates,
} from "@/lib/availability";

export function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const checkIn = searchParams.get("checkIn") ?? "";
  const checkOut = searchParams.get("checkOut") ?? "";
  const guests = searchParams.get("guests") ?? "2";
  const roomType = searchParams.get("roomType") ?? "any";

  const hasSearch = Boolean(checkIn && checkOut);
  const validation = hasSearch ? validateSearchDates(checkIn, checkOut) : null;
  const nights = hasSearch && validation?.valid ? calculateNights(checkIn, checkOut) : 0;

  const results = useMemo(() => {
    if (!hasSearch || !validation?.valid) return [];

    const matching = rooms.filter((room) => {
      if (roomType !== "any" && room.id !== roomType) return false;
      const minGuests = Number(guests);
      if (!Number.isNaN(minGuests) && room.maxGuests < minGuests) return false;
      return true;
    });

    return matching.map((room) => ({
      room,
      status: getAvailabilityStatus(room.id, checkIn, checkOut),
      total: calculateEstimatedTotal(room.pricePerNight, nights),
    }));
  }, [hasSearch, validation?.valid, roomType, guests, checkIn, checkOut, nights]);

  function handleSearch(criteria: SearchCriteria) {
    const query = new URLSearchParams({
      checkIn: criteria.checkIn,
      checkOut: criteria.checkOut,
      guests: criteria.guests,
      roomType: criteria.roomType,
    });
    router.push(`/search?${query.toString()}`);
  }

  const formattedRange =
    hasSearch && validation?.valid
      ? `${new Date(checkIn).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} – ${new Date(checkOut).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}`
      : null;

  return (
    <main className="mx-auto max-w-7xl px-6 py-section-sm">
      <SectionHeading eyebrow="Availability" title="Search Results" align="left" />

      <div className="mt-6">
        <SearchResultsBar
          key={searchParams.toString()}
          initialCheckIn={checkIn}
          initialCheckOut={checkOut}
          initialGuests={guests}
          initialRoomType={roomType}
          onSearch={handleSearch}
        />
      </div>

      <div className="mt-8">
        {!hasSearch && (
          <p className="text-sm text-stone">
            Start a search from the widget above to see room availability.
          </p>
        )}

        {hasSearch && validation && !validation.valid && (
          <p className="text-sm text-danger">{validation.error}</p>
        )}

        {hasSearch && validation?.valid && (
          <>
            <p className="text-sm text-stone">
              <span className="font-data text-dusk">{results.length}</span>{" "}
              {results.length === 1 ? "room" : "rooms"} · {nights}{" "}
              {nights === 1 ? "night" : "nights"} · {formattedRange}
            </p>

            {results.length === 0 ? (
              <div className="mt-6">
                <EmptyState onClear={() => router.push("/search")} />
              </div>
            ) : (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map(({ room, status, total }, i) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    priority={i < 3}
                    availabilityStatus={status}
                    stayDetails={{ nights, total }}
                    searchQuery={{ checkIn, checkOut, guests }}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
