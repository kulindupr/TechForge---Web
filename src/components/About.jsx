import { Target, Eye, Sparkles, ArrowRight } from 'lucide-react'
import founderPhoto from '../assets/founder.png'

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          — About Tech Forge —
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Forging the Future, One Idea at a Time
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Founded in 2025, Tech Forge is a technology and professional services company
          delivering software solutions, academic and research support, and digital
          transformation services across two dedicated divisions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-[#06101f]">
            <Eye className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-bold text-white">Our Vision</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            To be a trusted technology partner empowering businesses, students and
            researchers to achieve more through innovation.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-[#06101f]">
            <Target className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-bold text-white">Our Mission</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Deliver reliable, affordable and well-engineered software and research
            support, tailored to every client's real-world needs.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-[#06101f]">
            <Sparkles className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-bold text-white">Our Values</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Quality, confidentiality and customer-focused service guide every project
            we take on.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-8 md:flex-row md:items-center">
        <img
          src={founderPhoto}
          alt="Kulindu Pabasara"
          className="h-24 w-24 flex-shrink-0 rounded-full border-2 border-cyan-400/40 object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <h3 className="text-lg font-bold text-white">Kulindu Pabasara</h3>
            <a
              href="https://linkedin.com/in/kulindupabasara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kulindu Pabasara on LinkedIn"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-cyan-400/20 hover:text-cyan-300"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="text-sm font-semibold text-cyan-300">Founder — Full-Stack Software Engineer</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Kulindu helps businesses solve real-world problems by building scalable
            software, from enterprise applications to AI-powered digital products.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col items-stretch gap-3 sm:flex-row">
          <a
            href="https://kulindu24-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn glow-cyan inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#06101f] transition hover:brightness-110"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
