"use client";
import TabsBody from "@/components/TabsBody";
import DataAboutMe from "@/components/TabsBody/DataAboutMe";
import DataExperience from "@/components/TabsBody/DataExperience";
import TabsHead from "@/components/TabsHead";
import style from "@/styles/tabs.module.scss";
import { SetStateAction, useState } from "react";

export default function Tabs() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("About Me");

  // Function to handle tab click
  const handleTabClick = (title: SetStateAction<string>) => {
    setActiveTab(title);
  };

  return (
    <div className={`${style.container} mt-16`}>
      <TabsHead data={bodyData} fn={handleTabClick} activeTab={activeTab} />
      <TabsBody data={bodyData} activeTab={activeTab} />
    </div>
  );
}

const Skills = () => (
  <div>
    <ul>
      <li>React</li>
      <li>Next.js</li>
      <li>JavaScript</li>
      <li>CSS</li>
    </ul>
  </div>
);
const Experience = () => (
  <div>
    <p>This is the Experience section where you can list your work history.</p>
  </div>
);
const bodyData = [
  {
    title: "About Me",
    text: <DataAboutMe />
  },
  {
    title: "Skills",
    text: <Skills />
  },
  {
    title: "Experience",
    text: <DataExperience />
  }
];
