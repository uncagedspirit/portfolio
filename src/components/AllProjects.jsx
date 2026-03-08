import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

const Dash = () => <div className="pf-divider" />;

function AllProjects() {
  const navigate = useNavigate();
  const fileFormat = "jpg";

  return (
    <div className="min-h-screen pf-bg-page relative transition-colors duration-300">
      <div className="pf-col-line-left" />
      <div className="pf-col-line-right" />

      <div style={{ height: "10vw" }} />
      <Dash />

      <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="py-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 pf-text-muted hover:pf-text-body transition-colors text-sm cursor-pointer"
        >
          <span>←</span><span>back to home</span>
        </button>
      </div>

      <Dash />

      <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="pt-6 pb-2">
        <h1 className="pf-heading-xl text-2xl sm:text-3xl lg:text-4xl">All Projects</h1>
        <p className="pf-muted mt-2 text-sm sm:text-base">Explore all {projects.length} projects</p>
      </div>

      <div className="pt-4"><Dash /></div>

      <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => {
            const randomIndex = Math.floor(Math.random() * 15) + 1;
            const backgroundPath = `${import.meta.env.BASE_URL}backgrounds/${randomIndex}.${fileFormat}`;

            return (
              <div
                key={project.projectId}
                onClick={() => navigate(`/projects/${project.projectId}`)}
                className="pf-card pf-card-hover group relative h-72 sm:h-80 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-110"
                     style={{ backgroundImage: `url(${backgroundPath})`, zIndex: 0 }} />
                <div className="absolute inset-0 pf-bg-card group-hover:bg-slate-900/20 transition-all duration-500" style={{ zIndex: 1 }} />

                <div className="relative h-full flex flex-col" style={{ zIndex: 10 }}>
                  <div className="p-3 sm:p-4 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      {project.logo && (
                        <img src={project.logo} alt={`${project.title} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg object-cover bg-white p-1 border border-slate-300 shadow-md" />
                      )}
                      <h3 className="pf-heading-sm font-bold group-hover:text-white drop-shadow-md transition-colors duration-300">{project.title}</h3>
                    </div>
                    <p className="pf-body text-xs sm:text-sm group-hover:text-white drop-shadow transition-colors duration-300">{project.description}</p>
                    <p className="pf-muted text-xs group-hover:text-white/80 drop-shadow mt-1 transition-colors duration-300">{project.date}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack?.map((tech) => (
                        <span key={tech} className="pf-tech-tag group-hover:bg-white/90 transition-all duration-300 shadow-sm">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex-1 p-3 sm:p-4 pt-0">
                    <video
                      src={project.video}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="rounded-lg shadow-lg w-full h-full object-cover border-2 border-(--border-subtle) group-hover:border-white transition-all duration-300"
                    />
                  </div>

                  <div className="p-3 sm:p-4 pt-0 flex items-center justify-center gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.projectId}`); }}
                      className="pf-btn-primary px-4 py-2 text-xs sm:text-sm cursor-pointer"
                    >Details</button>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                         onClick={(e) => e.stopPropagation()}
                         className="pf-btn-secondary px-3 py-2 text-xs sm:text-sm">Live</a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                         onClick={(e) => e.stopPropagation()}
                         className="pf-btn-secondary px-3 py-2 text-xs sm:text-sm">Code</a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dash />
      <div style={{ height: "10vw" }} />
    </div>
  );
}

export default AllProjects;