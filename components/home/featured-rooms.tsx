"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoomCard } from "@/components/home/room-card";
import { SectionHeading } from "@/components/home/section-heading";
import { featuredRooms } from "@/lib/data/rooms";

export function FeaturedRooms() {
  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Rooms & Suites"
            title="A few of our favorites"
            subtitle="From lakeside doubles to a private villa with its own plunge pool — six room types, each facing water or mountain."
          />
          <Button asChild variant="secondary" className="shrink-0">
            <Link href="/rooms">
              View All Rooms
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <RoomCard room={room} priority={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
