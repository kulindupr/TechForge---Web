import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import nethminiPhoto from '../assets/testimonial-nethmini.webp'
import milanPhoto from '../assets/testimonial-milan.webp'

const testimonials = [
  {
    quote:
      'Before this, I was tracking orders in a notebook and replying to customers one by one on WhatsApp. Now everything just works from one place, and I actually have time to focus on growing the shop instead of chasing orders.',
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

export default function Testimonials({ showIntro = true }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div
        className={`grid gap-10 ${
          showIntro ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16' : ''
        } lg:items-center`}
      >
        {showIntro && (
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
              Testimonials
            </span>
            <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
              Trusted by
              <br />
              Innovators.
            </h2>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-[#a3a5aa]">
              Partnering with forward-thinking businesses across Sri Lanka.
            </p>
            <Link
              to="/projects"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#FFC300] transition hover:gap-2.5"
            >
              See Our Work <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        )}

        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#15181d] p-6">
                <div>
                  <Quote className="h-6 w-6 text-[#FFC300]" fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-[#f1efe9]">“{t.quote}”</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      width="36"
                      height="36"
                      className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 font-brand text-xs text-[#a3a5aa]">
                      {t.name.charAt(0)}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[#f1efe9]">{t.name}</p>
                    <p className="text-xs text-[#777b83]">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
