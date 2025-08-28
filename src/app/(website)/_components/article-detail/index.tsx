"use client";

import MaxWidthContainer from "@/app/(website)/_components/max-width";
import HeadingWithDivider from "@/app/(website)/_components/heading-with-divider";
import { News_Listing } from "@/data/(website)/_homepage/news-listing";
import cn from "@/core/utils/class-names";
import ArticleList from "../article-list";

const ArticleDetail = ({
  pagination = false,
  className,
  containerClassName,
}: {
  pagination?: boolean;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <section className={cn("bg-[#FAFAFA]", className)}>
      <MaxWidthContainer
        className={cn("my-20 bg-white py-[60px] px-10", containerClassName)}
      >
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">Article</span> Detail
            </h2>
          }
          button={true}
          buttonText="View All"
          buttonLink="#"
        />

        <ArticleList
          data={News_Listing}
          slice={8}
          variant="slider"
          showPageNumbers={pagination}
        />
      </MaxWidthContainer>
    </section>
  );
};

export default ArticleDetail;
