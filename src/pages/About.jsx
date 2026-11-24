import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import founderPhoto from '../assets/founder.webp'

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

const PILLARS = [
  {
    title: 'Vision',
    body: 'To be a trusted technology partner, empowering businesses, students and researchers to achieve more through innovation.',
  },
  {
    title: 'Mission',
    body: 'Deliver reliable, well-engineered software and research support, tailored to every client’s real-world needs.',
  },
  {
    title: 'Values',
    body: 'Precision, intelligence, progress, integrity and craft guide every project we take on.',
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-28">
      <SEO
        title="About — Aelin Technologies"
        description="Aelin Technologies is a Sri Lankan technology, research and innovation company founded in 2025, bringing together Aelin Research, Aelin Digital and Aelin Innovation."
        path="/about"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#c5a46d]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <Reveal>
        <h1 className="font-brand mt-8 text-4xl text-[#f1efe9]">
          Precise thinking, purposeful progress
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#a3a5aa]">
          Founded in 2025, Aelin Technologies is a Sri Lankan technology, research and
          innovation company bringing together Aelin Research, Aelin Digital and Aelin
          Innovation to turn complex needs into clear, practical outcomes.
        </p>
      </Reveal>

      <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
        {PILLARS.map((p) => (
          <div key={p.title} className="grid gap-2 py-6 sm:grid-cols-[140px_1fr]">
            <h2 className="font-brand text-lg text-[#f1efe9]">{p.title}</h2>
            <p className="text-sm leading-relaxed text-[#a3a5aa]">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center">
        <img
          src={founderPhoto}
          alt="Kulindu Pabasara"
          loading="lazy"
          decoding="async"
          width="80"
          height="80"
          className="h-20 w-20 flex-shrink-0 rounded-full object-cover grayscale"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <h3 className="text-base font-semibold text-[#f1efe9]">Kulindu Pabasara</h3>
            <a
              href="https://linkedin.com/in/kulindupabasara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kulindu Pabasara on LinkedIn"
              className="flex h-6 w-6 items-center justify-center text-[#a3a5aa] transition hover:text-[#c5a46d]"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="text-sm font-medium text-[#c5a46d]">Founder — Full-Stack Software Engineer</p>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#a3a5aa]">
            Kulindu helps businesses solve real-world problems by building scalable
            software, from enterprise applications to AI-powered digital products.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col items-stretch gap-3 sm:flex-row">
          <a
            href="https://kulindu24-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block px-5 py-2.5 text-center text-sm font-medium"
          >
            View portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
