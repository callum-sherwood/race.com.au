/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "@/core/utils/class-names";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "rizzui/button";
import { format } from "date-fns";

type Props = {
  variant?:
    | "horse profile"
    | "trainer profile"
    | "article"
    | "race result"
    | "track";
  className?: string;
  contentClassName?: string;

  // For article variant
  data: any;
  titleClassName?: string;
  buttonText?: string;
  buttonLink?: string;
  author?: boolean;
  comments?: boolean;
  time?: boolean;
  orientation?: "horizontal" | "vertical";
};

const ImageBox = ({
  variant = "article",
  className,
  contentClassName,
  data,

  // For article variant
  titleClassName,
  buttonText = "View",
  buttonLink = "#",
  comments = true,
  author = true,
  time = true,
  orientation = "vertical",
}: Props) => {
  switch (variant) {
    case "article":
      const isHorizontal = orientation === "horizontal";
      function timeAgoOrDate(timestamp: string) {
        const now = new Date();
        const past = new Date(timestamp);
        const diffMs = now.getTime() - past.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

        if (diffHours < 24) {
          return `${diffHours}h ago`;
        } else {
          return past.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          });
        }
      }
      return (
        <div
          className={cn(
            `bg-white rounded-xl
        ${
          isHorizontal
            ? "grid grid-cols-3 items-center py-1 px-3"
            : "flex flex-col max-w-sm"
        }`,
            className
          )}
        >
          <div
            className={`relative ${
              isHorizontal ? "aspect-3/2 w-full" : "w-full aspect-3/2"
            } `}
          >
            <Image
              src={data.imageUrl || data.image}
              alt={data.title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>

          <div
            className={cn(
              `${isHorizontal ? "p-5 col-span-2" : "p-5"}`,
              contentClassName
            )}
          >
            <p className="text-brand-green text-xs font-semibold">
              {data.category}
            </p>

            <h3
              className={cn(
                "text-xl leading-snug line-clamp-2 mt-1",
                titleClassName
              )}
            >
              {data.title}
            </h3>

            {isHorizontal && (data.description || data.excerpt) && (
              <p className="text-gray-600 text-base mt-2">
                {data.description || data.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between mt-5 text-sm font-medium text-[#4D4D4D]">
              <div className="flex items-center gap-3">
                {author && (
                  <span className="flex items-center gap-1">
                    <Icon
                      icon="iconamoon:profile-light"
                      fill="#4D4D4D"
                      className="h-4 w-4"
                    />
                    {data.author.name}
                  </span>
                )}

                {time && (
                  <span className="flex items-center gap-1">
                    <LuClock4 className="h-4 w-4" />{" "}
                    {timeAgoOrDate(data.timestamp || data.published_at)}
                  </span>
                )}
              </div>

              {comments && (
                <span className="flex items-center gap-1 pr-2">
                  <Icon icon="mdi:message-outline" className="h-4 w-4" />{" "}
                  {data.comments}
                </span>
              )}
            </div>

            <Link href={data?.url || data?.slug} className="">
              <Button className="mt-4 px-0 flex items-center gap-1 font-semibold cursor-pointer hover:underline border-0">
                {buttonText}
                <Icon
                  icon="fa6-solid:angle-right"
                  className="h-4 w-4 text-brand-green"
                />
              </Button>
            </Link>
          </div>
        </div>
      );

    case "race result":
      const dateObj = new Date(data.timestamp);

      const race_day = format(dateObj, "EEEE").toUpperCase();
      const race_date = format(dateObj, "dd MMMM");
      const race_time = format(dateObj, "h:mm a");

      return (
        <div
          className={cn(
            "bg-white rounded-xl flex flex-col items-center text-center w-full max-w-80",
            className
          )}
        >
          <div
            className={cn(
              "w-full rounded-lg py-6 font-semibold text-3xl aspect-video bg-[#f9f9f9] flex items-end justify-center relative"
            )}
          >
            {race_date}

            <span
              className={cn(
                "absolute text-xs font-semibold px-4 py-2 rounded-r-full uppercase bg-white top-6 left-0"
              )}
            >
              {race_day}
            </span>
          </div>

          <div>
            <p className="text-base text-gray-500 mt-3 line-clamp-2">
              {data.description}
            </p>

            <p className="text-base font-semibold mt-2">Time: {race_time}</p>

            <Link
              href={buttonLink}
              className="flex justify-center items-center"
            >
              <Button
                size="sm"
                variant="text"
                className="mt-2 px-0 text-sm flex items-center justify-center gap-1 font-normal hover:underline"
              >
                {buttonText}
                <Icon
                  icon="fa6-solid:angle-right"
                  className="h-4 w-4 text-brand-green"
                />
              </Button>
            </Link>
          </div>
        </div>
      );

    case "horse profile":
      return (
        <div
          className={cn(
            `bg-white rounded-xl flex flex-col max-w-80`,
            className
          )}
        >
          <div className={`relative w-full aspect-3/2`}>
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover  rounded-t-xl"
            />
          </div>

          <div className={cn("p-4 space-y-1.5", contentClassName)}>
            <h3 className="text-xl leading-snug line-clamp-2 mt-1">
              {data.name}
            </h3>

            <div className="bg-[#f4f4f4] p-2.5 rounded-lg text-base font-light space-y-2">
              <p>
                <strong>Breed :</strong> {data.breed}
              </p>
              <span className="inline-flex flex-wrap gap-8">
                <p>
                  <strong>Age :</strong> {data.age}
                </p>
                <p>
                  <strong>Height :</strong> {data.height}
                </p>
              </span>
            </div>

            <p className="line-clamp-2 text-base mt-3">
              <strong>Description : </strong>
              {data.description}
            </p>
            <Link href={buttonLink} className="">
              <Button className="mt-4 px-0 flex items-center gap-1  text-base font-semibold cursor-pointer hover:underline border-0">
                {buttonText}
                <Icon
                  icon="fa6-solid:angle-right"
                  className="h-4 w-4 text-brand-green"
                />
              </Button>
            </Link>
          </div>
        </div>
      );

    case "trainer profile":
      return (
        <div className="flex flex-col items-start shadow-md rounded-lg p-6 gap-3">
          <div className="text-brand-green rounded-full p-2 bg-[#f3f3f3] ">
            <Icon icon="iconamoon:profile-light" height={37} width={37} />
          </div>

          <h4 className="text-xl font-semibold">
            Name: <span>{data.name}</span>
          </h4>
          <div className="w-full bg-[#f4f4f4] p-2.5 rounded-lg text-base font-light space-y-2">
            <p>
              <strong>Experience: </strong>
              <span>{data.experience}</span>
            </p>
            <p>
              <strong>Age: </strong>
              <span>{data.age}</span>
            </p>
            <p>
              <strong>Height: </strong> <span>{data.height}</span>
            </p>
          </div>
          <p className="line-clamp-2 text-base">
            <strong>Description : </strong>
            {data.description}
          </p>
          <Link href={buttonLink} className="">
            <Button className="mt-4 px-0 flex items-center gap-1  text-base font-semibold cursor-pointer hover:underline border-0">
              {buttonText}
              <Icon
                icon="fa6-solid:angle-right"
                className="h-4 w-4 text-brand-green"
              />
            </Button>
          </Link>
        </div>
      );

    case "track":
      return (
        <div
          className={cn(
            "bg-white rounded-xl flex flex-col items-center text-center w-full max-w-80",
            className
          )}
        >
          <div
            className={cn(
              "w-full rounded-lg py-6 font-semibold text-3xl aspect-video bg-[#f9f9f9] flex items-end justify-center relative"
            )}
          >
            <Image
              src={data.image}
              alt="alt"
              fill
              className="w-full object-contain p-10"
            />
          </div>

          <div>
            <p className="text-base text-gray-500 mt-3 line-clamp-2">
              {data.name}, {data.city}, {data.country}
            </p>

            <p className="text-base font-semibold mt-2">
              Record : {data.record.time}
            </p>

            <Link
              href={data?.trackId}
              className="flex justify-center items-center"
            >
              <Button
                size="sm"
                variant="text"
                className="mt-2 px-0 text-sm flex items-center justify-center gap-1 font-normal hover:underline"
              >
                {buttonText}
                <Icon
                  icon="fa6-solid:angle-right"
                  className="h-4 w-4 text-brand-green"
                />
              </Button>
            </Link>
          </div>
        </div>
      );
  }
};

export default ImageBox;
