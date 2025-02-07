"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Image from "next/image";

const images = [
  "/images/lokali1.jpeg",
  "/images/lokali.jpeg",
  "/images/lokali3.jpeg",
  "/images/lokali4.jpeg",
  "/images/menu.jpeg",
  "/images/qofte.jpeg",
  "/images/hell.jpeg",
  "/images/dash.jpeg",
  "/images/asude.jpeg",
  "/images/buk.jpeg",
  "/images/byrek.jpeg",
  "/images/mish.jpeg",
];

export function AboutUsCarousel() {
  return (
    <div className="w-full max-w-xs mx-auto">
      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="opacity-55">
                <Image
                  src={src}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%" }} // optional
                  alt="Company Logo"
                  className="w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute top-1/2 transform -translate-y-1/2 text-primary hover:text-primary/80 border-none 
         max-sm:left-2 sm:-left-12"
        />
        <CarouselNext
          className="absolute top-1/2 transform -translate-y-1/2 text-primary hover:text-primary/80 border-none 
         max-sm:right-2 sm:-right-12"
        />
      </Carousel>
    </div>
  );
}
