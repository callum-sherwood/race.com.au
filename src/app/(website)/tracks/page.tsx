import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import HeadingWithDivider from "../_components/heading-with-divider";
import { tracks } from "@/data/(website)/_tracks";
import ArticleList from "../_components/article-list";

type Props = {};

const Page = (props: Props) => {
  return (
    <ContentWithAdsLayout
      className="pb-20 bg-[#f5f5f5]"
      topBanner={<AdsBlock ads={topBannerAds} />}
      sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
    >
      <div>
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">Tracks</span>
            </h2>
          }
        />

        <ArticleList
          data={tracks}
          slice={9}
          variant="grid"
          showPageNumbers={true}
          cardVariant="track"
          imageBoxClassName={cn("shadow-none bg-transparent [&>div:nth-child(1)]:bg-[#f9f9f9] [&>div:nth-child(2)]:p-2 [&>div:nth-child(2)]:bg-transparent")}
        />
      </div>
    </ContentWithAdsLayout>
  );
};

export default Page;
