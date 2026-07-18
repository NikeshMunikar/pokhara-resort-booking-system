import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Himāla Cove — Lakeside Living, Mountain Soul",
    template: "%s | Himāla Cove",
  },
  description:
    "A lakeside resort on Phewa Lake, Pokhara, where Himalayan peaks meet still water. Discover rooms, dining, and wellness at Himāla Cove.",
  metadataBase: new URL("https://himalacove.example.com"),
  openGraph: {
    title: "Himāla Cove — Lakeside Living, Mountain Soul",
    description:
      "A lakeside resort on Phewa Lake, Pokhara, where Himalayan peaks meet still water.",
    siteName: "Himāla Cove",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="bg-background text-foreground font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
