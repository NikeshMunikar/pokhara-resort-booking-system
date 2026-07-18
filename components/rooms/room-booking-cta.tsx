import Link from "next/link";
import { Button } from "@/components/ui/button";

interface RoomBookingCtaProps {
  pricePerNight: number;
  roomSlug: string;
}

export function RoomBookingCta({ pricePerNight, roomSlug }: RoomBookingCtaProps) {
  return (
    <div className="sticky bottom-0 z-30 border-t border-line bg-surface/95 px-6 py-4 backdrop-blur sm:bottom-6 sm:mx-auto sm:max-w-2xl sm:rounded-xl sm:border sm:shadow-elevated">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 sm:mx-0">
        <p className="font-data text-lg text-pine">
          NPR {pricePerNight.toLocaleString("en-US")}
          <span className="text-xs font-normal text-stone"> / night</span>
        </p>
        <Button asChild size="md">
          <Link href={`/booking?room=${roomSlug}`}>Book This Room</Link>
        </Button>
      </div>
    </div>
  );
}
