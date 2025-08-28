import Image from "next/image";
import cn from "@/core/utils/class-names";
import { header_logo } from "@/data/(website)/_header";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import SingleInputForm from "@/app/(website)/_components/single-input-form";
import { LiaUserSolid } from "react-icons/lia";

const Logobar = () => {
  return (
    <section className={cn("bg-white")}>
      <MaxWidthContainer className={cn("py-4 flex items-center gap-4")}>
        <div className={cn("basis-[35%]")}>
          <Image
            src={header_logo.src}
            width={header_logo.width}
            height={header_logo.height}
            alt={header_logo.alt}
          />
        </div>
        <div className={cn("basis-[65%] flex items-center gap-4")}>
          <SingleInputForm
            name="search"
            variant="flat"
            rounded="pill"
            placeholder="Search for ..."
            inputClassName={cn("!pl-8 !bg-[#f8f8f8] !py-3")}
            containerClassName={cn("flex-1 ")}
            buttonText="Search"
            buttonType="submit"
            buttonVariant="solid"
            buttonClassName={cn(
              "text-white bg-[#32830A] hover:bg-[#1e5407] font-medium rounded-full text-sm px-10 py-2.5 transition-colors duration-300"
            )}
          />
          <div
            className={cn("flex-none flex items-center justify-between gap-2")}
          >
            <LiaUserSolid className="h-[35px] w-[35px] flex-none" />
            <div>
              <p className={cn("text-xs")}>Login</p>
              <p className={cn("font-semibold text-sm")}>Account</p>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Logobar;
