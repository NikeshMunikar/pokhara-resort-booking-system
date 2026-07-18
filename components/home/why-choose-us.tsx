"use client";

import { motion } from "framer-motion";
import { Waves, MountainSnow, Leaf, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";

const reasons = [
  {
    icon: Waves,
    title: "Lakeside Setting",
    description:
      "Every room sits within view of Phewa Lake — no exceptions, no upgrades required.",
  },
  {
    icon: MountainSnow,
    title: "Mountain Views",
    description:
      "Unobstructed sightlines to the Annapurna range from our upper-floor rooms and suites.",
  },
  {
    icon: Leaf,
    title: "Wellness Focus",
    description:
      "Daily sunrise yoga, a Himalayan herbal spa menu, and quiet by design.",
  },
  {
    icon: UsersRound,
    title: "Personalized Service",
    description:
      "A small enough resort that the front desk learns your name by day two.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-mist-dim py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Himāla Cove"
          title="What sets the stay apart"
          align="left"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-pine/10 text-pine">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-dusk">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
