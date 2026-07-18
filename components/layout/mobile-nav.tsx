"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { primaryNavLinks } from "@/components/layout/nav-links";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-dusk md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="left-auto right-0 top-0 h-full max-w-none translate-x-0 translate-y-0 rounded-none border-0 border-l border-line p-8 sm:max-w-sm">
        <DialogTitle className="sr-only">Site navigation</DialogTitle>
        <nav className="mt-8 flex flex-col gap-1">
          {primaryNavLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-sm px-2 py-3 text-lg font-display transition-colors",
                  active ? "text-pine" : "text-dusk hover:text-pine"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 border-t border-line pt-6">
          <Button asChild size="lg" className="w-full">
            <Link href="/booking" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
