import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-28">
      <SEO
        title="Terms of Service — Aelin Technologies"
        description="Terms governing the use of the Aelin Technologies website."
        path="/terms"
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
      <h1 className="font-brand mt-4 text-4xl text-[#f1efe9]">Terms of Service</h1>
      <p className="mt-2 text-sm text-[#777b83]">Last updated: 2026</p>

      <div className="mt-10 space-y-8 border-t border-white/10 pt-10 text-sm leading-relaxed text-[#a3a5aa]">
        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Scope</h2>
          <p className="mt-2">
            These terms cover use of this website only (techforgelk.com). They do not
            cover the terms of any software development, research-support or consulting
            engagement — those are agreed separately, in writing, before work begins on a
            specific project.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Website content</h2>
          <p className="mt-2">
            The text, layout, graphics and branding on this website belong to Aelin
            Technologies unless otherwise noted. Project names, client names and testimonials
            shown on this site belong to their respective owners and are shown with
            permission.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">No warranty on website content</h2>
          <p className="mt-2">
            This website is provided as general information about Aelin Technologies and its
            work. We try to keep it accurate and up to date, but we make no guarantee that
            every detail is current, and nothing on this site is a binding quote or contract
            on its own.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">External links and services</h2>
          <p className="mt-2">
            Links to WhatsApp, email or external project URLs (including client portfolio
            links) take you to services we don't control. We aren't responsible for the
            content, availability or policies of those external services.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Acceptable use</h2>
          <p className="mt-2">
            Please don't attempt to disrupt this website, scrape it at scale, or use it in a
            way that could harm Aelin Technologies or other visitors.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Changes</h2>
          <p className="mt-2">
            We may update these terms as the website changes. Continued use of the site
            after an update means you accept the current version.
          </p>
        </section>

        <section>
          <h2 className="font-brand text-lg text-[#f1efe9]">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{' '}
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
