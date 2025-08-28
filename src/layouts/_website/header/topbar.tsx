import Link from "next/link";
import Image from "next/image";
import cn from "@/core/utils/class-names";
import { location, socials, tagline } from "@/data/(website)/_header";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import { Separator } from "@/core/components/ui/separator";

const Topbar = () => {
  return (
    <section className={cn("bg-[#f8f8f8]")}>
      <MaxWidthContainer
        className={cn(
          "grid sm:grid-cols-2 gap-2 justify-center items-center sm:justify-between py-2"
        )}
      >
        <p className={cn("text-sm")}>{tagline}</p>

        <div
          className={cn(
            "inline-flex justify-center sm:justify-end-safe gap-2 items-center"
          )}
        >
          <Link
            href={location.url}
            className={cn("inline-flex items-center gap-1")}
          >
            <location.icon></location.icon>
            <p>{location.text}</p>
          </Link>
          <Separator
            orientation="vertical"
            className={cn("!h-5 !w-0.5   bg-[#d9d9d9]")}
          />
          <div className={cn("inline-flex gap-2")}>
            <p>Follow Us:</p>{" "}
            {socials.map((social) => (
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  height={19}
                  width={19}
                />
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Topbar;
