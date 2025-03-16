import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");

interface MobileMenuProps {
  setActiveTab: (tab: string) => void;
  setClosedTabs: React.Dispatch<React.SetStateAction<string[]>>;
}

const navigationItems = [
  { name: "Home.ts", icon: TSIcon, tab: "home" },
  { name: "About.ts", icon: TSIcon, tab: "about" },
  { name: "Projects.ts", icon: TSIcon, tab: "projects" },
  { name: "Achievements.ts", icon: TSIcon, tab: "achievements" },
  { name: "Resume.ts", icon: TSIcon, tab: "resume" },
  { name: "Contact.ts", icon: TSIcon, tab: "contact" }
];

const projects = [
  {
    name: "Soil Testing and AI",
    href: "https://soilfusion.netlify.app/",
    icon: <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 ml-5 text-yellow_vs" />,
  },
  {
    name: "GDSC Website",
    href: "https://gdsculm.org",
    icon: <img src={TSIcon} alt="TS Icon" className="w-7 mr-1 ml-5 text-yellow_vs" />,
  },
  {
    name: "Google Calculator",
    href: "https://lochan027.github.io/GoogleCalculator/",
    icon: <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 ml-5 text-yellow_vs" />,
  },
  {
    name: "Palindrome Checker",
    href: "https://lochan027.github.io/palindromecheck/",
    icon: <img src={TSIcon} alt="TS Icon" className="w-7 mr-1 ml-5 text-yellow_vs" />,
  },
  {
    name: "ADLS Connection Code",
    href: "https://github.com/lochan027/ADLSConnection",
    icon: <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 ml-5 text-yellow_vs" />,
  },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ setActiveTab, setClosedTabs }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const [showProjectsList, SetShowProjectsList] = useState(true);
  const [showWebList, SetShowWebList] = useState(true);
  const [showSrcList, SetShowSrcList] = useState(true);
  const [showComponentsList, SetShowComponentsList] = useState(true);

  const handleNavItemClick = (tab: string) => {
    setActiveTab(tab);
    setClosedTabs(prev => prev.filter(t => t !== tab)); // Remove from closed tabs if it was closed
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {open ? (
              <XIcon className="block w-16" aria-hidden="true" />
            ) : (
              <MenuIcon className="block w-16" aria-hidden="true" />
            )}{" "}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="">
              <code className="px-2 pt-2 pb-3 space-y-1 text-white">
                {/* Projects Section */}
                <div
                  className="mb-2 ml-4 font-bold flex text-xl"
                  onClick={() => SetShowProjectsList(!showProjectsList)}
                >
                  {showProjectsList ? (
                    <ChevronDownIcon className="w-7 mr-4" />
                  ) : (
                    <ChevronRightIcon className="w-7 mr-4" />
                  )}
                  Projects
                </div>
                {showProjectsList && (
                  <>
                    {/* Src Folder */}
                    <div
                      className="mb-2 ml-8 font-bold flex text-xl"
                      onClick={() => SetShowSrcList(!showSrcList)}
                    >
                      {showSrcList ? (
                        <ChevronDownIcon className="w-7 mr-4" />
                      ) : (
                        <ChevronRightIcon className="w-7 mr-4" />
                      )}
                      src
                    </div>
                    {showSrcList && (
                      <>
                        {/* Components Folder */}
                        <div
                          className="mb-2 ml-12 font-bold flex text-xl"
                          onClick={() => SetShowComponentsList(!showComponentsList)}
                        >
                          {showComponentsList ? (
                            <ChevronDownIcon className="w-7 mr-4" />
                          ) : (
                            <ChevronRightIcon className="w-7 mr-4" />
                          )}
                          components
                        </div>
                        {/* Navigation Items */}
                        {showComponentsList && (
                          <div className="ml-16">
                            {navigationItems.map((item, index) => (
                              <Disclosure.Button
                                key={index}
                                as="div"
                                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] py-1"
                                onClick={() => handleNavItemClick(item.tab)}
                              >
                                <img
                                  src={item.icon}
                                  alt={`${item.name} Icon`}
                                  className="w-7 mr-1 text-yellow_vs"
                                />
                                <span>{item.name}</span>
                              </Disclosure.Button>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    {/* Web Projects */}
                    <div
                      className="mb-2 ml-8 font-bold flex text-xl"
                      onClick={() => SetShowWebList(!showWebList)}
                    >
                      {showWebList ? (
                        <ChevronDownIcon className="w-7 mr-4" />
                      ) : (
                        <ChevronRightIcon className="w-7 mr-4" />
                      )}
                      Web
                    </div>
                    {showWebList && (
                      <div className="ml-12">
                        {projects.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "block px-3 py-2 rounded-md text-base font-medium"
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex">
                              {item.icon}
                              {item.name}
                            </div>
                          </Disclosure.Button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </code>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default MobileMenu;
