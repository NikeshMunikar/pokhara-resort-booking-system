import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Maximize2, UsersRound, BedDouble } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/home/section-heading";
import { RoomCard } from "@/components/home/room-card";
import { Breadcrumb } from "@/components/rooms/breadcrumb";
import { RoomGallery } from "@/components/rooms/room-gallery";
import { RoomAmenityList } from "@/components/rooms/room-amenity-list";
import { RoomBookingCta } from "@/components/rooms/room-booking-cta";
import { rooms } from "@/lib/data/rooms";

interface RoomDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: RoomDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return { title: "Room Not Found" };
  }

  return {
    title: room.name,
    description: room.description,
  };
}

export default async function RoomDetailsPage({ params }: RoomDetailsPageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const similarRooms = rooms
    .filter((r) => r.id !== room.id && r.category === room.category)
    .concat(rooms.filter((r) => r.id !== room.id && r.category !== room.category))
    .slice(0, 3);

  return (
    <>
      <main className="pb-24">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Rooms", href: "/rooms" },
              { label: room.name },
            ]}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <RoomGallery images={room.images} roomName={room.name} />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-section-sm">
          <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-widest text-stone">
                  {room.category}
                </p>
                {room.badge && <Badge variant="highlight">{room.badge}</Badge>}
              </div>
              <h1 className="mt-2 text-4xl text-dusk sm:text-5xl">{room.name}</h1>
              <p className="mt-2 text-base text-stone">{room.tagline}</p>

              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-stone">
                <span className="inline-flex items-center gap-1.5">
                  <Maximize2 className="h-4 w-4" />
                  {room.sizeSqm} m&sup2;
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <UsersRound className="h-4 w-4" />
                  Up to {room.maxGuests} guests
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4" />
                  {room.bedType}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <p className="font-data text-3xl text-pine">
                NPR {room.pricePerNight.toLocaleString("en-US")}
                <span className="text-sm font-normal text-stone"> / night</span>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <SectionHeading eyebrow="Overview" title="About this room" align="left" />
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone">
              {room.description}
            </p>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Amenities" title="What's included" align="left" />
            <div className="mt-6">
              <RoomAmenityList amenities={room.amenities} />
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Policies" title="Good to know" align="left" />
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-surface p-5">
                <p className="text-sm font-medium text-dusk">Check-in / Check-out</p>
                <p className="mt-1.5 text-sm text-stone">
                  Check-in is from 2:00 PM and check-out is by 11:00 AM.
                  Early check-in and late check-out can be requested and
                  are subject to availability.
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-5">
                <p className="text-sm font-medium text-dusk">Cancellation</p>
                <p className="mt-1.5 text-sm text-stone">
                  Free cancellation up to 48 hours before arrival.
                  Cancellations within 48 hours are charged the first
                  night&apos;s rate.
                </p>
              </div>
            </div>
          </div>

          {similarRooms.length > 0 && (
            <div className="mt-14">
              <SectionHeading
                eyebrow="Explore More"
                title="Similar rooms"
                align="left"
              />
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {similarRooms.map((similarRoom) => (
                  <RoomCard key={similarRoom.id} room={similarRoom} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <RoomBookingCta pricePerNight={room.pricePerNight} roomSlug={room.slug} />
    </>
  );
}
