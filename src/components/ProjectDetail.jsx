import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.projectId === parseInt(projectId));

  const inner = (content) => (
    <div className="min-h-screen pf-bg-page relative transition-colors duration-300">
      <HatchLeft />
      <HatchRight />
      <ColLineLeft />
      <ColLineRight />
      <div style={{ height: "10vw" }} />
      <Dash />
      <div style={{ paddingLeft: INNER, paddingRight: INNER }} className="py-3">
        <button onClick={() => navigate("/projects")} className="flex items-center gap-2 pf-text-muted hover:pf-text-body transition-colors text-sm cursor-pointer">
          <span>←</span><span>back to projects</span>
        </button>
      </div>
      <Dash />
      {content}
      <Dash />
      <PortfolioFooter />
      <div style={{ height: "4vw" }} />
    </div>
  );

  if (!project) return inner(
    <div style={{ paddingLeft: INNER, paddingRight: INNER }} className="pt-6">
      <h1 className="pf-heading-lg">Project not found</h1>
    </div>
  );

  return inner(
    <>
      <div style={{ paddingLeft: INNER, paddingRight: INNER }} className="pt-6 pb-2">
        <div className="flex items-center gap-3 mb-2">
          {project.logo && (
            <img src={project.logo} alt={`${project.title} logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover bg-white p-1.5 border border-slate-300 shadow-md" />
          )}
          <div>
            <h1 className="pf-heading-xl text-2xl sm:text-3xl lg:text-4xl">{project.title}</h1>
            <p className="pf-muted text-xs sm:text-sm mt-0.5">{project.date}</p>
          </div>
        </div>
        <p className="pf-body text-sm sm:text-base mt-2">{project.description}</p>
      </div>

      <div className="pt-4"><Dash /></div>

      <div style={{ paddingLeft: INNER, paddingRight: INNER }} className="py-8 flex flex-col gap-8">
        {project.techStack?.length > 0 && (
          <div>
            <p className="pf-section-label mb-3">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => <span key={tech} className="pf-tech-tag px-3 py-1.5 text-sm">{tech}</span>)}
            </div>
          </div>
        )}

        <div>
          <p className="pf-section-label mb-3">PREVIEW</p>
          <video src={project.video} autoPlay muted loop playsInline
            className="w-full rounded-2xl shadow-lg border-b-4 border-r-4 border-t border-l border-(--border-strong)" />
        </div>

        {project.details?.length > 0 && (
          <div>
            <p className="pf-section-label mb-3">KEY FEATURES</p>
            <div className="pf-card-sm p-4 sm:p-6">
              <ul className="list-disc pl-5 space-y-2 pf-body text-sm sm:text-base">
                {project.details.map((detail, index) => <li key={index}>{detail}</li>)}
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pf-btn-primary px-6 py-2.5 text-sm">
              Live Demo →
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="pf-btn-secondary px-6 py-2.5 text-sm">
              View Code
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;