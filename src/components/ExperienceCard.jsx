import { useState } from "react";
import { useLocationImages } from "../hooks/useLocationImages";
import LocationBubble from "./LocationBubble";

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);
  const { images, loading, fetchImages } = useLocationImages();
  const [showBubble, setShowBubble] = useState(false);
  let hoverTimeout;

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-slate-200 text-slate-900 rounded-2xl border-b-6 border-r-6   border-t border-l border-slate-800 shadow-lg p-4 cursor-pointer select-none"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            onClick={(e) => {
              e.stopPropagation();
              if (exp.site) {
                window.open(exp.site, "_blank", "noopener,noreferrer");
              }
            }}
            className={`w-12 h-12 object-cover p-1 rounded-lg bg-slate-100 border border-slate-500 ${
              exp.site ? "cursor-pointer hover:scale-105 transition-transform" : ""
            }`}
          />
          <div>
            <p className="font-semibold text-lg leading-tight">
              {exp.company}
            </p>
            <p className="text-sm text-slate-700">{exp.role}</p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-700">{exp.duration}</p>
            <span
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-600 relative">
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
              className="relative text-sm font-medium text-slate-800 cursor-pointer transition-all duration-200 hover:underline hover:text-slate-900 border-b border-dotted border-slate-900"
            >
              {exp.location}
              {showBubble && (
                <span className="absolute top-full left-0 mt-2">
                  <LocationBubble images={images} loading={loading} />
                </span>
              )}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-0.5 mt-3">
        {exp.techStack?.map((tech) => (
          <span
            key={tech}
            className="bg-gray-50 border border-slate-600 px-1 py-0.5 rounded-lg text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <ul className="list-disc pl-5 text-sm">
          {exp.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
