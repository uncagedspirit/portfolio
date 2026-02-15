import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocationImages } from "../hooks/useLocationImages";
import LocationBubble from "./LocationBubble";

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { images, loading, fetchImages } = useLocationImages();
  const [showBubble, setShowBubble] = useState(false);
  let hoverTimeout;

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-slate-100 rounded-2xl border-b-6 border-r-6 border-t border-l border-slate-800 dark:border-zinc-400 shadow-lg p-3 sm:p-4 cursor-pointer select-none transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex gap-2 sm:gap-3 flex-1 min-w-0">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            onClick={(e) => {
              e.stopPropagation();
              if (exp.site) window.open(exp.site, "_blank", "noopener,noreferrer");
            }}
            className={`w-10 h-10 sm:w-12 sm:h-12 object-cover p-1 rounded-lg bg-slate-100 dark:bg-zinc-700 border border-slate-500 dark:border-zinc-500 shrink-0 ${
              exp.site ? "cursor-pointer hover:scale-105 transition-transform" : ""
            }`}
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-sm sm:text-base lg:text-lg leading-tight truncate text-slate-900 dark:text-slate-100">
              {exp.company}
            </p>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 truncate">{exp.role}</p>
          </div>
        </div>

        <div className="flex flex-col items-end shrink-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 whitespace-nowrap">{exp.duration}</p>
            <span className={`transition-transform duration-300 text-sm text-slate-700 dark:text-slate-400 ${open ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 relative whitespace-nowrap">
            {exp.workType} ·{" "}
            <span
              onMouseEnter={() => {
                hoverTimeout = setTimeout(() => {
                  fetchImages(exp.locationImages);
                  setShowBubble(true);
                }, 300);
              }}
              onMouseLeave={() => {
                clearTimeout(hoverTimeout);
                setShowBubble(false);
              }}
              className="relative text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-300 cursor-pointer transition-all duration-200 hover:underline hover:text-slate-900 dark:hover:text-slate-100 border-b border-dotted border-slate-900 dark:border-slate-400"
            >
              {exp.location}
              {showBubble && (
                <span className="absolute top-full left-0 mt-2 hidden lg:inline">
                  <LocationBubble images={images} loading={loading} />
                </span>
              )}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-0.5 mt-2 sm:mt-3">
        {exp.techStack?.map((tech) => (
          <span
            key={tech}
            className="bg-gray-50 dark:bg-zinc-700 border border-slate-600 dark:border-zinc-500 px-1 py-0.5 rounded-lg text-xs text-slate-800 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 mt-2 sm:mt-3" : "max-h-0"
        }`}
      >
        <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
          {exp.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/experience/${exp.id}`);
            }}
            className="text-slate-900 dark:text-slate-200 font-semibold text-[14.5px] hover:underline hover:text-slate-700 dark:hover:text-slate-400 transition-colors"
          >
            Want to know more about this? →
          </button>
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;