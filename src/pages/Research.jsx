import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import IconCard from '../components/IconCard'
import ProcessSteps from '../components/ProcessSteps'
import CTA from '../components/CTA'
import heroBg from '../assets/hero-bg.webp'
import {
  ArrowLeft,
  Compass,
  BarChart3,
  LineChart,
  FileText,
  BookOpen,
  Quote,
  GraduationCap,
  ShieldCheck,
  MessageSquare,
  ClipboardList,
  PenLine,
  PackageCheck,
  Lock,
  Clock,
} from 'lucide-react'

const solutions = [
  { title: 'Research guidance', desc: 'One-on-one support shaping your research question, methodology and scope.', Icon: Compass },
  { title: 'IBM SPSS & statistical support', desc: 'Data entry, cleaning, hypothesis testing and statistical analysis in SPSS.', Icon: BarChart3 },
  { title: 'Data analysis & interpretation', desc: 'Turning raw survey or experimental data into clear, defensible findings.', Icon: LineChart },
  { title: 'Research reports & documentation', desc: 'Well-structured reports, dissertations and theses ready for submission.', Icon: FileText },
  { title: 'Proposal & literature review writing', desc: 'Research proposals and literature reviews grounded in credible sources.', Icon: BookOpen },
  { title: 'Citation & referencing', desc: 'APA, MLA, Harvard and other formats applied accurately throughout.', Icon: Quote },
  { title: 'Academic CV & portfolio', desc: 'Academic CVs and portfolios that present your research credibly.', Icon: GraduationCap },
  { title: 'Plagiarism & quality review', desc: 'Originality checks and quality review before you submit your work.', Icon: ShieldCheck },
]

const process = [
  { number: '01', title: 'Consultation', desc: 'We discuss your research topic, data and deadline.', Icon: MessageSquare },
  { number: '02', title: 'Plan', desc: 'We agree the scope, methodology and deliverables.', Icon: ClipboardList },
  { number: '03', title: 'Analysis & writing', desc: 'We analyze your data and draft your documentation.', Icon: PenLine },
  { number: '04', title: 'Review & delivery', desc: 'You review, we refine, and deliver the final work.', Icon: PackageCheck },
]

const benefits = [
  { title: 'Confidential & original', desc: 'Confidential, plagiarism-free work on every engagement.', Icon: Lock },
  { title: 'Statistical expertise', desc: 'Experienced in SPSS & statistical methods.', Icon: BarChart3 },
  { title: 'Clear communication', desc: 'Clear communication throughout your project.', Icon: MessageSquare },
  { title: 'On-time delivery', desc: 'On-time delivery for your deadlines.', Icon: Clock },
]

export default function Research() {
  return (
    <div className="pt-28">
      <SEO
        title="Aelin Research — Academic & Research Support"
        description="Research guidance, IBM SPSS & statistical support, data analysis, and academic documentation support from Aelin Technologies."
        path="/research"
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
                Aelin Research
              </span>
              <h1 className="font-brand mt-4 max-w-xl text-3xl leading-tight text-[#f1efe9] md:text-5xl">
                Research support you can trust, start to finish
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#a3a5aa]">
                From your first research question to a finished, submission-ready document,
                Aelin Technologies supports students and researchers with expert guidance and
                analysis.
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
              Our Services
            </span>
            <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
              How We Help.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <IconCard Icon={s.Icon} title={s.title} desc={s.desc} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
              How We Work
            </span>
            <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
              A Guided Process.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <ProcessSteps steps={process} />
          </Reveal>
        </div>

        <div className="mt-20 pb-20">
          <Reveal className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
              Why Aelin
            </span>
            <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
              Why Choose Aelin For Your Research.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <IconCard Icon={b.Icon} title={b.title} desc={b.desc} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  )
}
