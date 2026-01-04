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
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 pt-1 pb-1.5 rounded-full shadow-lg"
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
              className="min-w-96 h-60 bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="w-16 h-16 mb-4"
              />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <div className="text-xs text-gray-400">
                <p className="mb-1">Tech Stack: {project.tech_stack.join(", ")}</p>
                <p>Date: {project.date}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 pt-1 pb-1.5 rounded-full shadow-lg"
          onClick={scrollRight}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ProjectsSection;
