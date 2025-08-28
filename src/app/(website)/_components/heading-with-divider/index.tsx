import { Separator } from "@/core/components/ui/separator";
import cn from "@/core/utils/class-names";
import Link from "next/link";
import React from "react";
import { Button } from "rizzui/button";

type Props = {
  title: React.ReactNode;
  buttonIcon?: React.ReactNode;
  button?: boolean;
  buttonText?: string;
  buttonLink?: string;
  titleContainerClassName?: string;
  dividerContainerClassName?: string;
  buttonClassName?: string;
  colouredDividerClassName?: string;
  dividerClassName?: string;
};

const HeadingWithDivider = ({
  title,
  buttonIcon,
  button = false,
  buttonText = "View All",
  buttonLink,
  titleContainerClassName,
  dividerContainerClassName,
  buttonClassName,
  colouredDividerClassName,
  dividerClassName,
}: Props) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
          titleContainerClassName
        )}
      >
        <div>{title}</div>

        {button && (
          <Link href={buttonLink || "#"}>
            <Button
              className={cn(
                "bg-[#32830A] text-base text-white rounded-lg px-5 py-2 flex items-center gap-1",
                buttonClassName
              )}
            >
              {buttonIcon}
              {buttonText}
            </Button>
          </Link>
        )}
      </div>

      <div className={cn("relative mt-2", dividerContainerClassName)}>
        <Separator
          className={cn(
            "absolute h-1 !w-20 bg-[#32830A]",
            colouredDividerClassName
          )}
        />
        <Separator className={cn("h-1 bg-[#D9D9D9]", dividerClassName)} />
      </div>
    </>
  );
};

export default HeadingWithDivider;
