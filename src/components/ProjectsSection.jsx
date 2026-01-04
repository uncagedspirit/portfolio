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
    <div className="px-16 pt-12 bg-amber-100 h-full flex flex-col">
      {/* INTRO Section */}
      <p className="text-gray-400 mt-8 mb-2 font-semibold text-sm">INTRO</p>
      <div className="w-[85%]">
        <p className="text-sm">
          Hello, I am Saakshi Kobarne, a computer science graduate from Pune
          University. I have deep interest in coding and have mostly explored
          technologies like Web development, full stack development, app
          development, AI and am also interested in quantum technologies.
        </p>
      </div>

      {/* PROJECTS Section */}
      <p className="text-gray-400 mt-8 mb-2 font-semibold text-sm">PROJECTS</p>

      <div className="relative w-full">
        <button
          className="absolute left-0 top-1/2 border-2 border-amber-300 transform -translate-y-1/2 bg-amber-200 text-amber-400 font-extrabold px-3 pt-1 pb-1.5 rounded-full shadow-md shadow-amber-50"
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
              className="min-w-96 h-60 bg-amber-50 p-6 rounded-lg shadow-md"
            >
              card data here
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 border-2 border-amber-300 transform -translate-y-1/2 bg-amber-200 text-amber-400 font-extrabold px-3 pt-1 pb-1.5 rounded-full shadow-md shadow-amber-50"
          onClick={scrollRight}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ProjectsSection;
