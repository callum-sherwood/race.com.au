import React from "react";
import MaxWidthContainer from "../max-width";
import cn from "@/core/utils/class-names";

type Props = {
  topBanner?: React.ReactNode;
  children: React.ReactNode;
  sidebarAds?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  topBannerContainerClassName?: string;
  childrenContainerClassName?: string;
  sidebarAdsContainerClassName?: string;
};

const ContentWithAdsLayout = ({
  topBanner,
  children,
  sidebarAds,
  className,
  containerClassName,
  topBannerContainerClassName,
  childrenContainerClassName,
  sidebarAdsContainerClassName,
}: Props) => {
  return (
    <section className={cn("bg-[#FAFAFA]", className)}>
      <MaxWidthContainer className={cn("flex gap-8 mt-7", containerClassName)}>
        {topBanner && (
          <div className="flex-1">
            <div className={cn("mb-2.5", topBannerContainerClassName)}>
              {topBanner}
            </div>
            <div className={cn("", childrenContainerClassName)}>{children}</div>
          </div>
        )}

        {sidebarAds && (
          <aside
            className={cn("w-full lg:w-[228px]", sidebarAdsContainerClassName)}
          >
            {sidebarAds}
          </aside>
        )}
      </MaxWidthContainer>
    </section>
  );
};

export default ContentWithAdsLayout;
