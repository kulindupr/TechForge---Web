import { Send, ArrowRight, Phone } from 'lucide-react'
import cityscape from '../assets/cta-cityscape.webp'

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 18.17h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.69-8.23 8.23-8.23a8.18 8.18 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.24 8.21z" />
  </svg>
)

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img
        src={cityscape}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-fuchsia-600/40" />
      <div className="absolute inset-0 bg-[#04080f]/50" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
            <Send className="h-5 w-5 text-white" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-white">Let's Build Something Great Together</h2>
            <p className="mt-1 text-sm text-slate-200">
              Get in touch with us for your next project or consultation.
            </p>
          </div>
        </div>

        <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/94782500075"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn glow-cyan inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#06101f] transition hover:brightness-95"
          >
            <WhatsappIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="tel:+94782500075"
            className="glass-btn glow-white inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
          <a
            href="mailto:techforgesrilanka@gmail.com"
            className="glass-btn glow-white inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#06101f] transition hover:brightness-95"
          >
            Email Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
