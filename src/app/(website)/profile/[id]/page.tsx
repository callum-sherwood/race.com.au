import ContentWithAdsLayout from "../../_components/content-with-ads-layout";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import { sidebarAds, topBannerAds } from "../../page";
import HorseAndTrainerProfile from "../../_components/horse-and-trainer-profile";

const tabMap: Record<string, number> = {
  horse: 0,
  trainer: 1,
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const selectedIndex = tabMap[id] ?? 0; 

  return (
    <ContentWithAdsLayout
      className="pb-20 bg-white"
      topBanner={<AdsBlock ads={topBannerAds} />}
      sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
    >
      <HorseAndTrainerProfile selectedIndex={selectedIndex} />
    </ContentWithAdsLayout>
  );
};

export default Page;
