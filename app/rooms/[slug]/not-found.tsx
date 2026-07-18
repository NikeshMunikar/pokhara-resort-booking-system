import Link from "next/link";
import { MapPinOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoomNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-section-sm text-center">
      <MapPinOff className="h-10 w-10 text-stone-light" />
      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-amber">
        Page Not Found
      </p>
      <h1 className="mt-3 text-3xl text-dusk sm:text-4xl">
        We couldn&apos;t find that room
      </h1>
      <p className="mt-4 max-w-md text-base text-stone">
        The room you&apos;re looking for may have been renamed or is no
        longer listed. Take a look at everything currently available.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/rooms">Browse All Rooms</Link>
      </Button>
    </main>
  );
}
