export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  stayType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    origin: "Mumbai, India",
    rating: 5,
    quote:
      "The balcony in the Annapurna View Room made the whole trip. We had coffee facing the mountains every morning and never wanted to leave.",
    stayType: "Anniversary stay",
  },
  {
    id: "t2",
    name: "Tom Whitfield",
    origin: "Bristol, UK",
    rating: 5,
    quote:
      "Booked the paragliding through the front desk and they had it arranged within the hour. Staff genuinely know the area, not just the hotel.",
    stayType: "Solo traveler",
  },
  {
    id: "t3",
    name: "Aiko Tanaka",
    origin: "Osaka, Japan",
    rating: 4,
    quote:
      "Sarangkot Suite was spacious and quiet. The lake view at sunset from the balcony was worth the upgrade on its own.",
    stayType: "Couple's getaway",
  },
  {
    id: "t4",
    name: "the Rasheed family",
    origin: "Dubai, UAE",
    rating: 5,
    quote:
      "Fewa Family Cottage gave our kids their own space and us ours, which made a two-week trip actually restful. Breakfast on the patio every day.",
    stayType: "Family trip",
  },
  {
    id: "t5",
    name: "Marco Belline",
    origin: "Turin, Italy",
    rating: 5,
    quote:
      "The plunge pool in the Executive Suite looks out at Machapuchare — I took more photos of the view than anything else on the trip.",
    stayType: "Business + leisure",
  },
];
