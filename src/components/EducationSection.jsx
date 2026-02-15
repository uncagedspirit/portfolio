import React from "react";
import educationData from "../data/educationData";

function EducationSection() {
  return (
    <>
      <p className="text-slate-900 dark:text-slate-200 mb-2 font-semibold text-sm tracking-wide">
        EDUCATION
      </p>

      <div className="w-full lg:w-[85%] flex flex-row gap-3 flex-wrap">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex-1 min-w-35 bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-slate-100 rounded-2xl border-b-6 border-r-6 border-t border-l py-4 sm:py-5 px-3 sm:px-4 border-slate-800 dark:border-zinc-400 shadow-lg transition-colors duration-300"
          >
            <p className="font-semibold text-xs sm:text-sm leading-tight">{edu.instituteName}</p>
            <p className="text-xs text-slate-700 dark:text-slate-400 mt-0.5">{edu.level}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">{edu.specialization}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{edu.duration}</p>
            <p className="text-xs font-bold text-slate-900 dark:text-slate-200 mt-1">
              {edu.scoreLabel}: {edu.scoreValue}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationSection;