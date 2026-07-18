"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/home/section-heading";

const stats = [
  { value: "42", label: "Rooms & Suites" },
  { value: "2014", label: "Established" },
  { value: "4.8", label: "Average Guest Rating" },
];

export function IntroSection() {
  return (
    <section className="py-section-sm sm:py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center"
      >
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Built on the shore, facing the mountains"
            subtitle="Himāla Cove opened its doors on the quiet southern edge of Phewa Lake, where Pokhara's noise gives way to water and the Annapurna skyline. Every room was placed to face either the lake or the peaks — never a parking lot."
          />
          <p className="mt-4 max-w-xl text-base text-stone">
            What started as a single lakeside lodge has grown into a
            42-room resort without losing the thing that made it worth
            visiting in the first place: the view, and the quiet.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-data text-3xl text-pine">{stat.value}</p>
              <p className="mt-1 text-xs text-stone">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
