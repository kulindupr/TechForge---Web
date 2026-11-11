import { Rocket, ShieldCheck, Users, Lock, Zap, Headphones } from 'lucide-react'

const items = [
  {
    icon: Rocket,
    label: 'Innovative Solutions',
    desc: 'We bring modern tools and fresh thinking to every project, not off-the-shelf templates.',
  },
  {
    icon: ShieldCheck,
    label: 'Quality & Reliability',
    desc: 'Tested, well-engineered software you can depend on, every time.',
  },
  {
    icon: Users,
    label: 'Customer Focused',
    desc: 'We listen first, then build around what your business actually needs.',
  },
  {
    icon: Lock,
    label: 'Confidentiality',
    desc: 'Your data and ideas stay protected, always.',
  },
  {
    icon: Zap,
    label: 'Affordable Services',
    desc: 'Honest, transparent pricing with no hidden costs.',
  },
  {
    icon: Headphones,
    label: 'Ongoing Support',
    desc: 'We stay with you after launch, not just until delivery.',
  },
]

const stats = [
  { value: '2', label: 'Years Experience' },
  { value: '5', label: 'Projects Delivered' },
  { value: '2', label: 'Business Divisions' },
  { value: '100%', label: 'Client Focused' },
]

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Why Choose Tech Forge?</h2>
        <p className="mt-2 text-slate-400">Your trusted partner in technology and innovation.</p>
      </div>

      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
          >
            <p className="text-2xl font-extrabold text-cyan-400 md:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs font-semibold text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-7 transition hover:border-cyan-400/30"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
              <Icon className="h-6 w-6" />
            </span>
            <span className="text-base font-semibold text-slate-100">{label}</span>
            <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
