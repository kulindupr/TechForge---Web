import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ArrowLeft, Check } from 'lucide-react'

const solutions = [
  { title: 'Research guidance', desc: 'One-on-one support shaping your research question, methodology and scope.' },
  { title: 'IBM SPSS & statistical support', desc: 'Data entry, cleaning, hypothesis testing and statistical analysis in SPSS.' },
  { title: 'Data analysis & interpretation', desc: 'Turning raw survey or experimental data into clear, defensible findings.' },
  { title: 'Research reports & documentation', desc: 'Well-structured reports, dissertations and theses ready for submission.' },
  { title: 'Proposal & literature review writing', desc: 'Research proposals and literature reviews grounded in credible sources.' },
  { title: 'Citation & referencing', desc: 'APA, MLA, Harvard and other formats applied accurately throughout.' },
  { title: 'Academic CV & portfolio', desc: 'Academic CVs and portfolios that present your research credibly.' },
  { title: 'Plagiarism & quality review', desc: 'Originality checks and quality review before you submit your work.' },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'We discuss your research topic, data and deadline.' },
  { step: '02', title: 'Plan', desc: 'We agree the scope, methodology and deliverables.' },
  { step: '03', title: 'Analysis & writing', desc: 'We analyze your data and draft your documentation.' },
  { step: '04', title: 'Review & delivery', desc: 'You review, we refine, and deliver the final work.' },
]

export default function ResearchSupport() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
      <SEO
        title="Academic & Research Support — Aelin Technologies"
        description="Research guidance, IBM SPSS & statistical support, data analysis, and academic documentation support from Aelin Technologies."
        path="/research-support"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#9497a1] transition hover:text-[#b9922f]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="mt-8 max-w-2xl">
        <h1 className="font-brand text-4xl text-[#efece4] md:text-5xl">
          Research support you can trust, start to finish
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#9497a1]">
          From your first research question to a finished, submission-ready document,
          Aelin Technologies supports students and researchers with expert guidance and
          analysis.
        </p>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-[#24252b] pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <div key={s.title}>
            <h3 className="font-brand text-lg text-[#efece4]">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#9497a1]">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="font-brand text-2xl text-[#efece4] md:text-3xl">How we work</h2>
        <div className="mt-8 grid gap-8 border-t border-[#24252b] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step}>
              <span className="font-brand text-sm text-[#6b6e76]">{p.step}</span>
              <h3 className="font-brand mt-2 text-base text-[#efece4]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9497a1]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-[#24252b] pt-10">
        <h2 className="font-brand text-xl text-[#efece4]">Why choose Aelin for your research</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            'Confidential, plagiarism-free work',
            'Experienced in SPSS & statistical methods',
            'Clear communication throughout',
            'On-time delivery for your deadlines',
          ].map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-[#c7c9cd]">
              <Check className="h-4 w-4 flex-shrink-0 text-[#b9922f]" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 flex flex-col items-start gap-4 border-t border-[#24252b] pt-10">
        <h2 className="font-brand text-2xl text-[#efece4]">Ready to start your research project?</h2>
        <p className="max-w-md text-sm text-[#9497a1]">
          Tell us about your research and deadline, and we'll recommend the right support.
        </p>
        <Link to="/#contact" className="btn-gold inline-block px-6 py-3 text-sm font-medium">
          Get in touch
        </Link>
      </div>
    </div>
  )
}
