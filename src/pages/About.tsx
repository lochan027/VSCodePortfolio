import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { IconBaseProps, IconType } from "react-icons";
import { 
  SiJavascript, SiPython, SiReact, SiFirebase, 
  SiKotlin, SiAmazon, SiMysql, 
  SiAngular, SiCss3, SiSwift, SiNodedotjs, SiGooglecloud,
  SiAndroidstudio, SiVercel, SiNetlify, SiXcode,
  SiGit, SiGithub, SiJira 
} from "react-icons/si";
import {
  DiJava, DiWindows, DiApple, DiLinux
} from "react-icons/di";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";

interface TechnologyItem {
  name: string;
  icon: IconType;
}

const IconComponent = ({ icon: Icon, ...props }: { icon: IconType } & IconBaseProps) => {
  return React.createElement(Icon as React.ComponentType<IconBaseProps>, props);
};

const technologies: TechnologyItem[] = [
  { name: "Java", icon: DiJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Firebase", icon: SiFirebase },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Microsoft Azure", icon: VscAzure },
  { name: "AWS", icon: SiAmazon },
  { name: "MySQL", icon: SiMysql },
  { name: "Angular", icon: SiAngular },
  { name: "CSS3", icon: SiCss3 },
  { name: "Swift", icon: SiSwift },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Google Cloud", icon: SiGooglecloud },
];

const tools: TechnologyItem[] = [
  { name: "Windows", icon: DiWindows },
  { name: "Mac", icon: DiApple },
  { name: "Linux", icon: DiLinux },
  { name: "VS Code", icon: VscVscode },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Xcode", icon: SiXcode },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Microsoft Teams", icon: PiMicrosoftTeamsLogoFill },
  { name: "JIRA", icon: SiJira },
];

const About = () => {
  return (
    <div id="About" className="mx-12 mt-60 lg:mx-60">
      <div>
        <div className="table">
          <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <div className="flex flex-col gap-4">
            <code>
            My journey began with a fascination for technology and has evolved into a passion for crafting innovative digital experiences. Each line of code I write is a step towards building something extraordinary.
              What drives me is the endless possibility of technology to transform ideas into reality. I specialize in:
            </code>
            <code className="flex flex-col gap-2 ml-4">
              <span>🎨 Designing intuitive and engaging user interfaces</span>
              <span>⚡ Building robust and efficient backend systems</span>
              <span>🔗 Developing full-stack applications with seamless integration</span>
              <span>☁️ Managing and optimizing cloud-based databases</span>
              <span>🚀 Architecting scalable and secure cloud solutions</span>
            </code>
          </div>
        </div>
      </div>

      {/* Professional Arsenal Section */}
      <div className="mt-16">
        <div className="table">
          <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Professional Arsenal
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <code className="text-[#a2aabc] text-lg mt-5 block">
          These are the tools and technologies I've mastered in my journey:
        </code>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-4 text-[#a2aabc] hover:text-yellow_vs transition-colors duration-200">
              <IconComponent icon={tech.icon} size="2em" />
              <code>{tech.name}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Development Toolkit Section */}
      <div className="mt-16 mb-32">
        <div className="table">
          <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Development Toolkit
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center gap-4 text-[#a2aabc] hover:text-yellow_vs transition-colors duration-200">
              <IconComponent icon={tool.icon} size="2em" />
              <code>{tool.name}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
