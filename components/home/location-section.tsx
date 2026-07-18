"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/home/section-heading";

const attractions = [
  { name: "Tal Barahi Temple", distance: "0.8 km · boat crossing" },
  { name: "Sarangkot Viewpoint", distance: "9 km · sunrise drive" },
  { name: "World Peace Pagoda", distance: "3.5 km · lakeside trail" },
  { name: "Davis Falls", distance: "4 km" },
  { name: "Pokhara International Airport", distance: "6 km" },
];

export function LocationSection() {
  return (
    <section className="bg-mist-dim py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Find Us"
          title="On the southern shore of Phewa Lake"
          align="left"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-line bg-surface"
          >
            <div className="contour-divider absolute inset-0 h-full opacity-40" />
            <div className="relative flex flex-col items-center gap-2 text-center">
              <MapPin className="h-6 w-6 text-pine" />
              <p className="text-sm font-medium text-dusk">
                Himāla Cove Resort
              </p>
              <p className="text-xs text-stone">
                Lakeside Road, Pokhara-6, Nepal
              </p>
              <p className="mt-2 text-xs text-stone-light">
                Interactive map available at booking confirmation
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-stone">
              Nearby
            </p>
            <ul className="mt-4 space-y-4">
              {attractions.map((attraction) => (
                <li
                  key={attraction.name}
                  className="flex items-start justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-dusk">{attraction.name}</span>
                  <span className="shrink-0 text-right font-data text-xs text-stone">
                    {attraction.distance}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
