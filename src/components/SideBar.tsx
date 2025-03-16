import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");

interface SideBarProps {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  setActiveTab: (tab: string) => void;
  setClosedTabs: React.Dispatch<React.SetStateAction<string[]>>;
  activeTab: string;
}

const projects = [
  {
    name: "Soil Testing and AI",
    icon: JSIcon,
    link: "https://soilfusion.netlify.app/"
  },
  {
    name: "GDSC Website",
    icon: TSIcon,
    link: "https://gdsculm.org"
  },
  {
    name: "Google Calculator",
    icon: JSIcon,
    link: "https://lochan027.github.io/GoogleCalculator/"
  },
  {
    name: "Palindrome Checker",
    icon: TSIcon,
    link: "https://lochan027.github.io/palindromecheck/"
  },
  {
    name: "ADLS Connection Code",
    icon: JSIcon,
    link: "https://github.com/lochan027/ADLSConnection"
  }
];

export const tabs = [
  { id: "home", name: "Home.ts", icon: TSIcon },
  { id: "about", name: "About.ts", icon: TSIcon },
  { id: "projects", name: "Projects.ts", icon: TSIcon },
  { id: "achievements", name: "Achievements.ts", icon: TSIcon },
  { id: "resume", name: "Resume.ts", icon: TSIcon },
  { id: "contact", name: "Contact.ts", icon: TSIcon }
];

const SideBar: React.FC<SideBarProps> = ({
  setWidth,
  width,
  setActiveTab,
  setClosedTabs,
  activeTab
}) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);
  const [showSrcList, SetShowSrcList] = useState(true);
  const [showComponentsList, SetShowComponentsList] = useState(true);

  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const delta = mouseMoveEvent.clientX - mouseDownEvent.clientX;
      const newWidth = Math.max(170, mouseDownEvent.clientX + delta);
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setWidth(parseInt(savedWidth));
    }
  }, [setWidth]);

  const handleNavItemClick = (tab: string) => {
    setActiveTab(tab);
    setClosedTabs(prev => prev.filter(t => t !== tab));
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full h-full relative">
        <div className="text-[#a2aabc] text-lg mt-5 pb-24 overflow-y-auto flex-1">
          {/* Projects Section */}
          <div
            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
            onClick={() => SetShowProjectsList(!showProjectsList)}
          >
            {showProjectsList ? (
              <ChevronDownIcon className="w-7 mr-1" />
            ) : (
              <ChevronRightIcon className="w-7 mr-1" />
            )}
            <p>Project - Lochan Acharya</p>
          </div>
          {showProjectsList && (
            <>
              {/* Src Folder */}
              <div
                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold ml-5"
                onClick={() => SetShowSrcList(!showSrcList)}
              >
                {showSrcList ? (
                  <ChevronDownIcon className="w-7 mr-1" />
                ) : (
                  <ChevronRightIcon className="w-7 mr-1" />
                )}
                <p>src</p>
              </div>
              {showSrcList && (
                <>
                  {/* Components Folder */}
                  <div
                    className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold ml-10"
                    onClick={() => SetShowComponentsList(!showComponentsList)}
                  >
                    {showComponentsList ? (
                      <ChevronDownIcon className="w-7 mr-1" />
                    ) : (
                      <ChevronRightIcon className="w-7 mr-1" />
                    )}
                    <p>components</p>
                  </div>
                  {/* Navigation Items */}
                  {showComponentsList && (
                    <div className="ml-16">
                      {tabs.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] py-1 ${activeTab === item.id ? 'text-yellow_vs' : ''}`}
                          onClick={() => handleNavItemClick(item.id)}
                        >
                          <img
                            src={item.icon}
                            alt={`${item.name} Icon`}
                            className="w-7 mr-1 text-yellow_vs"
                          />
                          <p>{item.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Web Projects */}
              <div
                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold ml-5"
                onClick={() => SetShowWebList(!showWebList)}
              >
                {showWebList ? (
                  <ChevronDownIcon className="w-7 mr-1" />
                ) : (
                  <ChevronRightIcon className="w-7 mr-1" />
                )}
                <p>Web</p>
              </div>
              {showWebList && <WebList />}
            </>
          )}
        </div>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-[#262526] border-t border-[#1e1e1e]">
          <div className="flex justify-between">
            <a href="https://github.com/lochan027" target="_blank" rel="noopener noreferrer">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
              />
            </a>
            <a href="https://linkedin.com/in/lochanacharya13" target="_blank" rel="noopener noreferrer">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
              />
            </a>
            <a href="mailto:lochanacharya0@gmail.com">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="bg-[#262526] h-full border-r border-gray-700 border-opacity-50 hover:border-opacity-100 hover:border-blue-500 w-3 hover:cursor-col-resize"
        onMouseDown={startResizing}
      ></div>
    </div>
  );
};

export default SideBar;

const WebList = () => (
  <div className="flex flex-col">
    {projects.map((project, index) => (
      <a 
        key={index} 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
          <img
            src={project.icon}
            alt={`${project.name} Icon`}
            className="w-7 mr-1 ml-5 text-yellow_vs"
          />
          <p>{project.name}</p>
        </div>
      </a>
    ))}
  </div>
);
