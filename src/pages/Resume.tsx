import React from "react";
import { ClipboardListIcon, DownloadIcon } from "@heroicons/react/solid";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  const resumeUrl = "/resume.pdf"; // Place your resume.pdf in the public folder
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="mt-16">
      <div className="mx-8">
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      
      <div className="mt-8 mx-8">
        <a
          href={resumeUrl}
          download
          className="flex items-center gap-2 mb-4 border border-lightblue_vs text-lightblue_vs px-4 py-2 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-fit"
        >
          <DownloadIcon className="h-5 w-5" />
          <code>Download Resume</code>
        </a>
        
        <div className="border border-[#1e1e1e] rounded-lg overflow-hidden bg-white" style={{ height: 'calc(100vh - 250px)' }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={resumeUrl}
              plugins={[defaultLayoutPluginInstance]}
              defaultScale={1.5}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default Resume;
