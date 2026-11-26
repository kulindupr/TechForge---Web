import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import IconCard from '../components/IconCard'
import ProcessSteps from '../components/ProcessSteps'
import CTA from '../components/CTA'
import heroBg from '../assets/hero-bg.webp'
import {
  ArrowLeft,
  Globe,
  Layout,
  ShoppingCart,
  Smartphone,
  LayoutDashboard,
  Boxes,
  CreditCard,
  Briefcase,
  Cloud,
  Settings2,
  Wrench,
  MessageSquare,
  PenTool,
  Settings,
  Rocket,
  Sparkles,
  LifeBuoy,
  Users,
  Zap,
} from 'lucide-react'

const solutions = [
  { title: 'Static & business websites', desc: 'Fast, responsive websites that showcase your business and turn visitors into customers.', Icon: Globe },
  { title: 'WordPress development', desc: 'Custom WordPress sites and themes that are easy for you to manage and update.', Icon: Layout },
  { title: 'E-commerce platforms', desc: 'Full online stores with catalog, cart, payments and order management built in.', Icon: ShoppingCart },
  { title: 'Mobile app development', desc: 'Android & iOS apps that bring your service directly into your customers’ pockets.', Icon: Smartphone },
  { title: 'Web applications', desc: 'Custom dashboards, portals and internal tools built around your workflow.', Icon: LayoutDashboard },
  { title: 'ERP systems', desc: 'Integrated enterprise resource planning to unify inventory, staff, finance and ops.', Icon: Boxes },
  { title: 'POS systems', desc: 'Point-of-sale software for retail, salons and restaurants — pricing, billing, receipts.', Icon: CreditCard },
  { title: 'Portfolio websites', desc: 'Clean, personal portfolio sites for professionals, freelancers and creatives.', Icon: Briefcase },
  { title: 'IoT & cloud solutions', desc: 'Connected devices and cloud infrastructure that scale as your business grows.', Icon: Cloud },
  { title: 'Business management systems', desc: 'Custom software to manage appointments, staff, customers and daily operations.', Icon: Settings2 },
  { title: 'Maintenance & support', desc: 'Ongoing updates, hosting support and bug fixes to keep your software running smoothly.', Icon: Wrench },
]

const process = [
  { number: '01', title: 'Discovery', desc: 'We learn your business and the problem you need solved.', Icon: MessageSquare },
  { number: '02', title: 'Design & plan', desc: 'We map out the solution, timeline and technology.', Icon: PenTool },
  { number: '03', title: 'Build', desc: 'We develop and test your software in regular check-ins.', Icon: Settings },
  { number: '04', title: 'Launch & support', desc: 'We deploy your solution and support you after launch.', Icon: Rocket },
]

const benefits = [
  { title: 'Transparent pricing', desc: 'Honest quotes with no hidden costs, agreed before work begins.', Icon: Zap },
  { title: 'Dedicated support', desc: "We stay with you after launch, not just until delivery.", Icon: LifeBuoy },
  { title: 'Customer focused', desc: 'We listen first, then build around what your business actually needs.', Icon: Users },
  { title: 'Modern technology', desc: 'Modern tools and fresh thinking on every project, not off-the-shelf templates.', Icon: Sparkles },
]

export default function Digital() {
  return (
    <div className="pt-28">
      <SEO
        title="Aelin Digital — Software & Digital Solutions"
        description="Websites, e-commerce, mobile apps, ERP, POS and custom business software built by Aelin Technologies for businesses in Sri Lanka."
        path="/digital"
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
                Aelin Digital
              </span>
              <h1 className="font-brand mt-4 max-w-xl text-3xl leading-tight text-[#f1efe9] md:text-5xl">
                Full-scope business software, built around you
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#a3a5aa]">
                From a first website to a full enterprise system, Aelin Technologies designs,
                builds and supports the software your business runs on.
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
              Our Solutions
            </span>
            <h2 className="font-brand mt-4 text-3xl leading-tight text-[#f1efe9] md:text-4xl">
              What We Build.
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
              A Strategic Approach.
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
              Why Choose Aelin For Your Software.
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
