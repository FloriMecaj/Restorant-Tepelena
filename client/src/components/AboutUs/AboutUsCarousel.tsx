"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg max-[345px]:h-[280px]"
                />{" "}
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
