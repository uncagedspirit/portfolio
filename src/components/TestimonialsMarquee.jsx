import React from "react";
import { testimonials } from "../data/testimonialsData";

function TestimonialsMarquee() {
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden w-full py-3 sm:py-4">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 bg-linear-to-r from-slate-100 dark:from-zinc-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 bg-linear-to-l from-slate-100 dark:from-zinc-900 to-transparent z-10" />

      <div className="flex gap-4 sm:gap-6 animate-marquee">
        {tripleTestimonials.map((t, index) => (
          <div
            key={index}
            className="
              min-w-60 sm:min-w-70
              bg-slate-200 dark:bg-zinc-800 text-slate-900 dark:text-slate-100
              rounded-2xl
              border-t border-l
              border-b-6 border-r-6 border-slate-800 dark:border-zinc-400
              shadow-lg
              p-3 sm:p-4
              shrink-0
              transition-colors duration-300
            "
          >
            <p className="text-xs sm:text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t.role}</p>
            <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsMarquee;