import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import IconCard from '../components/IconCard'
import CTA from '../components/CTA'
import heroBg from '../assets/hero-bg.webp'
import { ArrowLeft, Bot, Layers, FlaskConical } from 'lucide-react'

const FOCUS_AREAS = [
  {
    title: 'Applied AI integration',
    desc: 'Adding AI-powered features — RAG-based assistants, intelligent search, automation — into existing products and workflows, rather than building AI for its own sake.',
    Icon: Bot,
  },
  {
    title: 'SaaS product development',
    desc: 'Early-stage SaaS tooling built on the same engineering standards as our client work, developed as internal projects before any public release.',
    Icon: Layers,
  },
  {
    title: 'Applied research & prototypes',
    desc: 'Short, focused experiments that test whether an emerging technique or technology is actually useful in practice before it is proposed to a client.',
    Icon: FlaskConical,
  },
]

export default function Innovation() {
  return (
    <div className="pt-28">
      <SEO
        title="Aelin Innovation — AI, SaaS & Emerging Technology"
        description="Aelin Innovation is Aelin Technologies' applied-AI and emerging-technology practice — where new techniques are tested before they're offered to clients."
        path="/innovation"
      />

      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#FFC300]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Reveal>
          <div
            className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-cover bg-right"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, #090a0c 0%, rgba(9,10,12,0.92) 45%, rgba(9,10,12,0.4) 80%, rgba(9,10,12,0.15) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="relative px-6 py-14 sm:px-10 sm:py-20">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
                Aelin Innovation
              </span>
              <h1 className="font-brand mt-4 max-w-xl text-3xl leading-tight text-[#f1efe9] md:text-5xl">
                Where new ideas are tested before they ship
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#a3a5aa]">
                Aelin Innovation is our applied-AI and emerging-technology practice. It's the
                smallest and newest of the three divisions — this page describes current
                direction and focus, not a catalogue of shipped products.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#FFC300] px-6 py-3 text-sm font-medium text-[#090a0c] transition hover:bg-[#FFD54D]"
              >
                Get in touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
              Focus Areas
            </span>
            <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
              What We're Exploring.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS_AREAS.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <IconCard Icon={f.Icon} title={f.title} desc={f.desc} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 pb-20">
          <Reveal className="max-w-2xl rounded-xl border border-white/10 bg-[#15181d] p-8">
            <h2 className="font-brand text-xl text-[#f1efe9] md:text-2xl">
              How this connects to Research and Digital
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#a3a5aa]">
              Innovation work typically starts as a feature inside an Aelin Digital project —
              an AI-powered search, an automation, a chatbot — and is only generalized into a
              standalone product once it has proven useful in a real engagement. We don't
              build speculative products in isolation from client work.
            </p>
          </Reveal>
        </div>
      </div>

      <CTA />
    </div>
  )
}
