"use client";
import MaxWidthContainer from "@/app/(website)/_components/max-width";
import HeadingWithDivider from "@/app/(website)/_components/heading-with-divider";
import cn from "@/core/utils/class-names";
import { useState } from "react";
import { Tab } from "rizzui/tabs";
import { Profiles_Tab } from "@/data/(website)/_homepage";
import ImageBox from "../image-box";

const Profile = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <section className="bg-white">
      <MaxWidthContainer className="bg-[#fafafa] py-15 px-8 mt-20">
        <HeadingWithDivider
          title={
            <h2 className={cn("text-[32px] sm:text-[40px]")}>
              <span className="text-brand-green">Horse</span> &{" "}
              <span className="text-brand-green">Trainer</span> Profile
            </h2>
          }
        />

        <div>
          <Tab
            selectedIndex={selectedTabIndex}
            onChange={setSelectedTabIndex}
            className="mt-5"
          >
            {/* Tabs */}
            <Tab.List className="flex gap-4 border-0 bg-white w-fit p-2 rounded-xl cursor-pointer [&_span]:!hidden">
              {Profiles_Tab.map((tab, idx) => (
                <Tab.ListItem
                  key={idx}
                  className={cn(
                    "py-1 px-3 text-[#6E6E6E] rounded-lg transition-all outline-0",
                    {
                      "bg-brand-green text-white": selectedTabIndex === idx,
                    }
                  )}
                >
                  {tab.tab_title}
                </Tab.ListItem>
              ))}
            </Tab.List>

            {/* Tab Panels */}
            <Tab.Panels className="mt-6">
              {Profiles_Tab.map((tab, idx) => (
                <Tab.Panel key={idx}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tab.profiles && tab.profiles.length > 0 ? (
                      tab.profiles.map((profile, i) => {
                        if (tab.tab_title.toLowerCase() === "horse profile") {
                          const horse = profile as {
                            image: string;
                            name: string;
                            breed: string;
                            age: string;
                            height: string;
                            description: string;
                          };
                          return (
                            <ImageBox
                              key={i}
                              variant="horse profile"
                              data={{
                                image: horse.image,
                                name: horse.name,
                                breed: horse.breed,
                                age: horse.age,
                                height: horse.height,
                                description: horse.description,
                              }}
                              buttonText="View Details"
                            />
                          );
                        } else {
                          const trainer = profile as {
                            name: string;
                            image: string;
                            specialization: string;
                            trophies: number;
                          };
                          return (
                            <ImageBox
                              key={i}
                              variant="trainer profile"
                              data={{
                                imageUrl: trainer.image,
                                title: trainer.name,
                                category: trainer.specialization,
                                author: "",
                                timestamp: new Date().toISOString(),
                                comments: trainer.trophies,
                              }}
                            />
                          );
                        }
                      })
                    ) : (
                      <p className="col-span-full text-center text-gray-500">
                        No profiles available
                      </p>
                    )}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Profile;
