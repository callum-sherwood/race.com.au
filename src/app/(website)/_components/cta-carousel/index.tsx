"use client";

import React, { useRef, useState } from "react";
import cn from "@/core/utils/class-names";
import Image from "next/image";
import Link from "next/link";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import { Swiper, SwiperSlide } from "@/core/ui/carousel/carousel";
import { Button } from "rizzui/button";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import type { Swiper as SwiperType } from "swiper";

type Slide = {
  logo?: string;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

type Props = {
  slides: Slide[];
  className?: string;
};

const CTA_Carousel = ({ slides, className }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={cn("bg-[#FAFAFA]", className)}>
      <MaxWidthContainer className={cn("relative pt-7")}>
        <Swiper
          speed={500}
          spaceBetween={0}
          loop={true}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center pt-4 pb-6  bg-[#135027]"
            >
              <Image src={slide.image} alt="alt" fill className="" />
              <div className="absolute  inset-0 bg-gradient-to-r from-[#135027]/100 to-[#135027]/0" />

              <div className="relative z-10 flex items-center justify-between px-10 py-2">
                <div>
                  {slide.logo && (
                    <div className="mb-4">
                      <Image
                        src={slide.logo}
                        alt="logo"
                        width={127}
                        height={38}
                      />
                    </div>
                  )}
                  <h2 className="text-lg md:text-2xl lg:text-3xl text-white">
                    {slide.title}
                  </h2>
                  <p className="text-base text-white font-light">
                    {slide.subtitle}
                  </p>
                </div>
                <Link href={slide.buttonLink}>
                  <Button className="bg-[#1677F1] text-white  text-base ring-3 ring-white font-medium font-inter rounded-lg">
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <div className="flex items-center justify-center gap-6 py-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <PiCaretLeftBold className="w-4 h-4" />
          </button>

          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label="Slide navigation"
                onClick={() => swiperRef.current?.slideTo(idx)}
                className={cn(
                  "rounded-full transition-all duration-300 ",
                  idx === activeIndex
                    ? "bg-green-600 w-4 h-2 cursor-not-allowed"
                    : "bg-[#D9D9D9] w-2 h-2 cursor-pointer"
                )}
              />
            ))}
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <PiCaretRightBold className="w-4 h-4" />
          </button>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default CTA_Carousel;
