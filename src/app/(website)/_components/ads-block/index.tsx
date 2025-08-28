import Link from "next/link";
import Image from "next/image";
import cn from "@/core/utils/class-names";

type AdItem = {
  href: string;
  image: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Props = {
  ads?: AdItem[];
  containerClassName?: string;
};

const AdsBlock = ({ ads = [], containerClassName }: Props) => {
  if (!ads.length) {
    return (
      <div className={cn("bg-gray-100 p-4 text-center", containerClassName)}>
        No ads available
      </div>
    );
  }

  return (
    <div className={cn(containerClassName)}>
      {ads.map((ad, idx) => (
        <Link
          key={idx}
          href={ad.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={ad.image}
            width={ad.width || 300}
            height={ad.height || 250}
            alt={ad.alt || "Advertisement"}
            className="w-full"
          />
        </Link>
      ))}
    </div>
  );
};

export default AdsBlock;
