"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/home/section-heading";
import { experiences } from "@/lib/data/experiences";

export function ExperiencesTeaser() {
  return (
    <section className="bg-mist-dim py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Experiences"
          title="Beyond the room"
          subtitle="The front desk arranges all of these directly — no third-party booking required."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, i) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-lg border border-line bg-surface shadow-soft transition-shadow hover:shadow-elevated"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={experience.image.src}
                  alt={experience.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base text-dusk">
                  {experience.name}
                </h3>
                <p className="mt-2 text-sm text-stone">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
