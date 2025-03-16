import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Achievements from "./Achievements";
import SideBar from "../components/SideBar";
import Resume from "./Resume";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [closedTabs, setClosedTabs] = useState<string[]>([]);
  const [sidebarWidth, setSidebarWidth] = useState(270);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setSidebarWidth(parseInt(savedWidth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sideBarWidth", sidebarWidth.toString());
  }, [sidebarWidth]);

  // Ensure achievements tab is not closed
  useEffect(() => {
    setClosedTabs(prev => prev.filter(tab => tab !== "achievements"));
  }, []);

  // Check if all tabs are closed
  const allTabs = ["home", "about", "projects", "achievements", "resume", "contact"];
  const areAllTabsClosed = allTabs.every(tab => closedTabs.includes(tab));

  return (
    <div id="home" className="App flex flex-col lg:flex-row min-h-screen">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 z-50 p-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-[#262526] fixed lg:static h-screen z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ width: `${sidebarWidth}px` }}
      >
        <SideBar
          setWidth={setSidebarWidth}
          width={sidebarWidth}
          setActiveTab={setActiveTab}
          setClosedTabs={setClosedTabs}
          activeTab={activeTab}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#1e1e1e] min-h-screen">
        {/* Navigation Bar */}
        <div
          className={`${
            areAllTabsClosed ? "bg-[#1e1e1e]" : "bg-[#424042]"
          } h-16 sticky top-0 z-30`}
          style={{ paddingLeft: isMobileMenuOpen ? `${sidebarWidth}px` : "0" }}
        >
          <NavBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            closedTabs={closedTabs}
            setClosedTabs={setClosedTabs}
          />
        </div>

        {/* Content Area */}
        <div 
          className="relative"
          style={{ 
            paddingLeft: isMobileMenuOpen ? `${sidebarWidth}px` : "0",
            minHeight: "calc(100vh - 4rem)" 
          }}
        >
          {!areAllTabsClosed ? (
            <>
              {activeTab === "home" && <Header setActiveTab={setActiveTab} setClosedTabs={setClosedTabs} />}
              {activeTab === "about" && <About />}
              {activeTab === "projects" && <Projects />}
              {activeTab === "achievements" && <Achievements />}
              {activeTab === "resume" && <Resume />}
              {activeTab === "contact" && <Contact />}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-lg p-4 text-center">
              <p>No tabs are open. Click on a file in the sidebar to get started.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
