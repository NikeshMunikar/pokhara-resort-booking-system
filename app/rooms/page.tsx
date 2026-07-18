"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/home/section-heading";
import { RoomCard } from "@/components/home/room-card";
import { RoomFilterBar, type SortOption } from "@/components/rooms/room-filter-bar";
import type { PriceBand } from "@/components/rooms/price-range-filter";
import { EmptyState } from "@/components/rooms/empty-state";
import { rooms } from "@/lib/data/rooms";

const categories = Array.from(new Set(rooms.map((room) => room.category)));

export default function RoomsPage() {
  const [category, setCategory] = useState("any");
  const [guests, setGuests] = useState("any");
  const [priceBand, setPriceBand] = useState<PriceBand>("any");
  const [sort, setSort] = useState<SortOption>("recommended");

  const filteredRooms = useMemo(() => {
    let result = rooms.filter((room) => {
      if (category !== "any" && room.category !== category) return false;

      if (guests !== "any") {
        const minGuests = Number(guests);
        if (room.maxGuests < minGuests) return false;
      }

      if (priceBand === "under25" && room.pricePerNight >= 25000) return false;
      if (
        priceBand === "25to45" &&
        (room.pricePerNight < 25000 || room.pricePerNight > 45000)
      )
        return false;
      if (priceBand === "above45" && room.pricePerNight <= 45000) return false;

      return true;
    });

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sort === "size-desc") {
      result = [...result].sort((a, b) => b.sizeSqm - a.sizeSqm);
    }

    return result;
  }, [category, guests, priceBand, sort]);

  function handleClear() {
    setCategory("any");
    setGuests("any");
    setPriceBand("any");
    setSort("recommended");
  }

  return (
    <main className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Rooms & Suites"
          title="Every room faces water or mountain"
          subtitle="Six room types across the property, from a lakeside double to a private villa with its own plunge pool."
          align="left"
        />

        <div className="mt-8">
          <RoomFilterBar
            categories={categories}
            category={category}
            onCategoryChange={setCategory}
            guests={guests}
            onGuestsChange={setGuests}
            priceBand={priceBand}
            onPriceBandChange={setPriceBand}
            sort={sort}
            onSortChange={setSort}
            resultCount={filteredRooms.length}
            onClear={handleClear}
          />
        </div>

        <div className="mt-8">
          {filteredRooms.length === 0 ? (
            <EmptyState onClear={handleClear} />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRooms.map((room, i) => (
                <RoomCard key={room.id} room={room} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
