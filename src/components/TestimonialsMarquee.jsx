import React from "react";
import { testimonials } from "../data/testimonialsData";

function TestimonialsMarquee() {
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden w-full py-3 sm:py-4">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 z-10"
           style={{ background: "linear-gradient(to right, var(--bg-page), transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 z-10"
           style={{ background: "linear-gradient(to left, var(--bg-page), transparent)" }} />

      <div className="flex gap-4 sm:gap-6 pf-marquee">
        {tripleTestimonials.map((t, index) => (
          <div key={index} className="pf-card-sm min-w-60 sm:min-w-70 p-3 sm:p-4 shrink-0 transition-colors duration-300">
            <p className="pf-heading-sm text-xs sm:text-sm">{t.name}</p>
            <p className="pf-muted text-xs">{t.role}</p>
            <p className="pf-body mt-2 text-xs sm:text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsMarquee;