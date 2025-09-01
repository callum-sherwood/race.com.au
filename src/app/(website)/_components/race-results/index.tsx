"use client";
import cn from "@/core/utils/class-names";
import React, { useState, useMemo } from "react";
import { DatePicker } from "@/core/ui/datepicker";
import ImageBox from "../image-box";

type Props = {
  className?: string;
};

const RaceResults = ({ className }: Props) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  // Filter races efficiently using useMemo
  const filteredRaces = useMemo(() => {
    return Race_Results.filter((race) => {
      const raceDate = new Date(race.timestamp);
      return (
        raceDate.getFullYear() === selectedMonth.getFullYear() &&
        raceDate.getMonth() === selectedMonth.getMonth() &&
        raceDate.getDate() === selectedDay.getDate()
      );
    });
  }, [selectedMonth, selectedDay]);

  return (
    <div className={cn("", className)}>
      <div className="flex gap-10">
        {/* Month + Year Picker */}
        <DatePicker
          selected={selectedMonth}
          onChange={(date) => {
            if (date) {
              setSelectedMonth(date);
              // keep day consistent with month/year
              setSelectedDay((prev) => {
                const newDate = new Date(prev);
                newDate.setFullYear(date.getFullYear());
                newDate.setMonth(date.getMonth());
                return newDate;
              });
            }
          }}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          popperPlacement="bottom-end"
          inputProps={{
            prefix: null,
            variant: "flat",
            inputClassName:
              "focus:!ring-0 focus:!border-0 px-2 h-auto [&_input]:text-ellipsis ring-0 [&_.rizzui-input-suffix]:bg-brand-green [&_.rizzui-input-suffix]:px-4 [&_.rizzui-input-suffix]:py-2 [&_.rizzui-input-suffix]:rounded-full [&_.rizzui-input-suffix]:text-white rounded-full font-inter text-base pl-5 bg-[#f8f8f8]",
          }}
          className="w-[347px] mt-4"
        />

        {/* Date Picker (syncs with Month/Year Picker) */}
        <DatePicker
          selected={selectedDay}
          onChange={(date) => {
            if (date) {
              setSelectedDay(date);
              // sync month/year with this day
              setSelectedMonth(new Date(date.getFullYear(), date.getMonth(), 1));
            }
          }}
          dateFormat="dd"
          popperPlacement="bottom-end"
          inputProps={{
            prefix: null,
            variant: "flat",
            inputClassName:
              "focus:!ring-0 focus:!border-0 px-2 h-auto [&_input]:text-ellipsis ring-0 [&_.rizzui-input-suffix]:bg-brand-green [&_.rizzui-input-suffix]:px-4 [&_.rizzui-input-suffix]:py-2 [&_.rizzui-input-suffix]:rounded-full [&_.rizzui-input-suffix]:text-white rounded-full font-inter text-base pl-5 bg-[#f8f8f8]",
          }}
          className="w-[347px] mt-4"
        />
      </div>

      {/* Stats (can later be made dynamic) */}
      <div>
        <div className="grid grid-cols-4 gap-5 mt-10">
          <div className="text-center border p-4 rounded-xl border-[#E5E5E5]">
            <h3 className="font-inter text-2xl text-brand-green font-medium">
              {filteredRaces.length}
            </h3>
            <p className="text-sm">Races Today</p>
          </div>
          <div className="text-center border p-4 rounded-xl border-[#E5E5E5]">
            <h3 className="font-inter text-2xl text-brand-green font-medium">
              {filteredRaces.filter((r) => new Date(r.timestamp) < new Date()).length}
            </h3>
            <p className="text-sm">Completed</p>
          </div>
          <div className="text-center border p-4 rounded-xl border-[#E5E5E5]">
            <h3 className="font-inter text-2xl text-brand-green font-medium">
              {filteredRaces.filter((r) => {
                const now = new Date();
                const raceDate = new Date(r.timestamp);
                return raceDate > now && raceDate.getTime() - now.getTime() < 60 * 60 * 1000;
              }).length}
            </h3>
            <p className="text-sm">In Progress</p>
          </div>
          <div className="text-center border p-4 rounded-xl border-[#E5E5E5]">
            <h3 className="font-inter text-2xl text-brand-green font-medium">
              {filteredRaces.filter((r) => new Date(r.timestamp) > new Date()).length}
            </h3>
            <p className="text-sm">Upcoming</p>
          </div>
        </div>

        {/* Races List */}
        <div className="grid grid-cols-3 gap-12 mt-10">
          {filteredRaces.length > 0 ? (
            filteredRaces.map((result, idx) => (
              <ImageBox
                key={idx}
                variant="race result"
                data={result}
                buttonText="View Details"
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No races found for this date.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const Race_Results = [
  { timestamp: "2025-07-03T14:10:00", description: "Live at Summer Derby Grounds, California" },
  { timestamp: "2025-07-04T15:30:00", description: "Live at Royal Track, London" },
  { timestamp: "2025-07-05T13:00:00", description: "Live at Emerald Downs, Washington" },
  { timestamp: "2025-07-07T16:15:00", description: "Live at Sunshine Meadows, Florida" },
  { timestamp: "2025-08-02T17:00:00", description: "Live at Golden Gate Fields, San Francisco" },
  { timestamp: "2025-08-10T12:30:00", description: "Live at Belmont Park, New York" },
  { timestamp: "2025-08-15T15:00:00", description: "Live at Ascot Racecourse, UK" },
  { timestamp: "2025-09-01T14:45:00", description: "Live at Kentucky Downs, USA" },
];

export default RaceResults;
