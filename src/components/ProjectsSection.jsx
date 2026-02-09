import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

function ProjectsSection() {
  const navigate = useNavigate();
  const fileFormat = "jpg";

  return (
    <div>
      <p className="text-slate-900 mt-6 sm:mt-8 mb-2 font-semibold text-sm">PROJECTS</p>

      <div className="w-full lg:w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.slice(0, 4).map((project, index) => {
            const randomIndex = Math.floor(Math.random() * 15) + 1;
            const backgroundPath = `${import.meta.env.BASE_URL}backgrounds/${randomIndex}.${fileFormat}`;
            
            return (
              <div
                key={index}
                onClick={() => navigate(`/projects/${project.projectId}`)}
                className="
                  group relative h-56 sm:h-60 p-4 sm:p-6
                  bg-slate-200 text-slate-900
                  rounded-2xl
                  border-b-6 border-r-6 border-t border-l border-slate-800
                  shadow-lg
                  overflow-hidden
                  cursor-pointer
                "
              >
                <div
                  className="
                    absolute inset-0 bg-cover bg-center
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    scale-100 group-hover:scale-110
                  "
                  style={{
                    backgroundImage: `url(${backgroundPath})`,
                    zIndex: 0,
                  }}
                />

                <div
                  className="
                    absolute inset-0
                    bg-slate-200 group-hover:bg-slate-300/35
                    transition-all duration-500
                  "
                  style={{ zIndex: 1 }}
                />

                <div
                  className="relative h-full flex flex-col justify-between"
                  style={{ zIndex: 10 }}
                >
                  <div className="mb-1">
                    <p className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-black transition-colors duration-300">
                      {project.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 mx-2 my-1 group-hover:text-slate-900 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  <video
                    src={project.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="
                      rounded-md shadow-md
                      w-full h-24 sm:h-28 object-cover
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => navigate("/projects")}
            className="px-6 sm:px-8 py-2 text-sm sm:text-base rounded-lg border border-slate-900 text-slate-900
              transition-all duration-300
              hover:bg-slate-900 hover:border-slate-900 hover:text-white hover:shadow-md"
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;