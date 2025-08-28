"use client";

import { Button } from "rizzui";
import { useSwiper } from "swiper/react";

// import icons and images
import { PiCaretRightBold } from "react-icons/pi";
import cn from "@/core/utils/class-names";

export default function NextBtn({ className }: { className: string }) {
  const swiper = useSwiper();
  return (
    <Button
      variant="flat"
      rounded="pill"
      className={cn(className)}
      onClick={() => swiper.slideNext()}
    >
      <PiCaretRightBold className="w-5" />
    </Button>
  );
}
