import React from "react";

interface HeaderProps {
  setActiveTab: (tab: string) => void;
  setClosedTabs: React.Dispatch<React.SetStateAction<string[]>>;
}

function Header({ setActiveTab, setClosedTabs }: HeaderProps) {
  const handleProjectsClick = () => {
    setActiveTab("projects");
    setClosedTabs(prev => prev.filter(tab => tab !== "projects")); // Remove projects from closed tabs
  };

  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Lochan Acharya</code>
        <code className="text-[#a2aabc] text-3xl mt-4">Software Developer & Web Developer</code>
        <code className="text-[#60677a] text-xl mt-6">
          I am a passionate software developer specializing in building robust web applications 
          and scalable software solutions. With expertise in both frontend and backend development, 
          I create seamless digital experiences that combine clean code with intuitive design.
        </code>
      </div>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
        onClick={handleProjectsClick}
      >
        <code>Check out my Projects !</code>
      </button>
    </div>
  );
}

export default Header;
