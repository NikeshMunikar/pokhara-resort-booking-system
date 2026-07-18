import Image from "next/image";
import Link from "next/link";
import { BedDouble, Maximize2, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/search/availability-badge";
import type { Room } from "@/lib/types/room";
import type { AvailabilityStatus } from "@/lib/availability";

interface StayDetails {
  nights: number;
  total: number;
}

interface SearchQuery {
  checkIn: string;
  checkOut: string;
  guests: string;
}

interface RoomCardProps {
  room: Room;
  priority?: boolean;
  /** Optional — set only on the Search Results page. Renders an availability pill. */
  availabilityStatus?: AvailabilityStatus;
  /** Optional — set only on the Search Results page. Renders an estimated stay total. */
  stayDetails?: StayDetails;
  /** Optional — set only on the Search Results page. Enables a direct "Book Now" action pre-filling the booking flow. */
  searchQuery?: SearchQuery;
}

export function RoomCard({
  room,
  priority = false,
  availabilityStatus,
  stayDetails,
  searchQuery,
}: RoomCardProps) {
  const primaryImage = room.images[0];

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {room.badge && (
          <Badge variant="highlight" className="absolute left-4 top-4">
            {room.badge}
          </Badge>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-stone">
          {room.category}
        </p>
        <h3 className="mt-2 font-display text-xl text-dusk">{room.name}</h3>
        <p className="mt-1 text-sm text-stone">{room.tagline}</p>

        {availabilityStatus && (
          <div className="mt-3">
            <AvailabilityBadge status={availabilityStatus} />
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone">
          <span className="inline-flex items-center gap-1.5">
            <Maximize2 className="h-3.5 w-3.5" />
            {room.sizeSqm} m&sup2;
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UsersRound className="h-3.5 w-3.5" />
            Up to {room.maxGuests} guests
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5" />
            {room.bedType}
          </span>
        </div>

        <div className="mt-6 flex flex-1 items-end justify-between gap-4">
          <div>
            <p className="font-data text-lg text-pine">
              NPR {room.pricePerNight.toLocaleString("en-US")}
              <span className="text-xs font-normal text-stone"> / night</span>
            </p>
            {stayDetails && (
              <p className="mt-1 font-data text-xs text-stone">
                Est. NPR {stayDetails.total.toLocaleString("en-US")} total ·{" "}
                {stayDetails.nights} {stayDetails.nights === 1 ? "night" : "nights"}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm" variant="secondary">
              <Link href={`/rooms/${room.slug}`}>View Room</Link>
            </Button>
            {searchQuery && (
              <Button asChild size="sm">
                <Link
                  href={`/booking?room=${room.id}&checkIn=${searchQuery.checkIn}&checkOut=${searchQuery.checkOut}&guests=${searchQuery.guests}`}
                >
                  Book Now
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
