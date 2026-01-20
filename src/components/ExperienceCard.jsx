import { useState } from "react";
function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-slate-200 text-slate-900 rounded-2xl border-b-8 border-r-8 border-t border-l border-slate-800 shadow-lg p-4 cursor-pointer select-none"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="w-12 h-12 object-cover p-1 rounded-lg bg-slate-100 border border-slate-500"
          />
          <div>
            <p className="font-semibold text-lg leading-tight">{exp.company}</p>
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
          <p className="text-xs text-slate-600">
            {exp.workType} · {exp.location}
          </p>
        </div>
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
