import React, { useRef } from "react";
import { projects } from "../data/projectsData";

function ProjectsSection() {
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 275;
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 275;
    }
  };

  return (
    <div className="px-16 py-12 bg-slate-100 min-h-full flex flex-col">
      {/* INTRO Section */}
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">INTRO</p>
      <div className="w-[80%]">
        <p className="text-md">
          Hello, I am Saakshi, a computer science graduate from Pune
          University. I have deep interest in coding and have mostly exploslate
          technologies like Web development, full stack development, app
          development, AI and am also interested in quantum technologies.
        </p>
      </div>

      {/* PROJECTS Section */}
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">PROJECTS</p>
      <div className="relative w-full">
        <button
          className="absolute left-0 top-1/2 border-2 border-slate-300 transform -translate-y-1/2 bg-slate-200 text-slate-400 font-extrabold px-3 pt-1 pb-1.5 rounded-full shadow-md shadow-slate-50"
          onClick={scrollLeft}
        >
          {"<"}
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth space-x-4 py-4 custom-scrollbar"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-96 h-60 bg-slate-50 p-6 rounded-lg shadow-md"
            >
              card data here
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 border-2 border-slate-300 transform -translate-y-1/2 bg-slate-200 text-slate-400 font-extrabold px-3 pt-1 pb-1.5 rounded-full shadow-md shadow-slate-50"
          onClick={scrollRight}
        >
          {">"}
        </button>
      </div>

      {/* EXPERIENCE section  */}
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">EXPERIENCE</p>
      <div className="w-[75%] flex flex-col gap-3">
        <div className="h-28 bg-slate-200 text-slate-900 rounded-2xl border-b-8 border-r-8 border-t border-l border-slate-800 shadow-lg p-4">
          <p className="font-semibold">EXPERIENCE</p>
          <p>Internship at XYZ Company</p>
        </div>  
      </div>

      {/* EDUCATION section  */}
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">EDUCATION</p>
      <div className="w-[75%] flex flex-col gap-3">
        <div className="h-28 bg-slate-200 text-slate-900 rounded-2xl border-b-8 border-r-8 border-t border-l border-slate-800 shadow-lg p-4">
          <p>EDUCATION</p>
          <p>Studied at xyz school</p>
        </div> 
      </div>


      {/* TESTIMONIALS section  */}
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">TESTIMONIALS</p>
      <div>
        <div className="h-28 bg-slate-200 text-slate-900 rounded-2xl border-b-8 border-r-8 border-t border-l border-slate-800 shadow-lg p-4">
          <p>TESTIMONIALS</p>
          <p>Great work ethic and problem-solving skills!</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
