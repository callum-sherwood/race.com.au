"use client";
import { useRef, useState } from "react";
import cn from "@/core/utils/class-names";
import { Swiper, SwiperSlide } from "@/core/ui/carousel/carousel";
import ImageBox from "@/app/(website)/_components/image-box";
import { Icon } from "@iconify/react";
import { Button } from "rizzui/button";
import type { Swiper as SwiperType } from "swiper";

type Props = {
  data: any[];
  slice?: number;
  showAuthor?: boolean;
  showComments?: boolean;
  variant?: "grid" | "slider";
  cardVariant?:
    | "horse profile"
    | "trainer profile"
    | "article"
    | "race result"
    | "track";
  showPageNumbers?: boolean;
  imageBoxClassName?: string;
};

const ArticleList = ({
  data,
  slice = 6,
  showAuthor = false,
  showComments = false,
  variant = "slider",
  cardVariant = "article",
  showPageNumbers = false,
  imageBoxClassName,
}: Props) => {
  const ArticleSwiperRef = useRef<SwiperType | null>(null);

  // ✅ For grid pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / slice);

  const getPaginatedData = () => {
    const start = (currentPage - 1) * slice;
    const end = start + slice;
    return data.slice(start, end);
  };

  if (variant === "grid") {
    // ✅ GRID VIEW WITH PAGINATION
    const paginatedArticles = getPaginatedData();

    return (
      <div className="mt-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article, idx) => (
            <ImageBox
              key={idx}
              variant={cardVariant}
              data={article}
              comments={showComments}
              author={showAuthor}
              className={cn("shadow-xs w-full", imageBoxClassName)}
              contentClassName="bg-white rounded-b-xl"
              buttonText={"View Details"}
            />
          ))}
        </div>

        {/* ✅ Pagination */}
        {showPageNumbers && totalPages > 1 && (
          <div className="flex justify-center mt-14 gap-2">
            <Button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="cursor-pointer rounded-lg bg-[#D9D9D9] px-2.5 h-8 w-8 hover:bg-brand-green hover:text-white transition border-0 disabled:hover:bg-[#D9D9D9] disabled:hover:text-black"
            >
              <Icon icon="fa6-solid:angle-left" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={cn(
                  "px-3 py-1 rounded-full border-0 h-8 w-8",
                  currentPage === i + 1
                    ? "bg-brand-green text-white"
                    : "bg-[#ededed]"
                )}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="cursor-pointer rounded-lg bg-[#D9D9D9] px-2.5 h-8 w-8 hover:bg-brand-green hover:text-white transition border-0 disabled:hover:bg-[#D9D9D9] disabled:hover:text-black"
            >
              <Icon icon="fa6-solid:angle-right" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  // ✅ SLIDER VIEW
  return (
    <>
      <Swiper
        speed={500}
        spaceBetween={20}
        loop={true}
        slidesPerView={4}
        onSwiper={(swiper) => (ArticleSwiperRef.current = swiper)}
        className="h-full mt-[30px]"
      >
        {data.slice(0, slice).map((article, idx) => (
          <SwiperSlide key={idx}>
            <ImageBox
              variant={cardVariant}
              data={article}
              comments={showComments}
              author={showAuthor}
              contentClassName={cn("bg-[#FAFAFA] rounded-b-xl")}
              buttonText={"View Details"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <Button
          onClick={() => ArticleSwiperRef.current?.slidePrev()}
          className="cursor-pointer rounded-lg bg-[#D9D9D9] px-2.5 h-8 w-8 hover:bg-brand-green hover:text-white transition border-0"
        >
          <Icon icon="fa6-solid:angle-left" className="h-4 w-4 " />
        </Button>
        <Button
          onClick={() => ArticleSwiperRef.current?.slideNext()}
          className="cursor-pointer rounded-lg bg-[#D9D9D9] px-2.5 h-8 w-8 hover:bg-brand-green hover:text-white transition border-0"
        >
          <Icon icon="fa6-solid:angle-right" className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default ArticleList;
