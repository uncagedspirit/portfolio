import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

function AllProjects() {
  const navigate = useNavigate();
  const fileFormat = "jpg";

  return (
    <div className="min-h-screen bg-slate-100 px-16 py-12">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/")}
          className="mb-4 flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
        >
          <span className="text-xl">←</span>
          <span>Back to Home</span>
        </button>
        <h1 className="text-4xl font-bold text-slate-900">All Projects</h1>
        <p className="text-slate-600 mt-2">
          Explore all {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const randomIndex = Math.floor(Math.random() * 15) + 1;
          const backgroundPath = `${import.meta.env.BASE_URL}backgrounds/${randomIndex}.${fileFormat}`;

          return (
            <div
              key={project.projectId}
              className="
                group relative h-80 
                bg-slate-200 text-slate-900
                rounded-2xl
                border-b-6 border-r-6 border-t border-l border-slate-800
                shadow-lg
                overflow-hidden
                cursor-pointer
                transition-transform duration-300
                hover:scale-[1.02]
              "
            >
              {/* Background Image Layer - Lighter */}
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

              {/* Light Overlay - Much lighter, only for text readability */}
              <div
                className="
                  absolute inset-0
                  bg-slate-200 group-hover:bg-slate-900/20
                  transition-all duration-500
                "
                style={{ zIndex: 1 }}
              />

              {/* Content Layer */}
              <div
                className="relative h-full flex flex-col"
                style={{ zIndex: 10 }}
              >
                {/* Top Section - Title & Description */}
                <div className="p-4 pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    {project.logo && (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-8 h-8 rounded-lg object-cover bg-white p-1 border border-slate-300 shadow-md"
                      />
                    )}
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-white drop-shadow-md transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-sm group-hover:text-white drop-shadow transition-colors duration-300">
                    {project.description}
                  </p>
                  <p className="text-xs text-slate-500 group-hover:text-white/80 drop-shadow mt-1 transition-colors duration-300">
                    {project.date}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="
                          bg-white/70 group-hover:bg-white/90
                          text-slate-800 
                          border border-slate-400
                          px-2 py-0.5 rounded-lg text-xs font-medium
                          transition-all duration-300 shadow-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section - Full Video */}
                <div className="relative flex-1 p-4 pt-0">
                  <video
                    src={project.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="
                      rounded-lg shadow-lg
                      w-full h-full object-cover
                      border-2 border-slate-300 group-hover:border-white
                      transition-all duration-300
                    "
                  />

                  {/* Links on hover */}
                  <div className="
                    absolute inset-0 
                    opacity-0 group-hover:opacity-100
                    flex items-center justify-center gap-3
                    bg-slate-900/50
                    rounded-lg
                    transition-opacity duration-300
                    m-4 mt-0
                  ">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          px-4 py-2 bg-white text-slate-900 rounded-lg
                          font-semibold text-sm border border-slate-900
                          hover:bg-slate-100 transition-colors shadow-lg
                        "
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          px-4 py-2 bg-slate-800 text-white rounded-lg
                          font-semibold text-sm border border-white
                          hover:bg-slate-700 transition-colors shadow-lg
                        "
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProjects;