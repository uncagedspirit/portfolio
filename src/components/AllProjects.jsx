import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import PortfolioFooter from "./PortfolioFooter";

const Dash = () => <div className="pf-divider" />;

const BORDER_PCT = "20%";
const INNER = "calc(20% + 48px)";

const HatchLeft  = () => (
  <div style={{
    position: "absolute", top: 0, bottom: 0, left: 0, width: BORDER_PCT, pointerEvents: "none",
    background: "repeating-linear-gradient(45deg, rgba(113,1,23,0.09) 0px, rgba(113,1,23,0.09) 1px, transparent 1px, transparent 9px)",
  }} />
);
const HatchRight = () => (
  <div style={{
    position: "absolute", top: 0, bottom: 0, right: 0, width: BORDER_PCT, pointerEvents: "none",
    background: "repeating-linear-gradient(45deg, rgba(113,1,23,0.09) 0px, rgba(113,1,23,0.09) 1px, transparent 1px, transparent 9px)",
  }} />
);
const ColLineLeft  = () => (
  <div style={{ pointerEvents:"none", position:"absolute", top:0, bottom:0, left: BORDER_PCT, borderLeft:"2px dashed rgba(113,1,23,0.50)" }} />
);
const ColLineRight = () => (
  <div style={{ pointerEvents:"none", position:"absolute", top:0, bottom:0, right: BORDER_PCT, borderRight:"2px dashed rgba(113,1,23,0.50)" }} />
);

function AllProjects() {
  const navigate = useNavigate();
  const fileFormat = "jpg";

  return (
    <div className="min-h-screen pf-bg-page relative transition-colors duration-300">
      <HatchLeft />
      <HatchRight />
      <ColLineLeft />
      <ColLineRight />

      <div style={{ height: "10vw" }} />
      <Dash />

      <div style={{ paddingLeft: INNER, paddingRight: INNER }} className="py-3">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 pf-text-muted hover:pf-text-body transition-colors text-sm cursor-pointer">
          <span>←</span><span>back to home</span>
        </button>
      </div>

      <Dash />

      <div style={{ paddingLeft: INNER, paddingRight: INNER }} className="pt-6 pb-2">
        <h1 className="pf-heading-xl text-2xl sm:text-3xl lg:text-4xl">All Projects</h1>
        <p className="pf-muted mt-2 text-sm sm:text-base">Explore all {projects.length} projects</p>
      </div>

      <div className="pt-4"><Dash /></div>

      <div style={{ paddingLeft: INNER, paddingRight: INNER }} className="py-8">
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
                  {/* Top info — every element is clamped to one predictable height */}
                  <div className="p-3 sm:p-4 pb-2 shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      {project.logo && (
                        <img src={project.logo} alt={`${project.title} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg object-cover bg-white p-1 border border-slate-300 shadow-md" />
                      )}
                      <h3 className="pf-heading-sm font-bold group-hover:text-white drop-shadow-md transition-colors duration-300 truncate">{project.title}</h3>
                    </div>
                    {/* Max 2 lines no matter how long */}
                    <p
                      className="pf-body text-xs sm:text-sm group-hover:text-white drop-shadow transition-colors duration-300"
                      style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                    >{project.description}</p>
                    <p className="pf-muted text-xs group-hover:text-white/80 drop-shadow mt-1 transition-colors duration-300">{project.date}</p>
                    {/* Single row, no wrap — excess tags just clip, nothing spills down */}
                    <div className="flex flex-nowrap gap-1 mt-2 overflow-hidden" style={{ height: "1.4rem" }}>
                      {project.techStack?.map((tech) => (
                        <span key={tech} className="pf-tech-tag group-hover:bg-white/90 transition-all duration-300 shadow-sm shrink-0">{tech}</span>
                      ))}
                    </div>
                  </div>
                  {/* Video: gets all remaining space, always touches the card bottom */}
                  <div className="relative flex-1 px-3 sm:px-4 pb-3 sm:pb-4 pt-0 min-h-0">
                    <video src={project.video} muted autoPlay loop playsInline
                      className="rounded-lg shadow-lg w-full h-full object-cover border-2 border-(--border-subtle) group-hover:border-white transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dash />
      <PortfolioFooter />
      <div style={{ height: "4vw" }} />
    </div>
  );
}

export default AllProjects;