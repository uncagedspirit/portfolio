import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-zinc-900 px-4 sm:px-8 lg:px-16 py-8 sm:py-10 lg:py-12 transition-colors duration-300">
      <button
        onClick={() => navigate("/")}
        className="mb-6 sm:mb-8 flex items-center gap-2 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
      >
        <span className="text-lg sm:text-xl">←</span>
        <span className="text-sm sm:text-base">Back to Home</span>
      </button>

      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Experience Details
        </h1>
        <div className="bg-slate-200 dark:bg-zinc-800 rounded-2xl border-b-6 border-r-6 border-t border-l border-slate-800 dark:border-zinc-400 shadow-lg p-6 sm:p-8 transition-colors duration-300">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Coming soon! This will be a detailed blog-style page about experience #{id}.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">This page will include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>Detailed project descriptions and achievements</li>
            <li>Technical challenges and solutions</li>
            <li>Team collaboration insights</li>
            <li>Key learnings and takeaways</li>
            <li>Visual media and screenshots</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetail;