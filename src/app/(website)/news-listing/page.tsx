import React from "react";
import MaxWidthContainer from "../_components/max-width";
import Image from "next/image";
import { AboutData } from "@/data/(website)/_homepage";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import ArticleList from "../_components/article-list";
import { News_Listing } from "@/data/(website)/_homepage/news-listing";

const Page = () => {
  return (
    <>
      <ContentWithAdsLayout
        className="pb-20"
        topBanner={<AdsBlock ads={topBannerAds} />}
        sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
      >
        <ArticleList
          data={News_Listing}
          slice={12}
          variant="grid"
          showPageNumbers
        />
      </ContentWithAdsLayout>

      <AboutSection />
    </>
  );
};

export default Page;

export const AboutSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn("", className)}>
      <MaxWidthContainer className="py-24">
        {/* Intro */}
        <div className="flex flex-col items-center justify-center text-center mb-7">
          <p className="text-base bg-[#f5f5f5] rounded-full px-3 py-0.5 font-normal w-fit mb-2">
            {AboutData.intro.badge}
          </p>
          <h3 className="text-[40px] leading-tight pb-7">
            {AboutData.intro.heading}
          </h3>
          {AboutData.intro.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 text-gray-700">
              {para}
            </p>
          ))}
        </div>

        {/* Sections */}
        {AboutData.sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex gap-8 items-center mb-7 ${
              sec.reverse ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex-none">
              <Image
                src={sec.image}
                alt={sec.alt}
                height={323}
                width={597}
                className="rounded-xl shadow"
              />
            </div>
            <div>
              {sec.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Closing */}
        <div className="text-center">
          {AboutData.closing.map((para, idx) => (
            <p key={idx} className="mb-4 text-gray-700">
              {para}
            </p>
          ))}
        </div>
      </MaxWidthContainer>
    </section>
  );
};
