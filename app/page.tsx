import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedRooms } from "@/components/home/featured-rooms";
import { ExperiencesTeaser } from "@/components/home/experiences-teaser";
import { AmenitiesGrid } from "@/components/home/amenities-grid";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { GallerySection } from "@/components/home/gallery-section";
import { LocationSection } from "@/components/home/location-section";
import { FaqSection } from "@/components/home/faq-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="contour-divider mx-auto max-w-7xl px-6" />
      <IntroSection />
      <WhyChooseUs />
      <FeaturedRooms />
      <ExperiencesTeaser />
      <AmenitiesGrid />
      <TestimonialsSection />
      <GallerySection />
      <LocationSection />
      <FaqSection />
    </main>
  );
}
