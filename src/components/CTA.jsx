import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.webp'

function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  )
}

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-cover bg-right"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #090a0c 0%, rgba(9,10,12,0.9) 35%, rgba(9,10,12,0.35) 75%, rgba(9,10,12,0.1) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-center gap-4">
            <SparkleIcon className="h-8 w-8 flex-shrink-0 text-[#FFC300]" aria-hidden="true" />
            <div>
              <h2 className="font-brand text-xl text-[#f1efe9] md:text-2xl">
                Ready to turn your ideas into impact?
              </h2>
              <p className="mt-1 text-sm text-[#a3a5aa]">
                Let's build something extraordinary together.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-[#FFC300] px-6 py-3 text-sm font-medium text-[#090a0c] transition hover:bg-[#FFD54D]"
          >
            Contact Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
