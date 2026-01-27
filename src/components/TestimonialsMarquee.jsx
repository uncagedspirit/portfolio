import React from "react";
import { testimonials } from "../data/testimonialsData";

function TestimonialsMarquee() {
  return (
    <div className="relative overflow-hidden w-full py-4">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-slate-100 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-slate-100 to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-70 bg-slate-200 text-slate-900
              rounded-2xl border-b-8 border-r-8 border-slate-800
              shadow-lg p-4"
          >
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-slate-600">{t.role}</p>
            <p className="mt-2 text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsMarquee;
