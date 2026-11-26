import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import logo from '../assets/logo-footer.webp'
import footerBg from '../assets/footer-bg.webp'

const DIVISION_LINKS = [
  { label: 'Digital', to: '/digital' },
  { label: 'Research', to: '/research' },
  { label: 'Innovation', to: '/innovation' },
]

const COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const RESOURCE_LINKS = [
  { label: 'Insights', to: '/insights' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 18.17h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.69-8.23 8.23-8.23a8.18 8.18 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.24 8.21z" />
  </svg>
)

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold text-[#f1efe9]">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[#a3a5aa]">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="transition hover:text-[#FFC300]">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-cover bg-bottom"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#090a0c]/75" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-shrink-0">
          <img src={logo} alt="Aelin Technologies" className="h-10 w-auto" />
          <p className="pl-4 text-xs uppercase tracking-[0.2em] text-[#a3a5aa]">
            Precision in Progress
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 sm:flex sm:gap-16">
          <FooterColumn title="Divisions" links={DIVISION_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
        </div>

        <div className="flex items-start gap-3 lg:items-start">
          {[
            { Icon: WhatsappIcon, href: 'https://wa.me/94782500075' },
            { Icon: Phone, href: 'tel:+94782500075' },
            { Icon: Mail, href: 'mailto:techforgesrilanka@gmail.com' },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#15181d] text-[#a3a5aa] transition hover:text-[#FFC300]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-5">
        <p className="mx-auto max-w-7xl text-xs text-[#a3a5aa]">
          © {new Date().getFullYear()} Aelin Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
