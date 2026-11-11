import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react'
import nethminiPhoto from '../assets/testimonial-nethmini.webp'
import milanPhoto from '../assets/testimonial-milan.webp'

const testimonials = [
  {
    quote:
      "Before this, I was tracking orders in a notebook and replying to customers one by one on WhatsApp. Now everything just works from one place, and I actually have time to focus on growing the shop instead of chasing orders.",
    name: 'Nethmini Jayathilaka',
    role: 'Owner, Leonara',
    photo: nethminiPhoto,
  },
  {
    quote:
      "I was worried a new system would slow my staff down, but it was the opposite — billing is faster now and I can finally see what's selling without counting stock by hand every night. Tech Forge made it simple for people like us who aren't 'tech people'.",
    name: 'Milan Sathsara',
    role: 'Owner, Milan POS (Food City)',
    photo: milanPhoto,
  },
  {
    quote:
      "Our editorial team isn't technical, so we needed something our journalists could pick up without training. The new system lets us publish and schedule stories ourselves now, instead of waiting on a developer every time we wanted something posted.",
    name: 'NWN.lk',
    role: 'Editorial Team',
    photo: null,
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
            {t.photo ? (
              <img
                src={t.photo}
                alt={t.name}
                loading="lazy"
                decoding="async"
                width="44"
                height="44"
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[#06101f]">
                <Newspaper className="h-5 w-5" />
              </span>
            )}
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
