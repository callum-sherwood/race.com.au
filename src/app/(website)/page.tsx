import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import AdsBlock from "@/app/(website)/_components/ads-block";
import Image from "next/image";
import cn from "@/core/utils/class-names";
import CTA_Carousel from "@/app/(website)/_components/cta-carousel";
import {
  CTA_Slides,
  Race_Results,
  Tracks_Data,
} from "@/data/(website)/_homepage";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import { Separator } from "@/core/components/ui/separator";
import { Badge } from "rizzui/badge";
import HorizontalCard from "@/app/(website)/_components/horizontal-card";
import { LuClock4 } from "react-icons/lu";
import HeadingWithDivider from "@/app/(website)/_components/heading-with-divider";
import ArticleDetail from "@/app/(website)/_components/article-detail";
import ImageBox from "@/app/(website)/_components/image-box";
import RaceCalender from "@/app/(website)/_components/race-calender";
import Profile from "@/app/(website)/_components/profile-section";
import { Button } from "rizzui/button";
import { News_Listing } from "@/data/(website)/_homepage/news-listing";

// Ads
export const topBannerAds = [
  {
    href: "https://example.com/top1",
    image: "/ads/topBanner_Ad.png",
    alt: "Top Banner Ad",
    width: 1065,
    height: 113,
  },
];

export const sidebarAds = [
  {
    href: "https://example.com/side1",
    image: "/ads/sidebar_Ad.png",
    alt: "Sidebar Ad 1",
    width: 228,
    height: 586,
  },
];

const Home = () => {
  return (
    <>
      <ContentWithAdsLayout
        topBanner={<AdsBlock ads={topBannerAds} />}
        sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
      >
        <TopNews />
      </ContentWithAdsLayout>
      <CTA_Carousel slides={CTA_Slides} />
      <NewsListing />
      <ArticleDetail />
      <RaceResults />
      <RaceCalender />
      <Profile />
      <Tracks />
      <About />
    </>
  );
};

export default Home;

// Sections

const TopNews = () => {
  return (
    <>
      <div>
        <Image
          src={"/images/homepage_image1.png"}
          width={1065}
          height={365}
          alt="homepage_image1"
        />
      </div>
      <div className={cn("mt-3 pl-3")}>
        <h1 className={cn("text-[26px]")}>
          Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eius od
          tempor incididunt...
        </h1>
        <p className={cn("text-base font-light")}>
          Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud.
        </p>
      </div>
    </>
  );
};

const NewsListing = () => {
  return (
    <section className={cn("bg-[#FAFAFA]")}>
      <MaxWidthContainer className="mt-20">
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">News</span> Listing
            </h2>
          }
          button={true}
          buttonText="More News"
          buttonLink="#"
        />

        <div className="pt-8 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 w-full">
            <div className="w-full">
              <Image
                src={News_Listing[0].image}
                alt={News_Listing[0].title}
                width={786}
                height={408}
                className="w-full h-auto rounded-t-xl object-cover"
              />
              <div className="p-5 pt-0 bg-white rounded-xl">
                <div className="pb-4 -mt-4">
                  <Badge className="bg-[#32830A] px-3.5 py-1.5 text-white">
                    New
                  </Badge>
                </div>
                <h3 className="text-[20px] sm:text-[26px] leading-snug">
                  {News_Listing[0].title}
                </h3>
                <div className="flex flex-wrap gap-3 pt-4 items-center text-sm">
                  <p className="flex items-center gap-1 text-[#4D4D4D] font-semibold">
                    <LuClock4 className="text-gray-400" />
                    4h
                  </p>
                  <Separator
                    orientation="vertical"
                    className="!h-5 !w-0.5 bg-[#D9D9D9]"
                  />
                  <p className="text-[#32830A] font-semibold">
                    {News_Listing[0].category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            {News_Listing.slice(1, 4).map((news, index) => (
              <HorizontalCard
                key={index}
                imageUrl={news.image}
                title={news.title}
                category={news.category}
                date={news.published_at}
                className="mb-6"
              />
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

const RaceResults = () => {
  return (
    <section className="bg-white mt-20">
      <MaxWidthContainer>
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">Race</span> Results
            </h2>
          }
          button={true}
          buttonText="View All"
          buttonLink="#"
        />

        <div className="grid grid-cols-4 gap-5 mt-10">
          {Race_Results.map((result, idx) => {
            return (
              <ImageBox
                key={idx}
                variant="race result"
                data={result}
                buttonText="View Details"
              />
            );
          })}
        </div>
      </MaxWidthContainer>
    </section>
  );
};

const Tracks = () => {
  return (
    <section className="bg-white">
      <MaxWidthContainer className="mt-20">
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">Track</span>
            </h2>
          }
          button={true}
          buttonText="View All"
          buttonLink="#"
        />

        <div className="grid grid-cols-4 gap-5 mt-10">
          {Tracks_Data.map((result, idx) => {
            return (
              <ImageBox
                key={idx}
                variant="track"
                data={result}
                buttonText="View Details"
              />
            );
          })}
        </div>
      </MaxWidthContainer>
    </section>
  );
};

const About = () => {
  return (
    <section className="my-16">
      <MaxWidthContainer className="grid grid-cols-2 gap-20">
        <div className="relative -ml-[295px]">
          <Image
            src="/images/about.png"
            alt="alt"
            fill
            className="w-full object-cover"
          />
        </div>
        <div className="py-3.5">
          <p className="text-base bg-[#f5f5f5] rounded-full px-3 py-0.5 font-normal w-fit mb-2">
            About Us
          </p>
          <h3 className="text-[40px] leading-tight pb-7">
            Racing Towards Excellence in Equestrian Sports
          </h3>
          <div className="flex gap-0.5 pb-7">
            {Array.from({ length: 8 }).map((_, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-brand-green h-0.5 w-2.5 -rotate-45"
                />
              );
            })}
          </div>
          <p className="pb-5">
            From the thundering hooves on the track to the roar of the crowd, we
            bring you closer to the heart of horse racing. Our passion lies in
            showcasing the finest races, the fastest thoroughbreds, and the most
            skilled jockeys from around the globe. Every stride tells a story,
            and we make sure you don’t miss a single one.
          </p>
          <div className="grid grid-cols-2 pb-5 gap-5">
            <div>
              <p className="font-bold">0.1 World-Class Events</p>
              <p>
                We host and cover premier races featuring elite horses competing
                for top honors.
              </p>
            </div>
            <div>
              <p className="font-bold">0.2 Elite Jockeys</p>
              <p>
                Meet the champions who guide their horses to victory with
                unmatched skill and precision.
              </p>
            </div>
            <div>
              <p className="font-bold">0.3 Premier Facilities</p>
              <p>
                Our tracks and amenities are designed to deliver the ultimate
                racing experience for fans and competitors alike.
              </p>
            </div>
            <div>
              <p className="font-bold">0.4 Heritage & Tradition</p>
              <p>
                We preserve the rich history of horse racing while embracing
                innovation for the sport’s future.
              </p>
            </div>
          </div>
          <Button className="bg-brand-green border-0 outline-0 text-white px-8 py-2 text-base">
            Learn More
          </Button>
        </div>
      </MaxWidthContainer>
    </section>
  );
};
