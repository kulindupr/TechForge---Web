import { ArrowRight, Calendar } from 'lucide-react'

// Placeholder posts — replace with real articles once published.
const posts = [
  {
    title: 'Why Every Small Business Needs a Website in 2026',
    date: 'Coming soon',
    excerpt: 'How a simple online presence turns walk-in customers into repeat customers.',
  },
  {
    title: 'ERP vs. POS: Which Does Your Business Actually Need?',
    date: 'Coming soon',
    excerpt: 'A practical guide to choosing the right business management system.',
  },
  {
    title: 'Getting Started with Statistical Analysis for Your Thesis',
    date: 'Coming soon',
    excerpt: 'A beginner-friendly walkthrough of IBM SPSS for academic research.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">From Our Blog</h2>
          <p className="mt-2 text-slate-400">Insights on technology, software and research.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-cyan-300">
              <Calendar className="h-3.5 w-3.5" />
              {p.date}
            </span>
            <h3 className="mt-3 text-base font-bold text-white">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
              Read More
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
