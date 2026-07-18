export interface Experience {
  id: string;
  name: string;
  description: string;
  image: { src: string; alt: string };
}

export const experiences: Experience[] = [
  {
    id: "paragliding",
    name: "Paragliding over Sarangkot",
    description:
      "Tandem flights launching from Sarangkot ridge, landing lakeside near the resort.",
    image: {
      src: "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?auto=format&fit=crop&w=1000&q=80",
      alt: "Paraglider over Pokhara valley",
    },
  },
  {
    id: "boating",
    name: "Boating on Phewa Lake",
    description:
      "Rowboats and quiet mornings on the water, with Tal Barahi Temple as the turnaround point.",
    image: {
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      alt: "Wooden boats on Phewa Lake",
    },
  },
  {
    id: "trekking",
    name: "Annapurna Base Camp Send-off",
    description:
      "Resort staff coordinate permits, porters, and an early departure for multi-day treks.",
    image: {
      src: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1000&q=80",
      alt: "Annapurna mountain trekking trail",
    },
  },
  {
    id: "yoga",
    name: "Sunrise Yoga at the Viewpoint",
    description:
      "A guided session on the lawn as the Annapurna range catches first light.",
    image: {
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
      alt: "Sunrise yoga session with mountain backdrop",
    },
  },
];
