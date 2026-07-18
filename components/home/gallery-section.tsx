"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/home/section-heading";
import { galleryImages } from "@/lib/data/gallery";

// A few tiles span two rows to avoid a flat, uniform grid.
const tallTileIds = new Set(["g1", "g3", "g8"]);

export function GallerySection() {
  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="A closer look at the property"
          align="left"
        />

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-lg ${
                tallTileIds.has(image.id) ? "row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
