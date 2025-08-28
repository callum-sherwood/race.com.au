import { Separator } from "@/core/components/ui/separator";
import cn from "@/core/utils/class-names";
import { blog_article } from "@/data/types";
import { format } from "date-fns";
import Image from "next/image";

const Article = ({ blog_article }: { blog_article: blog_article }) => {
  return (
    <div className="space-y-3 mt-8 pb-[70px]">
      <h1 className={cn("text-[26px] text-brand-green")}>{blog_article?.title}</h1>
      <Separator className="bg-[#d9d9d9]" />
      <div>
        <p>
          Author : <span className="font-medium">{blog_article.author.name}</span>
        </p>
        <p>
          Published on :{" "}
          <span className="font-medium">
            {format(blog_article.created_at, "dd MMMM yyyy, p")}
          </span>
        </p>
      </div>
      <Separator className="bg-[#d9d9d9]" />
      <div>
        <Image
          src={blog_article?.image || ""}
          alt={blog_article?.image || "image"}
          fill
          className="rounded-2xl"
        />
      </div>
      <div>
        <p>{blog_article.content}</p>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10"></div>
    </div>
  );
};

export default Article;
