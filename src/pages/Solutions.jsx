import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  ShoppingCart,
  Smartphone,
  LayoutDashboard,
  Database,
  Cloud,
  Workflow,
  Palette,
  BarChart3,
  ShieldCheck,
  Check,
} from 'lucide-react'

const solutions = [
  {
    icon: Globe,
    gradient: 'from-cyan-400 to-blue-500',
    title: 'Static & Business Websites',
    desc: 'Fast, responsive websites that showcase your business and turn visitors into customers.',
  },
  {
    icon: Palette,
    gradient: 'from-fuchsia-500 to-purple-600',
    title: 'WordPress Development',
    desc: 'Custom WordPress sites and themes that are easy for you to manage and update.',
  },
  {
    icon: ShoppingCart,
    gradient: 'from-emerald-400 to-teal-500',
    title: 'E-Commerce Platforms',
    desc: 'Full online stores with catalog, cart, payments and order management built in.',
  },
  {
    icon: Smartphone,
    gradient: 'from-orange-400 to-amber-500',
    title: 'Mobile App Development',
    desc: 'Android & iOS apps that bring your service directly into your customers\' pockets.',
  },
  {
    icon: LayoutDashboard,
    gradient: 'from-blue-500 to-indigo-600',
    title: 'Web Applications',
    desc: 'Custom dashboards, portals and internal tools built around your workflow.',
  },
  {
    icon: Database,
    gradient: 'from-rose-500 to-pink-600',
    title: 'ERP Systems',
    desc: 'Integrated enterprise resource planning to unify inventory, staff, finance and ops.',
  },
  {
    icon: Workflow,
    gradient: 'from-cyan-400 to-sky-500',
    title: 'POS Systems',
    desc: 'Point-of-sale software for retail, salons and restaurants — pricing, billing, receipts.',
  },
  {
    icon: Palette,
    gradient: 'from-purple-500 to-fuchsia-500',
    title: 'Portfolio Websites',
    desc: 'Clean, personal portfolio sites for professionals, freelancers and creatives.',
  },
  {
    icon: Cloud,
    gradient: 'from-teal-400 to-emerald-500',
    title: 'IoT & Cloud Solutions',
    desc: 'Connected devices and cloud infrastructure that scale as your business grows.',
  },
  {
    icon: BarChart3,
    gradient: 'from-amber-400 to-orange-500',
    title: 'Business Management Systems',
    desc: 'Custom software to manage appointments, staff, customers and daily operations.',
  },
  {
    icon: ShieldCheck,
    gradient: 'from-indigo-500 to-blue-600',
    title: 'Maintenance & Support',
    desc: 'Ongoing updates, hosting support and bug fixes to keep your software running smoothly.',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn your business and the problem you need solved.' },
  { step: '02', title: 'Design & Plan', desc: 'We map out the solution, timeline and technology.' },
  { step: '03', title: 'Build', desc: 'We develop and test your software in regular check-ins.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy your solution and support you after launch.' },
]

export default function Solutions() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="mt-8 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          — Software & Digital Solutions —
        </span>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Full-Scope Business Software, Built Around You
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          From a first website to a full enterprise system, Tech Forge designs, builds
          and supports the software your business runs on.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
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
              <span className="text-3xl font-extrabold text-cyan-400/50">{p.step}</span>
              <h3 className="mt-3 text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-8">
        <h2 className="text-xl font-bold text-white">Why Choose Tech Forge for Your Software</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            'Affordable, transparent pricing',
            'Dedicated support after launch',
            'Solutions tailored to your business',
            'Modern, reliable technology',
          ].map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-slate-200">
              <Check className="h-4 w-4 flex-shrink-0 text-cyan-400" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <h2 className="text-2xl font-bold text-white">Ready to start your project?</h2>
        <p className="max-w-md text-sm text-slate-400">
          Tell us about your business and we'll recommend the right solution.
        </p>
        <Link
          to="/#contact"
          className="glass-btn glow-cyan inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-[#06101f] transition hover:brightness-110"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
