"use client";
import { useState, useMemo, useRef } from "react";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import HeadingWithDivider from "../heading-with-divider";
import { Icon } from "@iconify/react";
import { DatePicker } from "@/core/ui/datepicker";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "@/core/ui/carousel/carousel";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "rizzui/button";
import { Tab } from "rizzui/tabs";
import { Race_Calender_Tabs } from "@/data/(website)/_homepage";
import cn from "@/core/utils/class-names";
import { Empty } from "rizzui";
import { Separator } from "@/core/components/ui/separator";

const RaceCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const daysArray = useMemo(() => {
    const daysInMonth = dayjs(selectedMonth).daysInMonth();
    return Array.from({ length: daysInMonth }, (_, i) =>
      dayjs(selectedMonth)
        .date(i + 1)
        .toDate()
    );
  }, [selectedMonth]);

  return (
    <section className="bg-white">
      <MaxWidthContainer className="pt-20">
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">Race</span> Calender
            </h2>
          }
          button
          buttonIcon={<Icon icon="lets-icons:date-today" className="w-4 h-4" />}
          buttonText="View Calendar"
        />

        <DatePicker
          selected={selectedMonth}
          onChange={(date) => date && setSelectedMonth(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          popperPlacement="bottom-end"
          inputProps={{
            prefix: null,
            variant: "flat",
            inputClassName:
              "focus:!ring-0 focus:!border-0 px-2 h-auto [&_input]:text-ellipsis ring-0 [&_.rizzui-input-suffix]:bg-brand-green [&_.rizzui-input-suffix]:px-4 [&_.rizzui-input-suffix]:py-2 [&_.rizzui-input-suffix]:rounded-full [&_.rizzui-input-suffix]:text-white rounded-full font-inter text-base pl-5 bg-[#f8f8f8]",
          }}
          className="w-[347px] mt-4"
        />

        <div className="relative bg-[#f8f8f8] px-4 rounded-xl flex items-center mt-7">
          <Button
            className="border-0 px-0 cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon
              icon={"iconamoon:arrow-left-2-light"}
              height={22.52}
              width={22.52}
            />
          </Button>
          <Swiper
            slidesPerView={11}
            spaceBetween={0}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="!px-4 !cursor-grab"
          >
            {daysArray.map((day, idx) => {
              const isActive =
                dayjs(day).format("YYYY-MM-DD") ===
                dayjs(selectedDay).format("YYYY-MM-DD");
              return (
                <SwiperSlide
                  key={idx}
                  style={{ width: "auto" }}
                  className="!mr-0"
                >
                  <button
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-4 rounded-lg whitespace-nowrap text-base transition-colors ${
                      isActive
                        ? "bg-brand-green text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {dayjs(day).format("D MMM")}
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Button
            className="border-0 px-4 py-0 cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon
              icon={"iconamoon:arrow-right-2-light"}
              height={22.52}
              width={22.52}
            />
          </Button>
        </div>

        <div className="mt-7">
          <Tab
            selectedIndex={selectedTabIndex}
            onChange={setSelectedTabIndex}
            className="race-calendar-tabs"
          >
            <Tab.List className="flex gap-4 border-0 bg-[#f8f8f8] w-fit p-2 rounded-xl cursor-pointer [&_span]:!hidden">
              {Race_Calender_Tabs.map((tab, idx) => (
                <Tab.ListItem
                  key={idx}
                  className={cn("py-1 px-3 text-[#6E6E6E]", {
                    "bg-white text-black rounded-lg cursor-pointer focus-visible:!outline-0":
                      selectedTabIndex === idx,
                  })}
                >
                  {tab.tab_title}
                </Tab.ListItem>
              ))}
            </Tab.List>

            <Tab.Panels className={cn("mt-4")}>
              {Race_Calender_Tabs.map((tab, idx) => (
                <Tab.Panel key={idx}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tab.races.length > 0 ? (
                      tab.races.map((race, i) => <RaceCard key={i} {...race} />)
                    ) : (
                      <Empty
                        text="No Data"
                        image={
                          <Icon
                            icon={"subway:missing"}
                            height={50}
                            width={50}
                          />
                        }
                        textClassName="mt-2 font-inter text-lg"
                        imageClassName="flex justify-center"
                        className="col-span-2 p-5"
                      />
                    )}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default RaceCalendar;

interface Race {
  date: string;
  time: string;
  location: string;
}

export const RaceCard = ({ date, time, location }: Race) => (
  <div className="flex items-center justify-between border border-[#E9E9E9] rounded-lg p-4">
    <div className="flex items-center gap-7 relative">
      <div className="rounded-md px-3 py-3 flex items-center justify-center font-semibold bg-[#f6f6f6] aspect-square w-[70px] text-center leading-tight">
        {date}
      </div>

      <Separator
        orientation="vertical"
        className="!w-0.5 bg-[#e5e5e5] rounded-full !h-15"
      />
      <div className="space-y-1">
        <p className="flex items-center gap-1 text-base">
          <Icon
            icon="mingcute:time-line"
            height={20}
            width={20}
            fill="#4D4D4D"
          />
          Time : {time}
        </p>
        <p className="flex items-center gap-1 text-base *:">
          <Icon
            icon="mingcute:location-line"
            height={20}
            width={20}
            fill="#4D4D4D"
          />
          {location}
        </p>
      </div>
    </div>
    <button className="text-base flex items-center">
      View Details
      <Icon
        icon="iconamoon:arrow-right-2-light"
        height={24}
        width={24}
        className="text-brand-green"
      />
    </button>
  </div>
);
