import { Link } from 'react-router-dom'
import { MessageSquare, PenTool, Settings, Rocket } from 'lucide-react'
import Reveal from './Reveal'
import ProcessSteps from './ProcessSteps'

const STEPS = [
  {
    number: '01',
    title: 'Understand',
    desc: 'We listen, analyze and explore your needs.',
    Icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Design',
    desc: 'We craft thoughtful solutions.',
    Icon: PenTool,
  },
  {
    number: '03',
    title: 'Build',
    desc: 'We engineer with precision.',
    Icon: Settings,
  },
  {
    number: '04',
    title: 'Grow',
    desc: 'We support your success.',
    Icon: Rocket,
  },
]

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:items-center lg:gap-16">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
            How We Work
          </span>
          <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
            A Strategic
            <br />
            Approach.
          </h2>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-[#a3a5aa]">
            A structured process to turn ideas into scalable solutions.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#FFC300] transition hover:gap-2.5"
          >
            Start a Project <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <ProcessSteps steps={STEPS} />
        </Reveal>
      </div>
    </section>
  )
}
