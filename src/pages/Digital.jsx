import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ArrowLeft, Check } from 'lucide-react'

const solutions = [
  { title: 'Static & business websites', desc: 'Fast, responsive websites that showcase your business and turn visitors into customers.' },
  { title: 'WordPress development', desc: 'Custom WordPress sites and themes that are easy for you to manage and update.' },
  { title: 'E-commerce platforms', desc: 'Full online stores with catalog, cart, payments and order management built in.' },
  { title: 'Mobile app development', desc: 'Android & iOS apps that bring your service directly into your customers’ pockets.' },
  { title: 'Web applications', desc: 'Custom dashboards, portals and internal tools built around your workflow.' },
  { title: 'ERP systems', desc: 'Integrated enterprise resource planning to unify inventory, staff, finance and ops.' },
  { title: 'POS systems', desc: 'Point-of-sale software for retail, salons and restaurants — pricing, billing, receipts.' },
  { title: 'Portfolio websites', desc: 'Clean, personal portfolio sites for professionals, freelancers and creatives.' },
  { title: 'IoT & cloud solutions', desc: 'Connected devices and cloud infrastructure that scale as your business grows.' },
  { title: 'Business management systems', desc: 'Custom software to manage appointments, staff, customers and daily operations.' },
  { title: 'Maintenance & support', desc: 'Ongoing updates, hosting support and bug fixes to keep your software running smoothly.' },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn your business and the problem you need solved.' },
  { step: '02', title: 'Design & plan', desc: 'We map out the solution, timeline and technology.' },
  { step: '03', title: 'Build', desc: 'We develop and test your software in regular check-ins.' },
  { step: '04', title: 'Launch & support', desc: 'We deploy your solution and support you after launch.' },
]

export default function Digital() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
      <SEO
        title="Aelin Digital — Software & Digital Solutions"
        description="Websites, e-commerce, mobile apps, ERP, POS and custom business software built by Aelin Technologies for businesses in Sri Lanka."
        path="/digital"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#c5a46d]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <div className="mt-8 max-w-2xl">
        <h1 className="font-brand text-4xl text-[#f1efe9] md:text-5xl">
          Full-scope business software, built around you
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#a3a5aa]">
          From a first website to a full enterprise system, Aelin Technologies designs,
          builds and supports the software your business runs on.
        </p>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <div key={s.title}>
            <h3 className="font-brand text-lg text-[#f1efe9]">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="font-brand text-2xl text-[#f1efe9] md:text-3xl">How we work</h2>
        <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step}>
              <span className="font-brand text-sm text-[#777b83]">{p.step}</span>
              <h3 className="font-brand mt-2 text-base text-[#f1efe9]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-white/10 pt-10">
        <h2 className="font-brand text-xl text-[#f1efe9]">Why choose Aelin for your software</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            'Affordable, transparent pricing',
            'Dedicated support after launch',
            'Solutions tailored to your business',
            'Modern, reliable technology',
          ].map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-[#a3a5aa]">
              <Check className="h-4 w-4 flex-shrink-0 text-[#c5a46d]" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 flex flex-col items-start gap-4 border-t border-white/10 pt-10">
        <h2 className="font-brand text-2xl text-[#f1efe9]">Ready to start your project?</h2>
        <p className="max-w-md text-sm text-[#a3a5aa]">
          Tell us about your business and we'll recommend the right solution.
        </p>
        <Link to="/contact" className="btn-gold inline-block px-6 py-3 text-sm font-medium">
          Get in touch
        </Link>
      </div>
    </div>
  )
}
