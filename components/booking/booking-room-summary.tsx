import Image from "next/image";
import type { Room } from "@/lib/types/room";

interface BookingRoomSummaryProps {
  room: Room;
}

export function BookingRoomSummary({ room }: BookingRoomSummaryProps) {
  const image = room.images[0];

  return (
    <div className="flex items-center gap-4 rounded-lg border border-line bg-surface p-4">
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md">
        <Image src={image.src} alt={image.alt} fill sizes="80px" className="object-cover" />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-stone">
          {room.category}
        </p>
        <p className="font-display text-base text-dusk">{room.name}</p>
      </div>
    </div>
  );
}
