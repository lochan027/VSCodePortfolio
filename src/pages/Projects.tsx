import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

interface ProjectType {
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

interface CurrentProjectType {
  name: string;
  status: string;
  description: string;
}

const projects: ProjectType[] = [
  {
    name: "Soil Testing and AI Prediction for Crop Yielding",
    description: "A system that uses soil sensor data to analyze soil conditions and predict crop yield. It suggests the best crops based on soil and weather data.",
    technologies: ["Python", "TensorFlow", "IoT", "Data Analysis"],
    githubLink: "https://github.com/lochan027/soil-fusion-main",
    demoLink: "https://soilfusion.netlify.app/"
  },
  {
    name: "GDSC Website",
    description: "The Google Developer Student Club (GDSC) Website is a fully responsive platform designed to manage events, showcase community activities, and engage students. It features an admin panel that allows authorized users to add, edit, and delete events, as well as upload and manage gallery photos effortlessly. The website is optimized for mobile and desktop devices, ensuring a smooth user experience. With an intuitive design, event management system, and interactive gallery, the GDSC website serves as a central hub for student developers to stay informed and connected.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/lochan027/GDSC",
    demoLink: "https://gdsculm.org"
  },
  {
    name: "Google Calculator",
    description: "A clone of the Google Calculator with all its functionalities. Built using React and styled with CSS, it features a responsive design and supports keyboard input.",
    technologies: ["React", "CSS", "JavaScript"],
    githubLink: "https://github.com/lochan027/GoogleCalculator",
    demoLink: "https://lochan027.github.io/GoogleCalculator/"
  },
  {
    name: "Palindrome Checker",
    description: "A web application that checks if a given string is a palindrome. Built with React and features a clean, user-friendly interface.",
    technologies: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/lochan027/palindromecheck",
    demoLink: "https://lochan027.github.io/palindromecheck/"
  },
  {
    name: "ADLS Connection Code",
    description: "A Java code that establishes a secure connection to Azure Data Lake Storage (ADLS). Features error handling and authentication.",
    technologies: ["Java", "Azure", "Data Lake Storage"],
    githubLink: "https://github.com/lochan027/ADLSConnection"
  }
];

const currentProjects: CurrentProjectType[] = [
  {
    name: "NSA (Nepalese Student Association Website)",
    status: "Almost Done",
    description: "A platform to connect with the Nepalese Student Association, offering event updates, resources, and community activities."
  },
  {
    name: "Live Car Parking Application",
    status: "In Progress",
    description: "An app that provides live updates on parking availability using sensors to detect occupied spots, saving users time in finding parking."
  },
  {
    name: "Autonomous Trash Bin System",
    status: "In Progress",
    description: "A smart trash bin system that detects waste levels and sends alerts when bins are full, improving waste management efficiency."
  },
  {
    name: "Food Auto Shopping and AI Food Management App",
    status: "In Progress",
    description: "An AI-powered app that streamlines grocery shopping and kitchen management, ensuring efficient food planning and reducing waste."
  }
];

const Projects = () => {
  return (
    <div id="Projects" className="flex flex-col mx-12 mt-60 lg:mx-60">
      {/* Completed Projects Section */}
      <div>
        <div className="table">
          <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Completed Projects
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-[#1e1e1e] rounded-lg p-6 hover:border-yellow_vs transition-colors">
                <code className="text-[#e6f1ff] text-xl">{project.name}</code>
                <p className="mt-2">
                  <code>{project.description}</code>
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <code key={techIndex} className="text-yellow_vs text-sm bg-opacity-20 bg-yellow_vs px-2 py-1 rounded">
                      {tech}
                    </code>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightblue_vs hover:text-blue_vs transition-colors"
                  >
                    <code>View on GitHub</code>
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightblue_vs hover:text-blue_vs transition-colors"
                    >
                      <code>Live Website</code>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Projects Section */}
      <div className="mt-20">
        <div className="table">
          <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Current Projects
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <div className="grid grid-cols-1 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="border border-[#1e1e1e] rounded-lg p-6 hover:border-yellow_vs transition-colors">
                <div className="flex justify-between items-center">
                  <code className="text-[#e6f1ff] text-xl">{project.name}</code>
                  <code className={`text-sm px-3 py-1 rounded ${
                    project.status === "Almost Done" 
                      ? "bg-green-900 text-green-200" 
                      : "bg-yellow-900 text-yellow-200"
                  }`}>
                    {project.status}
                  </code>
                </div>
                <p className="mt-2">
                  <code>{project.description}</code>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 