import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ArrowLeft } from 'lucide-react'

export default function Insights() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-28">
      <SEO
        title="Insights — Aelin Technologies"
        description="Notes on technology, research and software engineering from Aelin Technologies. Coming soon."
        path="/insights"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#c5a46d]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="mt-20 flex flex-col items-start gap-4 border-t border-white/10 pt-16">
        <h1 className="font-brand text-4xl text-[#f1efe9] md:text-5xl">Insights</h1>
        <p className="max-w-lg text-base leading-relaxed text-[#a3a5aa]">
          We're working on a set of notes about the technology, research and engineering
          problems we see across the three divisions. Nothing is published here yet — we'd
          rather leave this page empty than fill it with placeholder articles.
        </p>
        <Link to="/contact" className="btn-outline inline-block px-6 py-3 text-sm font-medium">
          Get in touch in the meantime
        </Link>
      </div>
    </div>
  )
}
