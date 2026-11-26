import { Sparkles, ShieldCheck, Users, Lock, Receipt, LifeBuoy } from 'lucide-react'
import Reveal from './Reveal'
import IconCard from './IconCard'

const items = [
  {
    label: 'Innovative solutions',
    desc: 'Modern tools and fresh thinking on every project, not off-the-shelf templates.',
    Icon: Sparkles,
  },
  {
    label: 'Quality & reliability',
    desc: 'Tested, well-engineered software you can depend on, every time.',
    Icon: ShieldCheck,
  },
  {
    label: 'Customer focused',
    desc: 'We listen first, then build around what your business actually needs.',
    Icon: Users,
  },
  {
    label: 'Confidentiality',
    desc: 'Your data and ideas stay protected, always.',
    Icon: Lock,
  },
  {
    label: 'Transparent pricing',
    desc: 'Honest quotes with no hidden costs, agreed before work begins.',
    Icon: Receipt,
  },
  {
    label: 'Ongoing support',
    desc: 'We stay with you after launch, not just until delivery.',
    Icon: LifeBuoy,
  },
]

const stats = [
  { value: '2', label: 'Years experience' },
  { value: '5', label: 'Projects delivered' },
  { value: '3', label: 'Divisions' },
  { value: '100%', label: 'Client focused' },
]

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <Reveal className="max-w-xl">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
          Why Aelin
        </span>
        <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
          Why Work With
          <br />
          Aelin.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#a3a5aa]">
          Your trusted partner in technology and innovation.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#15181d] px-6 py-6">
              <p className="font-brand text-3xl text-[#FFC300]">{s.value}</p>
              <p className="mt-1 text-sm text-[#a3a5aa]">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ label, desc, Icon }, i) => (
          <Reveal key={label} delay={150 + i * 60}>
            <IconCard Icon={Icon} title={label} desc={desc} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
