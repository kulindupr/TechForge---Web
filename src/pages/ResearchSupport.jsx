import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  ArrowLeft,
  LineChart,
  FileText,
  GraduationCap,
  ClipboardList,
  BookOpen,
  PenLine,
  BarChart3,
  FileCheck2,
  Check,
} from 'lucide-react'

const solutions = [
  {
    icon: LineChart,
    gradient: 'from-purple-500 to-fuchsia-500',
    title: 'Research Guidance',
    desc: 'One-on-one support shaping your research question, methodology and scope.',
  },
  {
    icon: BarChart3,
    gradient: 'from-cyan-400 to-blue-500',
    title: 'IBM SPSS & Statistical Support',
    desc: 'Data entry, cleaning, hypothesis testing and statistical analysis in SPSS.',
  },
  {
    icon: FileText,
    gradient: 'from-emerald-400 to-teal-500',
    title: 'Data Analysis & Interpretation',
    desc: 'Turning raw survey or experimental data into clear, defensible findings.',
  },
  {
    icon: ClipboardList,
    gradient: 'from-orange-400 to-amber-500',
    title: 'Research Reports & Documentation',
    desc: 'Well-structured reports, dissertations and theses ready for submission.',
  },
  {
    icon: PenLine,
    gradient: 'from-rose-500 to-pink-600',
    title: 'Proposal & Literature Review Writing',
    desc: 'Research proposals and literature reviews grounded in credible sources.',
  },
  {
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-600',
    title: 'Citation & Referencing',
    desc: 'APA, MLA, Harvard and other formats applied accurately throughout.',
  },
  {
    icon: GraduationCap,
    gradient: 'from-fuchsia-500 to-purple-600',
    title: 'Academic CV & Portfolio',
    desc: 'Academic CVs and portfolios that present your research credibly.',
  },
  {
    icon: FileCheck2,
    gradient: 'from-teal-400 to-emerald-500',
    title: 'Plagiarism & Quality Review',
    desc: 'Originality checks and quality review before you submit your work.',
  },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'We discuss your research topic, data and deadline.' },
  { step: '02', title: 'Plan', desc: 'We agree the scope, methodology and deliverables.' },
  { step: '03', title: 'Analysis & Writing', desc: 'We analyze your data and draft your documentation.' },
  { step: '04', title: 'Review & Delivery', desc: 'You review, we refine, and deliver the final work.' },
]

export default function ResearchSupport() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SEO
        title="Academic & Research Support — Tech Forge"
        description="Research guidance, IBM SPSS & statistical support, data analysis, and academic documentation support from Tech Forge."
        path="/research-support"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="mt-8 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
          — Academic & Research Support —
        </span>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Research Support You Can Trust, Start to Finish
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          From your first research question to a finished, submission-ready document,
          Tech Forge supports students and researchers with expert guidance and analysis.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-fuchsia-400/30"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-[#06101f]`}
            >
              <s.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold text-white md:text-3xl">How We Work</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-3xl font-extrabold text-fuchsia-400/50">{p.step}</span>
              <h3 className="mt-3 text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-2xl border border-fuchsia-400/20 bg-white/[0.03] p-8">
        <h2 className="text-xl font-bold text-white">Why Choose Tech Forge for Your Research</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            'Confidential, plagiarism-free work',
            'Experienced in SPSS & statistical methods',
            'Clear communication throughout',
            'On-time delivery for your deadlines',
          ].map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-slate-200">
              <Check className="h-4 w-4 flex-shrink-0 text-fuchsia-400" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <h2 className="text-2xl font-bold text-white">Ready to start your research project?</h2>
        <p className="max-w-md text-sm text-slate-400">
          Tell us about your research and deadline, and we'll recommend the right support.
        </p>
        <Link
          to="/#contact"
          className="glass-btn glow-purple inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
