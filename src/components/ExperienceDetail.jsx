import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pf-bg-page px-4 sm:px-8 lg:px-16 py-8 sm:py-10 lg:py-12 transition-colors duration-300">
      <button onClick={() => navigate("/")} className="mb-6 sm:mb-8 flex items-center gap-2 pf-text-muted hover:pf-text-body transition-colors">
        <span className="text-lg sm:text-xl">←</span>
        <span className="text-sm sm:text-base">Back to Home</span>
      </button>

      <div className="max-w-4xl">
        <h1 className="pf-heading-xl text-3xl sm:text-4xl lg:text-5xl mb-6">Experience Details</h1>
        <div className="pf-card p-6 sm:p-8 transition-colors duration-300">
          <p className="pf-body text-lg mb-4">
            Coming soon! This will be a detailed blog-style page about experience #{id}.
          </p>
          <p className="pf-section-label">This page will include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 pf-body text-sm">
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