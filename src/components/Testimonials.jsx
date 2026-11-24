import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
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
      "I was worried a new system would slow my staff down, but it was the opposite — billing is faster now and I can finally see what's selling without counting stock by hand every night. Aelin Technologies made it simple for people like us who aren't 'tech people'.",
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
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <Reveal>
        <h2 className="font-brand text-3xl text-[#efece4] md:text-4xl">What clients say</h2>
      </Reveal>

      <div className="mt-10 border-l-2 border-[#b9922f] pl-8">
        <p className="font-brand text-2xl leading-snug text-[#efece4] md:text-[1.7rem]">
          “{t.quote}”
        </p>
        <div className="mt-6 flex items-center gap-3">
          {t.photo ? (
            <img
              src={t.photo}
              alt={t.name}
              loading="lazy"
              decoding="async"
              width="40"
              height="40"
              className="h-10 w-10 rounded-full object-cover grayscale"
            />
          ) : (
            <span className="h-10 w-10 rounded-full bg-[#131419]" />
          )}
          <div>
            <p className="text-sm font-semibold text-[#efece4]">{t.name}</p>
            <p className="text-xs text-[#6b6e76]">{t.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button onClick={prev} aria-label="Previous testimonial" className="text-[#9497a1] transition hover:text-[#efece4]">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} aria-label="Next testimonial" className="text-[#9497a1] transition hover:text-[#efece4]">
          <ChevronRight className="h-5 w-5" />
        </button>
        <span className="text-xs text-[#6b6e76]">
          {i + 1} / {testimonials.length}
        </span>
      </div>
    </section>
  )
}
