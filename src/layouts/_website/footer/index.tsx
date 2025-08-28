import React from "react";
import Newsletter from "@/layouts/_website/footer/newsletter";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import { Contacts, Logo_section, Useful_links } from "@/data/(website)/_footer";
import Image from "next/image";
import cn from "@/core/utils/class-names";
import { socials } from "@/data/(website)/_header";
import Link from "next/link";
import { Icon } from "@iconify/react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <Newsletter />
      <section className="bg-white">
        <MaxWidthContainer className="grid grid-cols-12 gap-10 py-20">
          <div className="col-span-5 space-y-5">
            <div className="relative">
              <Image
                src={Logo_section.logoUrl}
                alt="logo"
                width={260}
                height={75}
              />
            </div>
            <div>
              <p>{Logo_section.description}</p>
            </div>
            <div className={cn("inline-flex gap-2 mt-2")}>
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
                    height={38}
                    width={38}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-4">
            <h4 className="text-[28px] font-bold relative pb-1">
              Useful Links
              <span className="absolute left-0 bottom-0 h-[1px] w-8 bg-green-600"></span>
              <span className="absolute left-8 bottom-0 h-[1px] w-12 bg-[#d9d9d9]"></span>
            </h4>
            <ul className="columns-2 gap-5 space-y-2 mt-4">
              {Useful_links.map((item) => (
                <li key={item.name} className="text-lg text-black font-light">
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3">
            <h4 className="text-[28px] font-bold relative pb-1">
              Contact Us
              <span className="absolute left-0 bottom-0 h-[1px] w-8 bg-green-600"></span>
              <span className="absolute left-8 bottom-0 h-[1px] w-12 bg-[#d9d9d9]"></span>
            </h4>
            <ul className="space-y-5 mt-4">
              {Contacts.map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-start text-lg font-semibold"
                >
                  {item.type === "email" && (
                    <>
                      <Icon
                        icon="mingcute:mail-open-fill"
                        height={30}
                        width={30}
                        className="text-brand-green flex-none"
                      />
                      <Link href={`mailto:${item.value}`}>{item.value}</Link>
                    </>
                  )}
                  {item.type === "phone" && (
                    <>
                      <Icon
                        icon="solar:outgoing-call-bold"
                        height={30}
                        width={30}
                        className="text-brand-green flex-none"
                      />
                      <Link href={`tel:${item.value}`}>{item.value}</Link>
                    </>
                  )}
                  {item.type === "address" && (
                    <>
                      <Icon
                        icon="carbon:location-filled"
                        height={30}
                        width={30}
                        className="text-brand-green flex-none"
                      />
                      <Link
                        href={item.mapUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </Link>{" "}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </MaxWidthContainer>
        <MaxWidthContainer className="pb-10">
          <div className="w-full bg-[#32830A]/4 text-center rounded-full py-2">
            <p className="text-sm text-[#525252]">© Horse Racing 2025 | Privacy Policy</p>
          </div>
        </MaxWidthContainer>
      </section>
    </>
  );
};

export default Footer;
