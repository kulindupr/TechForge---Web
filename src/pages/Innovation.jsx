import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ArrowLeft } from 'lucide-react'

const FOCUS_AREAS = [
  {
    title: 'Applied AI integration',
    desc: 'Adding AI-powered features — RAG-based assistants, intelligent search, automation — into existing products and workflows, rather than building AI for its own sake.',
  },
  {
    title: 'SaaS product development',
    desc: 'Early-stage SaaS tooling built on the same engineering standards as our client work, developed as internal projects before any public release.',
  },
  {
    title: 'Applied research & prototypes',
    desc: 'Short, focused experiments that test whether an emerging technique or technology is actually useful in practice before it is proposed to a client.',
  },
]

export default function Innovation() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
      <SEO
        title="Aelin Innovation — AI, SaaS & Emerging Technology"
        description="Aelin Innovation is Aelin Technologies' applied-AI and emerging-technology practice — where new techniques are tested before they're offered to clients."
        path="/innovation"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#c5a46d]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="mt-8 max-w-2xl">
        <h1 className="font-brand text-4xl text-[#f1efe9] md:text-5xl">
          Where new ideas are tested before they ship
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#a3a5aa]">
          Aelin Innovation is our applied-AI and emerging-technology practice. It's the
          smallest and newest of the three divisions — this page describes current
          direction and focus, not a catalogue of shipped products.
        </p>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {FOCUS_AREAS.map((f) => (
          <div key={f.title}>
            <h3 className="font-brand text-lg text-[#f1efe9]">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-white/10 pt-10">
        <h2 className="font-brand text-xl text-[#f1efe9]">How this connects to Research and Digital</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#a3a5aa]">
          Innovation work typically starts as a feature inside an Aelin Digital project —
          an AI-powered search, an automation, a chatbot — and is only generalized into a
          standalone product once it has proven useful in a real engagement. We don't
          build speculative products in isolation from client work.
        </p>
      </div>

      <div className="mt-20 flex flex-col items-start gap-4 border-t border-white/10 pt-10">
        <h2 className="font-brand text-2xl text-[#f1efe9]">Have an idea worth testing?</h2>
        <p className="max-w-md text-sm text-[#a3a5aa]">
          If you have an AI or automation idea for your business, talk to us — most of
          our innovation work starts as exactly that conversation.
        </p>
        <Link to="/contact" className="btn-gold inline-block px-6 py-3 text-sm font-medium">
          Get in touch
        </Link>
      </div>
    </div>
  )
}
