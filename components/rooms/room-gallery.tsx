"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { RoomImage } from "@/lib/types/room";

interface RoomGalleryProps {
  images: RoomImage[];
  roomName: string;
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-mist-dim sm:aspect-[16/7]">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Show photo ${i + 1} of ${roomName}`}
              aria-current={i === activeIndex}
              className={cn(
                "relative aspect-[4/3] w-full overflow-hidden rounded-md border transition-opacity sm:w-28",
                i === activeIndex
                  ? "border-pine"
                  : "border-line opacity-80 hover:opacity-100"
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
