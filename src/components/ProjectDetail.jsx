import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

const Dash = () => <div style={{ borderTop: "2px dashed #94a3b8" }} className="dark:[border-t:#52525b]" />;

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.projectId === parseInt(projectId));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 relative transition-colors duration-300">
        <div className="pointer-events-none absolute top-0 bottom-0" style={{ left: "15%", borderLeft: "2px dashed #94a3b8" }} />
        <div className="pointer-events-none absolute top-0 bottom-0" style={{ right: "15%", borderRight: "2px dashed #94a3b8" }} />
        <div style={{ height: "10vw" }} />
        <Dash />
        <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="py-3">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
          >
            <span>←</span>
            <span>back to projects</span>
          </button>
        </div>
        <Dash />
        <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="pt-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Project not found</h1>
        </div>
        <div style={{ height: "10vw" }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="pointer-events-none absolute top-0 bottom-0" style={{ left: "15%", borderLeft: "2px dashed #94a3b8" }} />
      <div className="pointer-events-none absolute top-0 bottom-0" style={{ right: "15%", borderRight: "2px dashed #94a3b8" }} />

      <div style={{ height: "10vw" }} />
      <Dash />

      <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="py-3">
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
        >
          <span>←</span>
          <span>back to projects</span>
        </button>
      </div>

      <Dash />

      <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="pt-6 pb-2">
        <div className="flex items-center gap-3 mb-2">
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover bg-white p-1.5 border border-slate-300 shadow-md"
            />
          )}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">
              {project.title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">{project.date}</p>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">{project.description}</p>
      </div>

      <div className="pt-4">
        <Dash />
      </div>

      <div style={{ paddingLeft: "calc(15% + 24px)", paddingRight: "calc(15% + 24px)" }} className="py-8 flex flex-col gap-8">
        {project.techStack?.length > 0 && (
          <div>
            <p className="text-slate-900 dark:text-slate-200 font-semibold text-sm mb-3">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-200 dark:bg-zinc-800 text-slate-800 dark:text-slate-200 border border-slate-400 dark:border-zinc-500 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="text-slate-900 dark:text-slate-200 font-semibold text-sm mb-3">PREVIEW</p>
          <video
            src={project.video}
            controls
            loop
            playsInline
            className="w-full rounded-2xl shadow-lg border-b-4 border-r-4 border-t border-l border-slate-800 dark:border-zinc-400"
          />
        </div>

        {project.details?.length > 0 && (
          <div>
            <p className="text-slate-900 dark:text-slate-200 font-semibold text-sm mb-3">KEY FEATURES</p>
            <div className="bg-slate-200 dark:bg-zinc-800 rounded-2xl border-b-4 border-r-4 border-t border-l border-slate-800 dark:border-zinc-400 shadow-md p-4 sm:p-6 transition-colors duration-300">
              <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-slate-900 dark:bg-zinc-200 text-white dark:text-zinc-900 rounded-lg font-semibold text-sm border-2 border-slate-900 dark:border-zinc-200 hover:bg-slate-800 dark:hover:bg-zinc-300 transition-colors shadow-md"
            >
              Live Demo →
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-200 rounded-lg font-semibold text-sm border-2 border-slate-900 dark:border-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors shadow-md"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      <Dash />
      <div style={{ height: "10vw" }} />
    </div>
  );
}

export default ProjectDetail;