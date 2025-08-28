import cn from "@/core/utils/class-names";
import React from "react";
import { Box } from "rizzui/box";
import { Flex } from "rizzui/flex";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";

type Props = {
  imageUrl: string;
  title: string;
  category?: string;
  date?: string;
  className?: string;
};

const HorizontalCard = ({
  imageUrl,
  title,
  category,
  date,
  className,
}: Props) => {
  return (
    <Flex
      direction="row"
      gap="4"
      className={cn("rounded-xl bg-white p-3 ", className)}
    >
      <Box className="relative w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={205}
          height={155}
          className="rounded-[10px] w-full"
        />
      </Box>
      <Flex direction="col" gap="1" justify="center">
        <p className="text-[#32830A] text-xs font-semibold">{category}</p>
        <h3 className="text-lg leading-[1.2]">
          {title.length > 70 ? title.slice(0, 60) + "..." : title}
        </h3>
        {date && (
          <Flex gap="1" align="center" className="text-xs text-gray-500 pt-4">
            <LuClock4 className="text-gray-400" />
            <span className="font-inter text-xs font-semibold text-[#4D4D4D]">
              {date}
            </span>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default HorizontalCard;
