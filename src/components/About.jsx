import founderPhoto from '../assets/founder.webp'
import Reveal from './Reveal'

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
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="font-brand text-3xl text-[#efece4] md:text-4xl">
            Precise thinking,
            <br />
            purposeful progress
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#9497a1]">
            Founded in 2025, Aelin Technologies is a Sri Lankan technology, research and
            innovation company bringing together Aelin Research, Aelin Digital and Aelin
            Innovation to turn complex needs into clear, practical outcomes.
          </p>
        </div>

        <div className="divide-y divide-[#24252b] border-t border-[#24252b] md:border-t-0">
          {PILLARS.map((p) => (
            <div key={p.title} className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[140px_1fr]">
              <h3 className="font-brand text-lg text-[#efece4]">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[#9497a1]">{p.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 flex flex-col items-center gap-6 border-t border-[#24252b] pt-10 md:flex-row md:items-center">
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
            <h3 className="text-base font-semibold text-[#efece4]">Kulindu Pabasara</h3>
            <a
              href="https://linkedin.com/in/kulindupabasara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kulindu Pabasara on LinkedIn"
              className="flex h-6 w-6 items-center justify-center text-[#9497a1] transition hover:text-[#b9922f]"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="text-sm font-medium text-[#b9922f]">Founder — Full-Stack Software Engineer</p>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#9497a1]">
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
    </section>
  )
}
