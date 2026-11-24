# AELIN Technologies — Phase 01 Audit

## 1. Stack (confirmed, not assumed)

- React 19.3 + Vite 6.4, `@vitejs/plugin-react`
- Styling: **Tailwind CSS v4** via `@tailwindcss/vite` — no `tailwind.config.js` exists; all theme tokens live in `src/index.css` under `@theme` (v4's CSS-first config). Do not add a v3-style config file.
- Routing: `react-router-dom` v7, lazy-loaded sub-pages via `React.lazy`
- SEO: `react-helmet-async`, a thin `SEO.jsx` wrapper per route
- Fonts: `@fontsource-variable/fraunces` (display) + system `Inter` (body) — already installed, no Google Fonts CDN
- No animation library installed. Current motion is hand-rolled: CSS transitions + a custom `Reveal.jsx` (IntersectionObserver, one fade/rise per section, respects `prefers-reduced-motion`). **Framer Motion is NOT installed** — the spec's "reuse Framer Motion if present" doesn't apply; adding it would be a new dependency and isn't justified by what's missing.
- `shadcn`/`class-variance-authority`/`cn` are installed (shadcn scaffolding) but **unused** — all buttons/components use hand-written Tailwind + two CSS classes (`.btn-gold`, `.btn-outline` in `index.css`), not shadcn primitives. `src/components/ui/button.jsx` exists and is dead code.
- Image pipeline: `sharp` (devDependency) used ad hoc for one-off conversions, not a build step.
- `ffmpeg-static` is a devDependency with no corresponding script — leftover from original hero-video production, not used at build/runtime.

## 2. Current routes (real, confirmed in `App.jsx`)

| Path | Component | Status |
|---|---|---|
| `/` | `pages/Home.jsx` | composed of section components (see §3) |
| `/solutions` | `pages/Solutions.jsx` | "Aelin Digital" services page, lazy-loaded |
| `/research-support` | `pages/ResearchSupport.jsx` | "Aelin Research" services page, lazy-loaded |

**No other routes exist.** There is no `/about`, `/projects`, `/innovation`, `/insights`, `/contact`, `/privacy`, `/terms` — these are all either homepage anchor sections (`#about`, `#projects`, `#contact`) or don't exist at all (Privacy/Terms are `href="#privacy"` / `href="#terms"` **dead anchor links with no target** — this is a real non-functional-link bug already present, not something the redesign introduces).

**Live SEO consequence:** `sitemap.xml` and `SEO.jsx`'s `SITE_URL` both point at `https://www.techforgelk.com`, and that domain is live and Search Console–verified (per earlier project history). `sitemap.xml` lists `/`, `/solutions`, `/research-support` only. If routes are renamed to `/digital`, `/research`, `/innovation` etc., the old URLs **will 404** unless old paths are kept as redirecting aliases. This needs an explicit decision (§6).

## 3. Homepage composition (`pages/Home.jsx`)

In order: `Hero → Divisions → Capabilities → WhyChoose → About → Projects → Testimonials → CTA`. `Blog` is imported but commented out (no real content — see §5).

All of this was already redesigned in the current session to the Obsidian/Ivory/Champagne-gold, Fraunces/Inter, hairline-divider system the new spec also asks for. **Much of Phase 02–04 of the new spec is already implemented**, not a blank slate:
- Color tokens (`--color-aelin-obsidian #0b0c10`, `--color-aelin-champagne #b9922f`, etc.) already in `index.css`, close to but not identical to the spec's requested hex values (`#090A0C` / `#C5A46D`). Needs reconciliation, not a rebuild.
- Flat `.btn-gold` / `.btn-outline` buttons, no gradients/glassmorphism, already in place.
- Hairline-divided editorial layouts (Divisions, WhyChoose stats, Projects list) already replace card-grid patterns.
- A bespoke hero visual (`PrecisionMark`, a custom SVG compass/grid with mouse-tilt) already replaces the old generic globe-video hero.
- A bento-style `Capabilities.jsx` section already exists (added last session, inspired by Linear/Stripe structural patterns).
- One restrained scroll-reveal (`Reveal.jsx`) already applied per section.

## 4. Navbar (`components/Navbar.jsx`)

- Links: Home / Services / Projects / About / Blog / Contact — all `href="#id"` anchors on the homepage, **not routes**. On `/solutions` or `/research-support` these anchors silently do nothing useful (no `#services` etc. exist on those pages) — a real bug the new IA must fix.
- "Services" has a `ChevronDown` icon but **no actual dropdown** — it's decorative only. This is exactly the kind of "nonfunctional UI" the spec prohibits, and it predates this redesign.
- Scroll-aware glass/blur state already implemented (`scrolled` state + backdrop-blur).
- Responsive breakpoint already fixed this session (was overflowing at 768px tablet width; now switches to the mobile menu at `lg`).
- Mobile menu: simple slide-down list, functional, closes on link click.

## 5. Content inventory — what's real vs. placeholder

| Section | Status |
|---|---|
| 3 divisions (Research/Digital/Innovation) | Real copy, confirmed against spec |
| Capabilities (SPSS, ERP/POS, AI, e-commerce) | Real, matches spec exactly |
| Projects (Leonara, Milan, EMR, NWN.lk, NEXOS) | Real projects, real stacks. No screenshots exist anywhere in the repo — current design uses abstract line-art, not fake screenshots (correct per spec's "never fabricate screenshots" rule) |
| Process ("How we work", 4 steps) | Exists on `/solutions` and `/research-support` individually, not on homepage as a unified "How AELIN works" |
| Stats (2 yrs / 5 projects / 3 divisions / 100%) | Real, unverifiable by me — carried over from existing content, not fabricated this session |
| Testimonials | 3 real testimonials with named clients; 2 have real photos, 1 (NWN.lk) has none — carousel is custom `useState`, functional prev/next |
| Founder section | Real name/role/bio/portfolio link, real photo |
| Blog/Insights | **No real content.** `Blog.jsx` exists with 3 "Coming soon" placeholder posts and is explicitly commented out of `Home.jsx`. No blog backend, no article pages. Per spec §12, this must NOT be populated with fictional articles — needs an honest empty/coming-soon state if surfaced as a page at all |
| Contact form | **Does not exist.** Contact is 3 destination links: WhatsApp (`wa.me/94782500075`), tel, mailto. No form, no backend. Spec says don't fabricate a form — confirmed, none will be added |
| Privacy / Terms pages | **Do not exist.** Footer links to `#privacy`/`#terms` go nowhere |

## 6. Assets

- `src/assets/cta-cityscape.webp` — **orphaned**, no longer referenced since the CTA section was redesigned to a flat panel this session. Safe to delete or repurpose.
- `founder.webp`, `testimonial-nethmini.webp`, `testimonial-milan.webp`, `logo-navbar.webp`, `logo-footer.webp` — all in active use.
- `public/video/hero.mp4` + `hero-poster.jpg` — **no longer referenced in code** (the hero video background was replaced by the `PrecisionMark` SVG this session) but the files and the `<link rel="preload" as="video">` in `index.html` are still present — dead preload hint, should be removed or the asset repurposed.
- `vite.svg` — unused default Vite asset, safe to delete.
- `public/favicon.svg`, `public/icons.svg` — present but not referenced by `index.html` (only `favicon.ico` is linked). Need to confirm if these are leftover or intentionally unused.

## 7. Breaking-change risks for the proposed new IA

The spec's proposed architecture (`/`, `/about`, `/research`, `/digital`, `/innovation`, `/projects`, `/insights`, `/contact`, `/privacy`, `/terms`) does not match what exists (`/`, `/solutions`, `/research-support`). To implement it without breaking the live, indexed site:

1. Keep `/solutions` and `/research-support` as working routes (redirect to the new paths, or keep them as the canonical paths and skip the rename) — **needs your decision**: rename with redirects, or keep current paths and just restyle?
2. `/about`, `/projects`, `/contact` would be **new pages extracted from existing homepage sections** (`About.jsx`, `Projects.jsx`, CTA's contact block) — this means either duplicating that content between homepage and dedicated pages, or turning the homepage sections into shortened teasers that link to the full pages. Spec doesn't say which; I'd default to **teaser-on-homepage + full page elsewhere**, consistent with how Divisions already teases Research/Digital/Innovation.
3. `/innovation` has **no existing page at all** — "Aelin Innovation" is currently just a homepage card with a `#contact` CTA (no SaaS/AI products are live yet). A full page here needs to avoid implying shipped products that don't exist (spec §9.3 explicitly warns against this).
4. `/insights` — building this page with no real articles violates spec §12 ("do not populate with fictional articles"). Recommend either omitting this route for now or shipping a minimal "coming soon" page.
5. `/privacy`, `/terms` — these don't exist in any form. Spec requires "preserve existing route or implement a proper route" — since none exists, these need real content written, not placeholder lorem ipsum, or the footer links should be removed rather than pointed at empty pages.

## 8. Design system reconciliation

The spec gives a slightly different palette than what's already implemented:

| Token | Spec | Current |
|---|---|---|
| Primary bg | `#090A0C` | `#0b0c10` |
| Elevated surface | `#15181D` | `#111218` / `#14151b` (inconsistent across components) |
| Primary text | `#F1EFE9` | `#efece4` |
| Accent | `#C5A46D` | `#b9922f` |
| Accent hover | `#D7B982` | not defined as a separate hover token |

Close enough to be a reconciliation, not a rebuild — I'd adopt the spec's exact hex values as the new single source of truth and sweep all components to match, rather than keep two near-identical palettes.

Typography: spec asks for Sora or an editorial serif for display + Inter body + IBM Plex Mono for technical labels. Current uses **Fraunces** (editorial serif, already installed) for display + Inter for body — matches spec's intent already. Technical labels (hero coordinates `N 06.9271`) already use `font-family: monospace` inline, not an installed mono font — could formalize as IBM Plex Mono if that typeface's exact look is wanted.

## 9. Files reusable as-is vs. need rework

**Reusable, minor tweaks only:** `Navbar.jsx` (add real dropdown + fix route-vs-anchor links), `Footer.jsx`, `Hero.jsx`, `Divisions.jsx`, `Capabilities.jsx`, `WhyChoose.jsx`, `About.jsx`, `Projects.jsx`, `Testimonials.jsx`, `CTA.jsx`, `Reveal.jsx`, `index.css` tokens.

**Need real rework for the new IA:** `App.jsx` (routing), `Solutions.jsx`/`ResearchSupport.jsx` (rename/restyle to match current design system exactly — they were updated for colors already but should be re-checked against final token values), new files needed for `/about`, `/innovation`, `/projects`, `/contact`, and optionally `/insights`, `/privacy`, `/terms`.

**Dead code to remove:** `src/components/ui/button.jsx` (unused shadcn button), `src/components/Blog.jsx` (unless a real "coming soon" page is wanted), `src/assets/cta-cityscape.webp`, `public/video/*` + its preload tag (unless hero video is coming back), `src/assets/vite.svg`.

---

## Open decisions before Phase 02 starts

1. **Routing**: rename `/solutions`→`/digital` and `/research-support`→`/research` with redirects (SEO-safe), or keep the current paths and just reskin? Renaming is more "correct" for the new IA but is the one genuinely risky move here (live, indexed URLs).
2. **New pages with no real content yet** (`/innovation`, `/insights`, `/privacy`, `/terms`): build honest minimal versions now, or skip them until real content exists?
3. **Palette**: adopt the spec's exact hex values (§8 table) as the new single source of truth?

Tell me how you want these three resolved and I'll move into Phase 02 (design system file + token sweep) and Phase 03 (navbar/footer rework) right away.
