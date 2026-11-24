import { Link } from 'react-router-dom'
import founderPhoto from '../assets/founder.webp'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="flex flex-col items-start gap-8 border-t border-white/10 pt-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-brand text-3xl text-[#f1efe9] md:text-4xl">
            Precise thinking, purposeful progress
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#a3a5aa]">
            Founded in 2025, Aelin Technologies is a Sri Lankan technology, research and
            innovation company bringing together Aelin Research, Aelin Digital and Aelin
            Innovation to turn complex needs into clear, practical outcomes.
          </p>
          <Link
            to="/about"
            className="mt-5 inline-block border-b border-white/20 pb-0.5 text-sm font-medium text-[#f1efe9] transition hover:border-[#c5a46d] hover:text-[#c5a46d]"
          >
            More about Aelin
          </Link>
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
          <img
            src={founderPhoto}
            alt="Kulindu Pabasara"
            loading="lazy"
            decoding="async"
            width="64"
            height="64"
            className="h-16 w-16 flex-shrink-0 rounded-full object-cover grayscale"
          />
          <div>
            <h3 className="text-base font-semibold text-[#f1efe9]">Kulindu Pabasara</h3>
            <p className="text-sm font-medium text-[#c5a46d]">Founder — Full-Stack Software Engineer</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
