export interface NavLink {
  label: string;
  href: string;
}

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Dining", href: "/dining" },
  { label: "Spa", href: "/spa" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Rooms & Suites", href: "/rooms" },
      { label: "Experiences", href: "/experiences" },
      { label: "Dining", href: "/dining" },
      { label: "Spa & Wellness", href: "/spa" },
    ],
  },
  {
    title: "Resort",
    links: [
      { label: "About Himāla Cove", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Guest Support",
    links: [
      { label: "Booking Policies", href: "/policies" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
