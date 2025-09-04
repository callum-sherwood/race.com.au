"use client";
import { Tab } from "rizzui/tabs";
import { useState } from "react";
import HeadingWithDivider from "@/app/(website)/_components/heading-with-divider";
import cn from "@/core/utils/class-names";
import { Profiles } from "@/data/(website)/_homepage/profiles";
import ImageBox from "../image-box";
import { Button } from "rizzui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HorseProfile, TrainerProfile } from "@/data/types/profile.types";

type Props = {
  slice?: number;
  className?: string;
  showPageNumbers?: boolean;
  selectedIndex?: number;
};

const HorseAndTrainerProfile = ({
  slice = 6,
  className,
  showPageNumbers = true,
  selectedIndex = 0,
}: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    selectedIndex ?? 0
  );

  const [pages, setPages] = useState<number[]>(Array(Profiles.length).fill(1));

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
  };

  const handlePageChange = (tabIdx: number, newPage: number) => {
    setPages((prev) => {
      const updated = [...prev];
      updated[tabIdx] = newPage;
      return updated;
    });
  };

  return (
    <div className={cn("", className)}>
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
          onChange={handleTabChange}
          className="mt-5"
        >
          {/* Tabs */}
          <Tab.List className="flex gap-4 border-0 bg-[#F3F3F3] w-fit p-2 rounded-xl cursor-pointer [&_span]:!hidden">
            {Profiles.map((tab, idx) => (
              <Tab.ListItem
                key={idx}
                className={cn(
                  "py-2 px-3 text-[#6E6E6E] rounded-lg transition-all outline-0",
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
            {Profiles.map((tab, idx) => {
              const currentPage = pages[idx] || 1;
              const totalPages = Math.ceil(tab.profiles.length / slice);
              const start = (currentPage - 1) * slice;
              const end = start + slice;
              const paginatedProfiles = tab.profiles.slice(start, end);

              return (
                <Tab.Panel key={idx}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {paginatedProfiles.length > 0 ? (
                      paginatedProfiles.map((profile, i) => {
                        if (tab.tab_title.toLowerCase() === "horse profile") {
                          const horse = profile as HorseProfile;
                          return (
                            <ImageBox
                              key={i}
                              variant="horse profile"
                              data={{
                                id: horse.id,
                                image: horse.image,
                                name: horse.name,
                                breed: horse.breed,
                                age: horse.age,
                                height: horse.height,
                                description: horse.description,
                              }}
                              buttonText="View Details"
                              buttonLink={`/profile/horse/${horse.id}`}
                            />
                          );
                        } else {
                          const trainer = profile as TrainerProfile;
                          return (
                            <ImageBox
                              key={i}
                              variant="trainer profile"
                              data={{
                                name: trainer.name,
                                experience: trainer.experience,
                                age: trainer.age,
                                height: trainer.height,
                                description: trainer.description,
                              }}
                              buttonText="View Details"
                              buttonLink={`/profile/trainer/${trainer.id}`}
                              // buttonLink={`#`}
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

                  {/* ✅ Pagination per tab */}
                  {showPageNumbers && totalPages > 1 && (
                    <div className="flex justify-center mt-14 gap-2">
                      <Button
                        disabled={currentPage === 1}
                        onClick={() =>
                          handlePageChange(idx, Math.max(currentPage - 1, 1))
                        }
                        className="cursor-pointer rounded-lg bg-[#D9D9D9] px-2.5 h-8 w-8 hover:bg-brand-green hover:text-white transition border-0 disabled:hover:bg-[#D9D9D9] disabled:hover:text-black"
                      >
                        <Icon icon="fa6-solid:angle-left" />
                      </Button>

                      {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                          key={i}
                          onClick={() => handlePageChange(idx, i + 1)}
                          className={cn(
                            "px-3 py-1 rounded-full border-0 h-8 w-8",
                            currentPage === i + 1
                              ? "bg-brand-green text-white"
                              : "bg-[#ededed]"
                          )}
                        >
                          {i + 1}
                        </Button>
                      ))}

                      <Button
                        disabled={currentPage === totalPages}
                        onClick={() =>
                          handlePageChange(
                            idx,
                            Math.min(currentPage + 1, totalPages)
                          )
                        }
                        className="cursor-pointer rounded-lg bg-[#D9D9D9] px-2.5 h-8 w-8 hover:bg-brand-green hover:text-white transition border-0 disabled:hover:bg-[#D9D9D9] disabled:hover:text-black"
                      >
                        <Icon icon="fa6-solid:angle-right" />
                      </Button>
                    </div>
                  )}
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab>
      </div>
    </div>
  );
};

export default HorseAndTrainerProfile;
