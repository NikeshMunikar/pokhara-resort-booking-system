"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Leaf,
  UtensilsCrossed,
  Wifi,
  PlaneLanding,
  Dumbbell,
  Flame,
  Wind,
  PawPrint,
  Car,
  Sunrise,
  MoonStar,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/home/section-heading";
import { amenities, type Amenity } from "@/lib/data/amenities";

const iconMap: Record<Amenity["icon"], LucideIcon> = {
  waves: Waves,
  leaf: Leaf,
  "utensils-crossed": UtensilsCrossed,
  wifi: Wifi,
  "plane-landing": PlaneLanding,
  dumbbell: Dumbbell,
  flame: Flame,
  wind: Wind,
  "paw-print": PawPrint,
  car: Car,
  sunrise: Sunrise,
  "moon-star": MoonStar,
};

export function AmenitiesGrid() {
  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything the stay includes"
          align="left"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((amenity, i) => {
            const Icon = iconMap[amenity.icon];
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-pine/10 text-pine">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dusk">
                    {amenity.label}
                  </p>
                  <p className="mt-0.5 text-xs text-stone">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
