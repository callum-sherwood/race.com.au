"use client";

import { Tab } from "rizzui/tabs";
import React, { useState } from "react";
import cn from "@/core/utils/class-names";

type TabItem = {
  label: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  panelClassName?: string;
};

type DynamicTabsProps = {
  tabs: TabItem[];
  defaultIndex?: number;
  className?: string;
  listClassName?: string;
};

export default function DynamicTabs({
  tabs,
  defaultIndex = 0,
  className,
  listClassName,
}: DynamicTabsProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  if (!tabs.length) return null;

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <div>
      <Tab
        defaultIndex={defaultIndex}
        selectedIndex={selectedTabIndex}
        onChange={handleTabChange}
        className={cn(className)}
      >
        {/* Tab List */}
        <Tab.List className={cn("", listClassName)}>
          {tabs.map((tab, i) => (
            <Tab.ListItem
              key={i}
              className={cn(tab.className, {
                "!bg-brand-green text-white": selectedTabIndex === i,
              })}
            >
              {tab.label}
            </Tab.ListItem>
          ))}
        </Tab.List>

        {/* Tab Panels */}
        <Tab.Panels>
          {tabs.map((tab, i) => (
            <Tab.Panel key={i} className={cn(tab.panelClassName)}>
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab>
    </div>
  );
}
