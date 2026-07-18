import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

/**
 * Display face — used with restraint for H1/H2 and pull-quotes.
 * Fraunces' variable optical sizing gives it warmth at large sizes
 * without feeling decorative at small ones.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * UI / body face — carries all interface copy, nav, forms, and body text.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * Data face — reserved for prices, dates, booking references, and
 * anything tabular. Signals precision in a booking engine context.
 */
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = `${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`;
