# AELIN Design System v1

Single source of truth for color, type, spacing, components. Implemented as CSS custom properties / Tailwind v4 `@theme` tokens in `src/index.css` — no separate `tailwind.config.js` (v4 CSS-first config).

## Color

| Token | Hex | CSS var | Use |
|---|---|---|---|
| Obsidian | `#090A0C` | `--color-aelin-obsidian` | Primary background |
| Elevated surface | `#15181D` | `--color-aelin-surface` | Cards, panels, bento tiles |
| Ivory | `#F1EFE9` | `--color-aelin-ivory` | Primary text, headings |
| Secondary text | `#A3A5AA` | `--color-aelin-platinum` | Body copy |
| Muted text | `#777B83` | `--color-aelin-slate` | Captions, labels, timestamps |
| Champagne gold | `#FFC300` | `--color-aelin-champagne` | Accent — links, icons, active states, primary button fill |
| Gold hover | `#FFD54D` | `--color-aelin-gold-hover` | Hover state only |
| Subtle border | `rgba(255,255,255,0.10)` | `--color-aelin-border` | Hairlines, dividers |
| Accent border | `rgba(197,164,109,0.35)` | `--color-aelin-border-accent` | Emphasized hairlines |

Rules: gold marks importance, never decoration. No heading is gold by default — only interactive/accent elements (links, icon strokes, active nav state, button fill). No gradients beyond the existing restrained radial glow behind the hero mark. No glassmorphism, no neon.

## Typography

- Display: **Fraunces** (variable, already installed) — headings only.
- Body/UI: **Inter** (system default already wired as `--font-sans`).
- Technical labels (hero coordinates, data annotations): `monospace` stack — no new font added; IBM Plex Mono would be a new dependency for a handful of short labels and isn't justified.

Scale (desktop → mobile via Tailwind responsive classes, not `clamp()` — consistent with how every existing page already sets `text-5xl md:text-6xl` etc.):

| Element | Desktop | Mobile |
|---|---|---|
| Hero heading | 72px (`text-7xl`) | 48px (`text-5xl`) |
| Page heading (`/digital`, `/research`, `/innovation`) | 56px (`text-5xl`) | 36px (`text-4xl`) |
| Section heading | 36–40px (`text-4xl`) | 30px (`text-3xl`) |
| Card/subsection heading | 20–24px (`text-lg`/`text-xl`) | same |
| Body | 16–18px (`text-base`/`text-lg`) | same |
| Supporting text | 14px (`text-sm`) | same |
| Technical label | 11–12px (`text-xs`, monospace) | same |

## Layout

- Max content width: `max-w-7xl` (1280px) — already consistent across every section/page, kept as-is rather than widened to 1440px, to avoid re-tuning every existing component's internal spacing for a marginal gain.
- Page horizontal padding: `px-6` (24px) mobile, same at all breakpoints — already consistent.
- Section vertical rhythm: `py-20` standard section, `pt-36 md:pt-44` under the fixed nav for first section on a page.

## Surfaces & borders

- Corner radius: `rounded-lg`/`rounded-xl` only on bento tiles and project rows — no radius on hairline-divided editorial lists (Divisions, WhyChoose items, Projects list).
- Borders: 1px hairlines (`border-[var(--color-aelin-border)]`) between list rows and around bento tiles. No shadows.
- No glassmorphism/backdrop-blur except the navbar's scroll state (functional — legibility over a transparent/scrolling hero, not decorative).

## Components

- `.btn-gold` — flat `#FFC300` fill, `#090A0C` text, 3px radius, hover → `#FFD54D`. Primary action only, one per view.
- `.btn-outline` — 1px border, ivory text, hover brightens border — secondary action.
- Text links — ivory text with a thin underline/border-bottom, hover → gold. Used for "Explore Research" / "Explore Digital" / tertiary CTAs instead of a second button style.
- Bento tiles (`Capabilities.jsx`) — `#15181D` surface, 1px border, abstract line-art visuals (sparkline/dot-matrix/bars) in gold — no stock imagery, no icon-in-colored-box pattern.

## Motion

- One `Reveal` (fade + 16px rise, IntersectionObserver, fires once, `prefers-reduced-motion` short-circuits to visible) per section intro — already implemented, kept as the only scroll-animation pattern sitewide.
- Hero mark: subtle mouse-parallax tilt (desktop only, CSS transform, disabled under reduced-motion) — already implemented.
- No page-transition library added (no React Router page-transition wrapper) — not justified by the scope of this change; would add complexity disproportionate to a mostly-static marketing site.

## What this replaces

Prior to this pass, components used a mix of `#0b0c10`/`#101216`/`#111218`/`#14151b`/`#17181c` for backgrounds and `#b9922f`/`#d9b26a` for gold — all close to, but not identical to, the palette above. This document is the reconciliation: every component is being swept to the exact hex values here.
