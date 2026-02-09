import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.projectId === parseInt(projectId));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-100 px-4 sm:px-8 lg:px-16 py-8 sm:py-10 lg:py-12">
        <button
          onClick={() => navigate("/projects")}
          className="mb-3 sm:mb-4 flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
        >
          <span className="text-lg sm:text-xl">←</span>
          <span className="text-sm sm:text-base">Back to Projects</span>
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 sm:px-8 lg:px-16 py-8 sm:py-10 lg:py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/projects")}
        className="mb-6 sm:mb-8 flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
      >
        <span className="text-lg sm:text-xl">←</span>
        <span className="text-sm sm:text-base">Back to Projects</span>
      </button>

      {/* Project Header */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover bg-white p-2 border border-slate-300 shadow-md"
            />
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              {project.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-1">{project.date}</p>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-slate-700 mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="bg-slate-200 text-slate-800 border border-slate-400 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Video */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
            Preview
          </h2>
          <video
            src={project.video}
            controls
            loop
            playsInline
            className="w-full rounded-xl shadow-lg border-2 border-slate-300"
          />
        </div>

        {/* Project Details */}
        {project.details && project.details.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
              Key Features
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {project.details.map((detail, index) => (
                <li key={index} className="text-sm sm:text-base">{detail}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm sm:text-base border-2 border-slate-900 hover:bg-slate-800 transition-colors shadow-lg"
            >
              Live Demo →
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold text-sm sm:text-base border-2 border-slate-900 hover:bg-slate-50 transition-colors shadow-lg"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;