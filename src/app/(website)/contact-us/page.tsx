import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import AdsBlock from "@/app/(website)/_components/ads-block";
import { sidebarAds, topBannerAds } from "../page";
import cn from "@/core/utils/class-names";
import HeadingWithDivider from "../_components/heading-with-divider";
import { Contacts } from "@/data/(website)/_footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import MaxWidthContainer from "../_components/max-width";
import { Separator } from "@/core/components/ui/separator";
import ContactForm from "../_components/_forms/contact-form";

const Page = () => {
  return (
    <>
      <ContentWithAdsLayout
        className="pb-20 bg-white"
        topBanner={<AdsBlock ads={topBannerAds} />}
        sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
      >
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">Contact</span>
            </h2>
          }
        />
        <div className="grid grid-cols-3 gap-6 mt-5 ">
          {Contacts.map((contact) => {
            return (
              <div
                key={contact.type}
                className="border border-[#c6c6c6] rounded-2xl  text-center flex flex-col items-center justify-center px-5 py-16 gap-5"
              >
                {contact.type === "email" && (
                  <>
                    <Icon
                      icon="mingcute:mail-open-fill"
                      height={60}
                      width={60}
                      className="text-brand-green flex-none border p-3 border-[#d9d9d9] rounded-lg"
                    />
                    <Link
                      href={`mailto:${contact.value}`}
                      className="font-semibold text-xl"
                    >
                      {contact.value}
                    </Link>
                  </>
                )}
                {contact.type === "phone" && (
                  <>
                    <Icon
                      icon="solar:outgoing-call-bold"
                      height={60}
                      width={60}
                      className="text-brand-green flex-none border p-3 border-[#d9d9d9] rounded-lg"
                    />
                    <Link
                      href={`tel:${contact.value}`}
                      className="font-semibold text-xl"
                    >
                      {contact.value}
                    </Link>
                  </>
                )}
                {contact.type === "address" && (
                  <>
                    <Icon
                      icon="carbon:location-filled"
                      height={60}
                      width={60}
                      className="text-brand-green flex-none border p-3 border-[#d9d9d9] rounded-lg"
                    />
                    <Link
                      href={contact.mapUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-xl"
                    >
                      {contact.value}
                    </Link>{" "}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </ContentWithAdsLayout>
      <MaxWidthContainer className="grid grid-cols-2 gap-16 pb-20">
        <div className="rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.519824675393!2d76.73770197607371!3d30.675647188388364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed5cb98c5777%3A0x8a21444801a080f9!2sAdaired%20Digital%20Media!5e0!3m2!1sen!2sin!4v1756728100328!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Adaired Digital Media Location on Google Maps"
            className="w-full h-full rounded-xl border-0"
          />
        </div>

        <div className="border border-[#D9D9D9] rounded-xl p-10 flex flex-col items-center">
          <h3 className="text-[2.5rem] text-brand-green">Contact Us Today!</h3>
          <Separator className="!h-0.5 !w-28 bg-[#d9d9d9] mt-3 rounded-xl" />
          <p className="text-center text-base text-[#515151] max-w-9/12">
            Lorem Ipsum is simply dummy text of the print and typesetting
            industry.
          </p>
          <ContactForm className="w-full mt-7"/>
        </div>
      </MaxWidthContainer>
    </>
  );
};

export default Page;
