"use client";

import { ReactNode } from "react";
export default function TabsBody({
  activeTab = "",
  data = []
}: {
  activeTab?: string;
  data: {
    text: ReactNode;
    title: string;
  }[];
}) {
  return (
    <>
      <div className="tabBodys">
        {/* { Loop through the bodyData array and display the title and text} */}
        {data
          .filter((tab) => tab.title === activeTab)
          .map((tab) => (
            <div key={tab.title}>{tab.text}</div>
          ))}
      </div>
    </>
  );
}
