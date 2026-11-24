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
      <h2 className="font-brand text-3xl text-[#efece4] md:text-4xl">From the journal</h2>
      <p className="mt-2 text-base text-[#9497a1]">Notes on technology, software and research.</p>

      <div className="mt-10 border-t border-[#24252b]">
        {posts.map((p) => (
          <div key={p.title} className="grid gap-2 border-b border-[#24252b] py-7 md:grid-cols-[120px_1fr]">
            <span className="text-sm text-[#6b6e76]">{p.date}</span>
            <div>
              <h3 className="font-brand text-lg text-[#efece4]">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#9497a1]">{p.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
