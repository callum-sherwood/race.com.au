import CTA_Carousel from "@/app/(website)/_components/cta-carousel";
import { CTA_Slides } from "@/data/(website)/_homepage";
import ArticleDetail from "@/app/(website)/_components/article-detail";
import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import AdsBlock from "@/app/(website)/_components/ads-block";
import { topBannerAds, sidebarAds } from "@/app/(website)/page";
import { News_Listing } from "@/data/(website)/_homepage/news-listing";
import NewsDetails from "@/app/(website)/_components/news-details";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = News_Listing.find(
    (article) => article.url.split("/").pop() === slug
  );

  console.log();
  return (
    <>
      <ContentWithAdsLayout
        topBanner={<AdsBlock ads={topBannerAds} />}
        sidebarAds={<AdsBlock ads={sidebarAds} />}
      >
        <NewsDetails news_article={data!} />
      </ContentWithAdsLayout>
      <CTA_Carousel slides={CTA_Slides} className="bg-white" />
      <ArticleDetail
        pagination={true}
        className="bg-white"
        containerClassName="px-3 !my-0"
      />
    </>
  );
};

export default Page;
