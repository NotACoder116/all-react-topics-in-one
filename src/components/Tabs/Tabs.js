import React, { useState } from "react";
import { tabsData } from "./TabsData";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <div className="w-full">
      <div className="flex w-full">
        {tabsData.map((eachTab) => {
          return (
            <header key={eachTab.id} onClick={() => setSelectedTab(eachTab)}>
              {eachTab.title}
            </header>
          );
        })}
      </div>
      <main>{selectedTab?.content}</main>
    </div>
  );
};

export default Tabs;
