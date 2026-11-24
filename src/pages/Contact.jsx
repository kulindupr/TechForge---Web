import { Link } from 'react-router-dom'
import { ArrowLeft, Phone, Mail } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 18.17h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.69-8.23 8.23-8.23a8.18 8.18 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.24 8.21z" />
  </svg>
)

const CHANNELS = [
  {
    label: 'WhatsApp',
    value: '+94 78 250 0075',
    href: 'https://wa.me/94782500075',
    Icon: WhatsappIcon,
    accent: 'bg-[#25D366] text-[#090a0c]',
  },
  {
    label: 'Phone',
    value: '+94 78 250 0075',
    href: 'tel:+94782500075',
    Icon: Phone,
    accent: 'border border-white/18 text-[#f1efe9]',
  },
  {
    label: 'Email',
    value: 'techforgesrilanka@gmail.com',
    href: 'mailto:techforgesrilanka@gmail.com',
    Icon: Mail,
    accent: 'bg-[#c5a46d] text-[#090a0c]',
  },
]

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-28">
      <SEO
        title="Contact — Aelin Technologies"
        description="Get in touch with Aelin Technologies by WhatsApp, phone or email for your next project or consultation."
        path="/contact"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#c5a46d]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <Reveal>
        <h1 className="font-brand mt-8 text-4xl text-[#f1efe9]">Let's build something great together</h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#a3a5aa]">
          Reach out for your next project or consultation via WhatsApp, phone or email.
        </p>
      </Reveal>

      <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
        {CHANNELS.map(({ label, value, href, Icon, accent }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-4 py-5 transition hover:opacity-90"
          >
            <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[3px] ${accent}`}>
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.15em] text-[#777b83]">{label}</span>
              <span className="block text-base text-[#f1efe9]">{value}</span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-[#777b83]">
        We're a Sri Lanka-based team working with clients across all three divisions —
        Aelin Research, Aelin Digital and Aelin Innovation.
      </p>
    </div>
  )
}
