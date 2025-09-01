import React from "react";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import ArticleList from "../_components/article-list";
import { News_Listing } from "@/data/(website)/_homepage/news-listing";
import { AboutSection } from "../_components/about-section";

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
