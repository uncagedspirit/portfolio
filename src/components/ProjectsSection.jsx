import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

function ProjectsSection() {
  const navigate = useNavigate();
  const fileFormat = "jpg";

  return (
    <div>
      <p className="text-slate-900 dark:text-slate-200 mb-2 font-semibold text-sm tracking-wide">PROJECTS</p>

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
                  bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-slate-100
                  rounded-2xl
                  border-b-6 border-r-6 border-t border-l border-slate-800 dark:border-zinc-400
                  shadow-lg
                  overflow-hidden
                  cursor-pointer
                  transition-colors duration-300
                "
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-110"
                  style={{ backgroundImage: `url(${backgroundPath})`, zIndex: 0 }}
                />
                <div
                  className="absolute inset-0 bg-slate-200 dark:bg-zinc-800 group-hover:bg-slate-300/35 dark:group-hover:bg-zinc-900/40 transition-all duration-500"
                  style={{ zIndex: 1 }}
                />

                <div className="relative h-full flex flex-col justify-between" style={{ zIndex: 10 }}>
                  <div className="mb-1">
                    <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mx-2 my-1 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  <video
                    src={project.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="rounded-md shadow-md w-full h-24 sm:h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => navigate("/projects")}
            className="px-6 sm:px-8 py-2 text-sm sm:text-base rounded-lg border border-slate-900 dark:border-zinc-400 text-slate-900 dark:text-slate-200
              transition-all duration-300
              hover:bg-slate-900 dark:hover:bg-zinc-200 hover:border-slate-900 dark:hover:border-zinc-200 hover:text-white dark:hover:text-zinc-900 hover:shadow-md"
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;