import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import HeadingWithDivider from "../_components/heading-with-divider";
import { AboutSection } from "@/app/(website)/_components/about-section";
import RaceResults from "../_components/race-results";

const Page = () => {
  return (
    <>
      <ContentWithAdsLayout
        className="pb-20 bg-white"
        topBanner={<AdsBlock ads={topBannerAds} />}
        sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
      >
        <div>
          <HeadingWithDivider
            title={
              <h2 className={cn("text-[32px] sm:text-[40px]")}>
                <span className="text-brand-green">Race</span> Results
              </h2>
            }
          />
          <RaceResults />
        </div>
      </ContentWithAdsLayout>

      <AboutSection className="bg-[#FAFAFA]" />
    </>
  );
};

export default Page;
