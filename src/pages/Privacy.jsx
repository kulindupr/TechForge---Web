import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-28">
      <SEO
        title="Privacy Policy — Aelin Technologies"
        description="How Aelin Technologies handles information on this website."
        path="/privacy"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#a3a5aa] transition hover:text-[#FFC300]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <span className="mt-8 block text-xs font-medium uppercase tracking-[0.25em] text-[#FFC300]">
        Legal
      </span>
      <h1 className="font-brand mt-4 text-4xl text-[#f1efe9]">Privacy Policy</h1>
      <p className="mt-2 text-sm text-[#777b83]">Last updated: 2026</p>

      <div className="mt-10 space-y-8 border-t border-white/10 pt-10 text-sm leading-relaxed text-[#a3a5aa]">
        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">What this website collects</h2>
          <p className="mt-2">
            This website does not use cookies, analytics scripts or tracking pixels, and it
            does not contain a contact form. We do not collect, store or process any
            personal information through this website directly.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Contacting us</h2>
          <p className="mt-2">
            The "Contact" links on this site (WhatsApp, phone, email) hand you off directly
            to WhatsApp, your device's dialer, or your email client. Any message you send
            that way is handled by that service and, on our side, by whichever of our own
            email or WhatsApp accounts you contacted — governed by WhatsApp's and your
            email provider's own privacy policies, not this one.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Hosting and technical logs</h2>
          <p className="mt-2">
            Like any hosted website, our hosting provider may automatically log standard
            technical information (such as IP address, browser type and request times) for
            security, abuse prevention and performance monitoring. We do not use this data
            for marketing or combine it with any other information about you.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Client engagements</h2>
          <p className="mt-2">
            If you become a client, any project-related data you share with us (requirements
            documents, research data, credentials, etc.) is handled under the confidentiality
            terms agreed separately for that engagement, not under this website privacy
            policy.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Changes to this policy</h2>
          <p className="mt-2">
            If what this website collects changes — for example, if a contact form or
            analytics is added later — this page will be updated to reflect that before the
            change takes effect.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{' '}
            <a href="mailto:techforgesrilanka@gmail.com" className="text-[#FFC300] hover:text-[#FFD54D]">
              techforgesrilanka@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
