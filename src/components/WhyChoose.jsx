import Reveal from './Reveal'

const items = [
  {
    label: 'Innovative solutions',
    desc: 'Modern tools and fresh thinking on every project, not off-the-shelf templates.',
  },
  {
    label: 'Quality & reliability',
    desc: 'Tested, well-engineered software you can depend on, every time.',
  },
  {
    label: 'Customer focused',
    desc: 'We listen first, then build around what your business actually needs.',
  },
  {
    label: 'Confidentiality',
    desc: 'Your data and ideas stay protected, always.',
  },
  {
    label: 'Transparent pricing',
    desc: 'Honest quotes with no hidden costs, agreed before work begins.',
  },
  {
    label: 'Ongoing support',
    desc: 'We stay with you after launch, not just until delivery.',
  },
]

const stats = [
  { value: '2', label: 'Years experience' },
  { value: '5', label: 'Projects delivered' },
  { value: '3', label: 'Divisions' },
  { value: '100%', label: 'Client focused' },
]

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <Reveal className="max-w-2xl">
        <h2 className="font-brand text-3xl text-[#efece4] md:text-4xl">Why work with Aelin</h2>
        <p className="mt-2 text-base text-[#9497a1]">Your trusted partner in technology and innovation.</p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-px border-y border-[#24252b] bg-[#24252b] sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0b0c10] px-6 py-6">
            <p className="font-brand text-3xl text-[#efece4]">{s.value}</p>
            <p className="mt-1 text-sm text-[#9497a1]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {items.map(({ label, desc }) => (
          <div key={label} className="flex gap-4">
            <span className="mt-2 h-px w-5 flex-shrink-0 bg-[#b9922f]" />
            <div>
              <p className="text-base font-medium text-[#efece4]">{label}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#9497a1]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
