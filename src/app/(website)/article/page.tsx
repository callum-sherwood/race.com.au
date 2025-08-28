import React from "react";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import ArticleList from "../_components/article-list";
import { articles } from "@/data/(website)/_articles";
import ImageBox from "../_components/image-box";

const Page = () => {
  return (
    <>
      <ContentWithAdsLayout
        className="pb-20"
        topBanner={<AdsBlock ads={topBannerAds} />}
        sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
      >
        <ImageBox
          variant="article"
          orientation="horizontal"
          data={articles[0]}
          comments
          author
          className="shadow-xs"
          contentClassName="bg-white rounded-b-xl"
          buttonText={"View Details"}
          titleClassName="text-[26px]"
        />
        <ArticleList
          data={articles.slice(1)}
          slice={6}
          showAuthor
          showComments
          variant="grid"
          showPageNumbers
        />
      </ContentWithAdsLayout>
    </>
  );
};

export default Page;
