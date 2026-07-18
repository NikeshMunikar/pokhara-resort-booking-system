"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/home/section-heading";
import { testimonials } from "@/lib/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          fill={i < rating ? "var(--color-amber)" : "none"}
          stroke="var(--color-amber)"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-mist-dim py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Guest Stories"
          title="What it's like to stay here"
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 flex-1 text-sm text-dusk">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-line pt-4">
                    <p className="text-sm font-medium text-dusk">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-stone">
                      {testimonial.origin} · {testimonial.stayType}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
