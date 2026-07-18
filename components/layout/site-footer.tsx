"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/layout/social-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogoMark, Wordmark } from "@/components/layout/logo-mark";
import { footerLinkGroups } from "@/components/layout/nav-links";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Prototype scope: simulate signup locally, no backend call.
    if (email.trim().length > 0) {
      setSubmitted(true);
      setEmail("");
    }
  }

  if (submitted) {
    return (
      <p className="text-sm text-amber" role="status">
        You&apos;re on the list — watch for lakeside offers in your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-dusk-soft bg-dusk-soft text-mist placeholder:text-stone-light"
      />
      <Button type="submit" size="md" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-dusk text-mist">
      <div className="mx-auto max-w-7xl px-6 py-section-sm">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark tone="light" />
              <Wordmark tone="light" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-stone-light">
              Lakeside on Phewa Lake, Pokhara — where Himalayan peaks meet
              still water.
            </p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-stone-light">
                Join the newsletter
              </p>
              <div className="mt-3">
                <NewsletterForm />
              </div>
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-medium uppercase tracking-widest text-stone-light">
                {group.title}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist/90 transition-colors hover:text-amber"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="contour-divider my-10 opacity-30" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-data text-xs text-stone-light">
            © {new Date().getFullYear()} Himāla Cove Resort. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-stone-light transition-colors hover:text-amber"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
