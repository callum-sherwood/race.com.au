"use client";
import ContentWithAdsLayout from "../_components/content-with-ads-layout";
import { AboutSection } from "@/app/(website)/_components/about-section";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import HeadingWithDivider from "../_components/heading-with-divider";
import { Race_Calender_Tabs } from "@/data/(website)/_homepage";
import { useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import type { Swiper as SwiperType } from "swiper";
import MaxWidthContainer from "../_components/max-width";
import { Tab } from "rizzui/tabs";
import { Empty } from "rizzui/empty";
import { RaceCard } from "../_components/race-calender";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DatePicker } from "@/core/ui/datepicker";
import { Button } from "rizzui/button";
import { Swiper, SwiperSlide } from "@/core/ui/carousel/carousel";

const Page = () => {
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
    <>
      <ContentWithAdsLayout
        className="pb-5 bg-white relative"
        topBanner={<AdsBlock ads={topBannerAds} />}
        sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
      >
        <div>
          <HeadingWithDivider
            title={
              <h2 className={cn("text-[32px] sm:text-[40px]")}>
                <span className="text-brand-green">Race</span> Calender
              </h2>
            }
          />
        </div>

        {/* Month Picker */}
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

        {/* Days Swiper */}
        <div className="max-w-[1100px] !relative bg-[#f8f8f8] px-4 rounded-xl flex items-center mt-10">
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
            slidesPerView={8}
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
                    className={`px-4 py-4 rounded-lg text-base transition-colors ${
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

        {/* Tabs Header */}
        <div className="mt-10">
          <Tab selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
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
          </Tab>
        </div>
      </ContentWithAdsLayout>

      {/* Panels Section (manual rendering) */}
      <MaxWidthContainer className="mt-0 pb-20">
        <div className="mt-4">
          {Race_Calender_Tabs.map((tab, idx) =>
            selectedTabIndex === idx ? (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tab.races.length > 0 ? (
                  tab.races.map((race, i) => <RaceCard key={i} {...race} />)
                ) : (
                  <Empty
                    text="No Data"
                    image={
                      <Icon icon={"subway:missing"} height={50} width={50} />
                    }
                    textClassName="mt-2 font-inter text-lg"
                    imageClassName="flex justify-center"
                    className="col-span-2 p-5"
                  />
                )}
              </div>
            ) : null
          )}
        </div>
      </MaxWidthContainer>

      <AboutSection className="bg-[#FAFAFA]" />
    </>
  );
};

export default Page;

// "use client";
// import ContentWithAdsLayout from "../_components/content-with-ads-layout";
// import { AboutSection } from "@/app/(website)/_components/about-section";
// import { sidebarAds, topBannerAds } from "../page";
// import cn from "@/core/utils/class-names";
// import AdsBlock from "@/app/(website)/_components/ads-block";
// import HeadingWithDivider from "../_components/heading-with-divider";
// import { Race_Calender_Tabs } from "@/data/(website)/_homepage";
// import { useMemo, useRef, useState } from "react";
// import dayjs from "dayjs";
// import type { Swiper as SwiperType } from "swiper";
// import MaxWidthContainer from "../_components/max-width";
// import { Tab } from "rizzui/tabs";
// import { Empty } from "rizzui/empty";
// import RaceCalendar, { RaceCard } from "../_components/race-calender";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { DatePicker } from "@/core/ui/datepicker";
// import { Button } from "rizzui/button";
// import { Swiper, SwiperSlide } from "@/core/ui/carousel/carousel";

// const Page = () => {
//   const [selectedMonth, setSelectedMonth] = useState(new Date());
//   const [selectedDay, setSelectedDay] = useState(new Date());
//   const [selectedTabIndex, setSelectedTabIndex] = useState(0);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const daysArray = useMemo(() => {
//     const daysInMonth = dayjs(selectedMonth).daysInMonth();
//     return Array.from({ length: daysInMonth }, (_, i) =>
//       dayjs(selectedMonth)
//         .date(i + 1)
//         .toDate()
//     );
//   }, [selectedMonth]);
//   return (
//     <>
//       <ContentWithAdsLayout
//         className="pb-5 bg-white relative"
//         topBanner={<AdsBlock ads={topBannerAds} />}
//         sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
//       >
//         <div>
//           <HeadingWithDivider
//             title={
//               <h2 className={cn("text-[32px] sm:text-[40px]")}>
//                 <span className="text-brand-green">Race</span> Calender
//               </h2>
//             }
//           />
//         </div>
//         <DatePicker
//           selected={selectedMonth}
//           onChange={(date) => date && setSelectedMonth(date)}
//           dateFormat="MMMM yyyy"
//           showMonthYearPicker
//           popperPlacement="bottom-end"
//           inputProps={{
//             prefix: null,
//             variant: "flat",
//             inputClassName:
//               "focus:!ring-0 focus:!border-0 px-2 h-auto [&_input]:text-ellipsis ring-0 [&_.rizzui-input-suffix]:bg-brand-green [&_.rizzui-input-suffix]:px-4 [&_.rizzui-input-suffix]:py-2 [&_.rizzui-input-suffix]:rounded-full [&_.rizzui-input-suffix]:text-white rounded-full font-inter text-base pl-5 bg-[#f8f8f8]",
//           }}
//           className="w-[347px] mt-4"
//         />

//         <div className="max-w-[1050px] !relative bg-[#f8f8f8] px-4 rounded-xl flex items-center mt-10">
//           <Button
//             className="border-0 px-0 cursor-pointer"
//             onClick={() => swiperRef.current?.slidePrev()}
//           >
//             <Icon
//               icon={"iconamoon:arrow-left-2-light"}
//               height={22.52}
//               width={22.52}
//             />
//           </Button>
//           <Swiper
//             slidesPerView={11}
//             spaceBetween={0}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             className="!px-4 !cursor-grab"
//           >
//             {daysArray.map((day, idx) => {
//               const isActive =
//                 dayjs(day).format("YYYY-MM-DD") ===
//                 dayjs(selectedDay).format("YYYY-MM-DD");
//               return (
//                 <SwiperSlide
//                   key={idx}
//                   style={{ width: "auto" }}
//                   className="!mr-0"
//                 >
//                   <button
//                     onClick={() => setSelectedDay(day)}
//                     className={`px-4 py-4 rounded-lg text-base transition-colors ${
//                       isActive
//                         ? "bg-brand-green text-white"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                   >
//                     {dayjs(day).format("D MMM")}
//                   </button>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//           <Button
//             className="border-0 px-4 py-0 cursor-pointer"
//             onClick={() => swiperRef.current?.slideNext()}
//           >
//             <Icon
//               icon={"iconamoon:arrow-right-2-light"}
//               height={22.52}
//               width={22.52}
//             />
//           </Button>
//         </div>

//         <div className="mt-10">
//           <Tab
//             selectedIndex={selectedTabIndex}
//             onChange={setSelectedTabIndex}
//             className="race-calendar-tabs"
//           >
//             <Tab.List className="flex gap-4 border-0 bg-[#f8f8f8] w-fit p-2 rounded-xl cursor-pointer [&_span]:!hidden">
//               {Race_Calender_Tabs.map((tab, idx) => (
//                 <Tab.ListItem
//                   key={idx}
//                   className={cn("py-1 px-3 text-[#6E6E6E]", {
//                     "bg-white text-black rounded-lg cursor-pointer focus-visible:!outline-0":
//                       selectedTabIndex === idx,
//                   })}
//                 >
//                   {tab.tab_title}
//                 </Tab.ListItem>
//               ))}
//             </Tab.List>

//                       <Tab.Panels className={cn("mt-4")}>
//             {Race_Calender_Tabs.map((tab, idx) => (
//               <Tab.Panel key={idx}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {tab.races.length > 0 ? (
//                     tab.races.map((race, i) => <RaceCard key={i} {...race} />)
//                   ) : (
//                     <Empty
//                       text="No Data"
//                       image={
//                         <Icon icon={"subway:missing"} height={50} width={50} />
//                       }
//                       textClassName="mt-2 font-inter text-lg"
//                       imageClassName="flex justify-center"
//                       className="col-span-2 p-5"
//                     />
//                   )}
//                 </div>
//               </Tab.Panel>
//             ))}
//           </Tab.Panels>
//           </Tab>
//         </div>
//       </ContentWithAdsLayout>
//       <MaxWidthContainer className="mt-0 pb-20">
//         <Tab>

//         </Tab>
//       </MaxWidthContainer>
//       <AboutSection className="bg-[#FAFAFA]" />
//     </>
//   );
// };

// export default Page;
