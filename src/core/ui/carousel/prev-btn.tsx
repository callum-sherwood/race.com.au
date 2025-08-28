"use client";

import { Button } from "rizzui";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold } from "react-icons/pi";
import cn from "@/core/utils/class-names";

export default function PrevBtn({ className }: { className: string }) {
  const swiper = useSwiper();
  return (
    <Button
      variant="flat"
      rounded="pill"
      className={cn(className)}
      onClick={() => swiper.slidePrev()}
    >
      <PiCaretLeftBold className="w-5" />
    </Button>
  );
}
