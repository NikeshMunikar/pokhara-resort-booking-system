"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SearchWidget } from "@/components/home/search-widget";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[75vh] min-h-[560px] w-full overflow-hidden sm:h-[85vh]">
        <Image
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1920&q=80"
          alt="Phewa Lake at dawn with the Annapurna range in the background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk/80 via-dusk/20 to-dusk/10" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-mono text-xs uppercase tracking-widest text-amber-soft"
          >
            Phewa Lake, Pokhara
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-4 max-w-2xl text-5xl text-mist sm:text-6xl"
          >
            Lakeside Living, Mountain Soul
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-4 max-w-xl text-lg text-mist/85"
          >
            A resort on the water&apos;s edge, where Himalayan peaks meet
            still lake and every room faces something worth waking up for.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        className="relative mx-auto -mt-16 max-w-5xl px-6 sm:-mt-20"
      >
        <SearchWidget />
      </motion.div>
    </section>
  );
}
