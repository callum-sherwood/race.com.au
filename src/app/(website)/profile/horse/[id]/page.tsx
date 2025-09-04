import { Profiles } from "@/data/(website)/_homepage/profiles";
import ContentWithAdsLayout from "@/app/(website)/_components/content-with-ads-layout";
import cn from "@/core/utils/class-names";
import AdsBlock from "@/app/(website)/_components/ads-block";
import { sidebarAds, topBannerAds } from "@/app/(website)/page";
import HeadingWithDivider from "@/app/(website)/_components/heading-with-divider";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Button } from "rizzui/button";
import { HorseProfile } from "@/data/types/profile.types"; // Import HorseProfile type
import { Separator } from "@/core/components/ui/separator";
import DynamicTabs from "@/app/(website)/_components/profile-tabs";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // Find the horse profile by ID with explicit type
  const horseProfile = Profiles.find(
    (tab) => tab.tab_title === "Horse Profile"
  )?.profiles.find(
    (profile) =>
      "breed" in profile &&
      "record" in profile &&
      "earnings" in profile &&
      "recent_trainer" in profile &&
      profile.id === id
  ) as HorseProfile | undefined;

  const findTrainerId = (name: string) => {
    return Profiles.find(
      (tab) => tab.tab_title === "Trainer Profile"
    )?.profiles.find((profile) => profile.name === name)?.id;
  };

  if (!horseProfile) {
    return <p className="text-center text-gray-500">Horse profile not found</p>;
  }

  const tabs = [
    {
      label: <>Achievements</>,
      content: (
        <>
          <h4 className="text-xl font-semibold inline-flex gap-2">
            <Icon
              icon="material-symbols:trophy-outline-rounded"
              width={24}
              height={24}
              className="text-[#FFBB36]"
            />
            Major Events
          </h4>
          <ul className="grid grid-cols-2 gap-5 mt-4">
            {horseProfile.achievements.map((achievement: string) => (
              <li
                key={achievement}
                className="inline-flex items-center gap-1 bg-[#FFFAF0] p-3 rounded-lg"
              >
                <Icon
                  icon="mingcute:medal-line"
                  width={16}
                  height={16}
                  className="text-[#FFBB36]"
                />
                {achievement}
              </li>
            ))}
          </ul>
        </>
      ),
      className: "!bg-[#F4F4F4] rounded-full px-6",
      panelClassName: "border border-[#f6f6f6] rounded-lg shadow-sm p-5",
    },
    {
      label: <>Recent Races</>,
      content: (
        <>
          <ul className="grid grid-cols-2 gap-5 mt-4">
            {horseProfile.recent_races.map((race) => (
              <li key={race.event} className="bg-[#FFFAF0] p-3 rounded-lg">
                <p className="flex items-center gap-1">
                  <Icon
                    icon="mingcute:medal-line"
                    width={16}
                    height={16}
                    className="text-[#FFBB36]"
                  />
                  Position:
                  {race.position}
                </p>
                <p className="flex items-center gap-1">
                  <Icon
                    icon="material-symbols:event"
                    width={16}
                    height={16}
                    className="text-[#FFBB36]"
                  />
                  Event:
                  {race.event}
                </p>
                <p className="inline-flex items-center gap-1">
                  <Icon
                    icon="fluent:calendar-date-20-filled"
                    width={18}
                    height={18}
                    className="text-[#FFBB36]"
                  />
                  Date:
                  {race.date}
                </p>
              </li>
            ))}
          </ul>
        </>
      ),
      className: "!bg-[#F4F4F4] rounded-full px-6",
    },
    {
      label: <>News</>,
      content: (
        <ul className="">
          {horseProfile.news.map((news) => (
            <li key={news.link} className=" bg-brand-green/20 p-3 rounded-2xl">
              <Link href={news.link} className="flex gap-2">
                <Icon
                  icon="emojione:newspaper"
                  height={20}
                  width={20}
                  className=""
                />
                {news.title}
              </Link>
            </li>
          ))}
        </ul>
      ),
      className: "!bg-[#F4F4F4] rounded-full px-6",
    },
    {
      label: <>Statistics</>,
      content: (
        <div className="grid grid-cols-2 gap-3">
          <p>
            <strong>Total Races: </strong> {horseProfile.statics.total_races}
          </p>
          <p>
            <strong>Wins: </strong> {horseProfile.statics.wins}
          </p>
          <p>
            <strong>Places: </strong> {horseProfile.statics.places}
          </p>
          <p>
            <strong>Shows: </strong> {horseProfile.statics.shows}
          </p>
        </div>
      ),
      className: "!bg-[#F4F4F4] rounded-full px-6",
    },
  ];

  return (
    <ContentWithAdsLayout
      className="pb-20 bg-white"
      topBanner={<AdsBlock ads={topBannerAds} />}
      sidebarAds={<AdsBlock ads={sidebarAds} containerClassName={cn("")} />}
    >
      <HeadingWithDivider
        title={
          <h2 className={cn("text-[32px] sm:text-[40px]")}>
            <span className="text-brand-green">Horse</span> Profile
          </h2>
        }
      />
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-1 flex flex-col gap-5">
          <div className="border border-[#EDEDED] rounded-2xl p-4">
            <div className="relative w-full aspect-3/2">
              <Image
                src={horseProfile.image}
                alt={horseProfile.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>

            <div className={cn("mt-2 space-y-1.5")}>
              <h3 className="text-xl leading-snug line-clamp-2 mt-1">
                {horseProfile.name}
              </h3>

              <p className="flex items-center justify-end">
                {horseProfile.trophies}{" "}
                <Icon
                  icon="material-symbols:trophy-outline-rounded"
                  height={24}
                  width={24}
                  className="text-[#FFBB36]"
                />
              </p>

              <div className="bg-[#f4f4f4] p-2.5 rounded-lg text-base font-light space-y-2">
                <p>
                  <strong>Breed:</strong> {horseProfile.breed}
                </p>
                <p>
                  <strong>Age:</strong> {horseProfile.age}
                </p>
                <p>
                  <strong>Height:</strong> {horseProfile.height}
                </p>
              </div>

              <p className="line-clamp-2 text-base mt-3">
                <strong>Description:</strong> {horseProfile.description}
              </p>
              <p>
                <strong>Record:</strong> {horseProfile.record}
              </p>
              <p>
                <strong>Earnings:</strong> {horseProfile.earnings}
              </p>
            </div>
          </div>
          <div className="border border-[#EDEDED] rounded-2xl p-3 space-y-1.5">
            <h3 className="text-xl leading-snug line-clamp-2 mt-1">
              Recent Trainer
            </h3>
            <div className="bg-[#f4f4f4] p-2.5 rounded-lg text-base font-light space-y-2">
              <p>
                <strong>Name:</strong> {horseProfile.recent_trainer.name}
              </p>
              <p>
                <strong>Age:</strong> {horseProfile.recent_trainer.age}
              </p>
              <p>
                <strong>Height:</strong> {horseProfile.recent_trainer.height}
              </p>
            </div>
            <p className="line-clamp-2 text-base mt-3">
              <strong>Description:</strong>{" "}
              {horseProfile.recent_trainer.description}
            </p>
            <Link
              href={`/profile/trainer/${findTrainerId(
                horseProfile.recent_trainer.name
              )}`}
            >
              <Button
                className="mt-4 px-0 flex items-center gap-1 text-base font-semibold cursor-pointer hover:underline border-0"
                variant="text"
              >
                View Details
                <Icon
                  icon="fa6-solid:angle-right"
                  className="h-4 w-4 text-brand-green"
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-span-2 border border-[#EDEDED] rounded-2xl p-10">
          <h3 className="text-xl font-semibold mb-1">Additional Details</h3>
          <Separator className={cn("h-1 !w-16 bg-[#32830A]")} />
          <p>{horseProfile.description}</p>
          <div>
            <DynamicTabs
              tabs={tabs}
              className="[&_.rizzui-tab-list]:!bg-transparent [&_.rizzui-tab-list]:!px-0 "
              listClassName="flex gap-4 border-0 bg-[#f8f8f8] w-fit p-2 rounded-xl cursor-pointer [&_span]:!hidden"
            />
          </div>
        </div>
      </div>
    </ContentWithAdsLayout>
  );
};

export default Page;
