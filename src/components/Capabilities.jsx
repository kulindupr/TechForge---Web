import Reveal from './Reveal'

function Sparkline() {
  return (
    <svg viewBox="0 0 200 60" className="h-full w-full" aria-hidden="true">
      <polyline
        points="0,45 25,38 50,42 75,20 100,28 125,12 150,18 175,6 200,10"
        fill="none"
        stroke="#c5a46d"
        strokeWidth="1.5"
      />
      {[0, 25, 50, 75, 100, 125, 150, 175, 200].map((x, i) => (
        <circle key={x} cx={x} cy={[45, 38, 42, 20, 28, 12, 18, 6, 10][i]} r="2" fill="#c5a46d" />
      ))}
    </svg>
  )
}

function DotMatrix() {
  const dots = Array.from({ length: 48 })
  return (
    <div className="grid grid-cols-12 gap-1.5">
      {dots.map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: i % 5 === 0 ? '#c5a46d' : '#2c2d34' }}
        />
      ))}
    </div>
  )
}

function Bars() {
  const heights = [40, 65, 30, 80, 50, 70, 35]
  return (
    <div className="flex h-full items-end gap-2">
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-full rounded-sm"
          style={{ height: `${h}%`, background: i === 3 ? '#c5a46d' : '#2c2d34' }}
        />
      ))}
    </div>
  )
}

export default function Capabilities() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <Reveal>
        <h2 className="font-brand text-3xl text-[#f1efe9] md:text-4xl">What that looks like in practice</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#a3a5aa]">
          A sample of the concrete work behind the three divisions.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-[#15181d] p-6 lg:col-span-2 lg:row-span-2">
          <div>
            <h3 className="font-brand text-xl text-[#f1efe9]">Statistical analysis &amp; SPSS</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#a3a5aa]">
              Hypothesis testing, data cleaning and interpretation turned into clear, defensible
              findings for theses and research papers.
            </p>
          </div>
          <div className="h-28">
            <Sparkline />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-[#15181d] p-6 lg:col-span-2">
          <div>
            <h3 className="font-brand text-lg text-[#f1efe9]">Custom ERP &amp; POS systems</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">
              Inventory, staff, finance and billing unified into one system built around how the
              business actually runs.
            </p>
          </div>
          <div className="h-16">
            <Bars />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 rounded-xl border border-white/10 bg-[#15181d] p-6">
          <div>
            <h3 className="font-brand text-lg text-[#f1efe9]">AI-powered features</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">
              RAG chatbots and applied AI integrated into existing products.
            </p>
          </div>
          <DotMatrix />
        </div>

        <div className="flex flex-col justify-between gap-5 rounded-xl border border-white/10 bg-[#15181d] p-6">
          <div>
            <h3 className="font-brand text-lg text-[#f1efe9]">E-commerce &amp; web platforms</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">
              Catalog, cart, payments and order management, built to scale.
            </p>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="h-6 flex-1 rounded-sm"
                style={{ background: i === 7 ? '#c5a46d' : '#2c2d34' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
