"use client";

import { useRouter } from "next/navigation";
import { SectionHeading } from "@/components/home/section-heading";
import { RoomCard } from "@/components/home/room-card";
import { EmptyState } from "@/components/rooms/empty-state";
import { SearchResultsBar, type SearchCriteria } from "@/components/search/search-results-bar";
import type { Room } from "@/lib/types/room";
import type { AvailabilityStatus } from "@/lib/availability";

interface SearchResult {
  room: Room;
  status: AvailabilityStatus;
  total: number;
}

interface SearchResultsContentProps {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  hasSearch: boolean;
  validationError?: string;
  nights: number;
  results: SearchResult[];
}

export function SearchResultsContent({
  checkIn,
  checkOut,
  guests,
  roomType,
  hasSearch,
  validationError,
  nights,
  results,
}: SearchResultsContentProps) {
  const router = useRouter();

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
    hasSearch && !validationError
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
          key={`${checkIn}-${checkOut}-${guests}-${roomType}`}
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

        {hasSearch && validationError && (
          <p className="text-sm text-danger">{validationError}</p>
        )}

        {hasSearch && !validationError && (
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
