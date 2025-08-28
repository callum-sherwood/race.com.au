import MaxWidthContainer from "@/app/(website)/_components/max-width";
import cn from "@/core/utils/class-names";
import { menu_items } from "@/data/(website)/_header";
import Link from "next/link";

type Props = {};

const Menubar = (props: Props) => {
  return (
    <section className={cn("bg-gradient-to-r from-lime-700 to-stone-900")}>
      <MaxWidthContainer>
        <nav>
          <ul className="flex items-center justify-around gap-2 py-2 text-white">
            {menu_items.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={cn("text-[15px] font-light group")}
              >
                <li
                  className={cn(
                    "px-4 py-2 group-hover:bg-white group-hover:rounded-full group-hover:text-black"
                  )}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </MaxWidthContainer>
    </section>
  );
};

export default Menubar;
