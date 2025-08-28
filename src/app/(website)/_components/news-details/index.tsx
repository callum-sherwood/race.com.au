import { Separator } from "@/core/components/ui/separator";
import cn from "@/core/utils/class-names";
import { news_article } from "@/data/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const NewsDetails = ({ news_article }: { news_article: news_article }) => {
  return (
    <div className="space-y-3 mt-8 pb-[70px]">
      <h1 className={cn("text-[26px] text-brand-green")}>
        {news_article?.title}
      </h1>
      <Separator className="bg-[#d9d9d9]" />
      <div>
        <p>
          Author : <span className="font-medium">{news_article.author}</span>
        </p>
        <p>
          Published on :{" "}
          <span className="font-medium">
            {format(news_article.published_at, "dd MMMM yyyy, p")}
          </span>
        </p>
      </div>
      <Separator className="bg-[#d9d9d9]" />
      <div className="relative aspect-video my-8">
        <Image
          src={news_article?.image || ""}
          alt={news_article?.image || "image"}
          fill
          className="rounded-2xl"
        />
      </div>
      <div>
        <p>{news_article.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Link
          href="#"
          className="bg-[#3B5998] rounded-lg text-white flex items-center gap-2.5 p-[15px]"
        >
          <Image
            src={"/icons/white_fb_icon.svg"}
            alt="fb"
            width={30}
            height={30}
          />
          <p className="font-medium text-lg">Share</p>
        </Link>
        <Link
          href={"#"}
          className="bg-black rounded-lg text-white flex items-center gap-2.5 p-[15px]"
        >
          <Image
            src={"/icons/white_x_icon.svg"}
            alt="fb"
            width={30}
            height={30}
            className="flex-none"
          />
          <p className="font-medium text-lg">Tweet</p>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
