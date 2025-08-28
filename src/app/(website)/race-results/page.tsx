import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import HeadingWithDivider from "../_components/heading-with-divider";
import { AboutSection } from "../news-listing/page";
import { Race_Results } from "@/data/(website)/_homepage";
import ImageBox from "../_components/image-box";
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

          <div className="grid grid-cols-4 gap-5 mt-10">
            <div className="text-center border p-4">
              <h3 className="font-inter text-2xl text-brand-green font-medium">
                6
              </h3>
              <p className="text-sm">Races Today</p>
            </div>
            <div className="text-center">
              <h3 className="font-inter text-2xl text-brand-green font-medium">
                3
              </h3>
              <p className="text-sm">Completed</p>
            </div>
            <div className="text-center">
              <h3 className="font-inter text-2xl text-brand-green font-medium">
                2
              </h3>
              <p className="text-sm">In Progress</p>
            </div>
            <div className="text-center">
              <h3 className="font-inter text-2xl text-brand-green font-medium">
                1
              </h3>
              <p className="text-sm">Upcoming</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">
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
        </div>
      </ContentWithAdsLayout>

      <AboutSection className="bg-[#FAFAFA]" />
    </>
  );
};

export default Page;
