import React from 'react'
import TestimonialsMarquee from './TestimonialsMarquee'

function TestimonialsSection() {
  return (
    <div className="pb-6 sm:pb-8">
      <p className="text-slate-900 dark:text-slate-200 mt-6 sm:mt-8 mb-2 font-semibold text-sm">TESTIMONIALS</p>
      <TestimonialsMarquee />
    </div>
  )
}

export default TestimonialsSection