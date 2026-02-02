import React from "react";
import { projects } from "../data/projectsData";

function ProjectsSection() {
  const fileFormat = "jpg";

  return (
    <div>
      <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">PROJECTS</p>

      <div className="w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, index) => {
            const randomIndex = Math.floor(Math.random() * 10) + 1;
            const backgroundPath = `/backgrounds/${randomIndex}.${fileFormat}`;

            return (
              <div
                key={index}
                className="
                  group relative h-60 p-6 rounded-lg shadow-md
                  bg-slate-50 overflow-hidden
                "
              >
                <div
                  className="
                    absolute inset-0 bg-cover bg-center opacity-0
                    group-hover:opacity-100 transition-opacity duration-300
                    z-1
                  "
                  style={{ backgroundImage: `url(${backgroundPath})` }}
                ></div>

                <div
                  className="
                    absolute inset-0 bg-slate-50/90
                    group-hover:bg-slate-50/40
                    transition-colors duration-300
                    z-2
                  "
                ></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="mb-2">
                    <p className="font-semibold text-slate-900">
                      {project.title}
                    </p>
                    <p className="text-slate-700 mt-1">{project.description}</p>
                  </div>

                  <video
                    src={project.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="
                      rounded-md shadow-md
                      w-full h-28 object-cover
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-2 rounded-lg border border-slate-900 text-slate-900
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
