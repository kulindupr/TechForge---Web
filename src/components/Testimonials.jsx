import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

// Placeholder slots — replace with real client quotes once available.
const testimonials = [
  {
    quote:
      'Add a real quote from a client here once a project is delivered and the client agrees to be featured.',
    name: 'Client Name',
    role: 'Role, Company',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length)
  const next = () => setI((v) => (v + 1) % testimonials.length)

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">What Our Clients Say</h2>
        <p className="mt-2 text-slate-400">Trusted by students, professionals and businesses.</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/40 sm:flex"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <Quote className="h-7 w-7 text-cyan-400/60" />
          <p className="mt-4 text-lg leading-relaxed text-slate-200">{t.quote}</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-[#06101f]">
              {t.name.charAt(0)}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-slate-400">{t.role}</p>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/40 sm:flex"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
