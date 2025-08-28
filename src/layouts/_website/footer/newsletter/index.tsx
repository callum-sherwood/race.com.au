import React from "react";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import SingleInputForm from "@/app/(website)/_components/single-input-form";
import Image from "next/image";
import cn from "@/core/utils/class-names";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <section className="bg-gradient-to-r to-[#32830A] from-[#020003] py-12">
      <MaxWidthContainer className="flex flex-row gap-25 items-center">
        <div className="flex items-center gap-5 flex-none">
          <div className="bg-white lg:min-h-[96px] lg:min-w-[96px] rounded-full w-fit flex flex-col items-center justify-center">
            <Image
              src={"/icons/Newsletter_icon.svg"}
              alt="Newsletter"
              height={42}
              width={56}
            />
          </div>
          <div>
            <h4 className="text-[26px] text-white">Newsletter</h4>
            <p className="font-medium text-lg text-white">
              Signup for our daily news & articles
            </p>
          </div>
        </div>

        <SingleInputForm
          name="newsletter"
          variant="flat"
          rounded="pill"
          placeholder="Enter Email Address"
          className=""
          inputClassName={cn("!pl-8 !bg-[#ffffff] !py-5")}
          containerClassName={cn("flex-1 ")}
          buttonText="Subscribe Now"
          buttonType="submit"
          buttonVariant="solid"
          buttonClassName={cn(
            "text-white bg-[#32830A] mr-2 hover:bg-[#1e5407] font-medium rounded-full text-sm px-10 py-3 transition-colors duration-300"
          )}
        />
      </MaxWidthContainer>
    </section>
  );
};

export default Newsletter;
