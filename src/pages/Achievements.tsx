import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

interface CertificationType {
  name: string;
  issuer: string;
}

interface AchievementType {
  role: string;
  organization: string;
  period: string;
  description?: string;
}

const certifications: CertificationType[] = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services"
  },
  {
    name: "Cisco EndPoint Security",
    issuer: "Cisco"
  },
  {
    name: "Agile Foundation",
    issuer: "Agile Alliance"
  },
  {
    name: "React.js Certification",
    issuer: "Meta"
  }
];

const achievements: AchievementType[] = [
  {
    role: "Tech Lead",
    organization: "Google Developer Student Club (GDSC)",
    period: "2022 - present"
  },
  {
    role: "Web Master",
    organization: "Nepalese Student Association (NSA)",
    period: "2024 - present"
  },
  {
    role: "Teaching Assistant",
    organization: "CSCI 2001",
    period: "2024 (one semester)"
  }
];

const Achievements = () => {
  return (
    <div id="Achievements" className="flex flex-col mx-12 mt-60 lg:mx-60">
      {/* Professional Certifications Section */}
      <div>
        <div className="table">
          <AcademicCapIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Professional Certifications
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-[#1e1e1e] rounded-lg p-6 hover:border-yellow_vs transition-colors">
                <code className="text-[#e6f1ff] text-xl">{cert.name}</code>
                <p className="mt-2">
                  <code className="text-[#a2aabc]">{cert.issuer}</code>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extracurricular Achievements Section */}
      <div className="mt-20">
        <div className="table">
          <AcademicCapIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Extracurricular Achievements
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-[#1e1e1e] rounded-lg p-6 hover:border-yellow_vs transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <code className="text-[#e6f1ff] text-xl">{achievement.role}</code>
                    <p className="mt-2">
                      <code className="text-[#a2aabc]">{achievement.organization}</code>
                    </p>
                  </div>
                  <code className="text-yellow_vs">{achievement.period}</code>
                </div>
                {achievement.description && (
                  <p className="mt-4">
                    <code className="text-[#a2aabc]">{achievement.description}</code>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements; 