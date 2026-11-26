export default function ProcessSteps({ steps }) {
  return (
    <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <div
        className="pointer-events-none absolute inset-x-0 top-4 hidden h-px bg-white/10 lg:block"
        aria-hidden="true"
      />
      {steps.map(({ number, title, desc, Icon }) => (
        <div key={number} className="relative">
          <div className="flex items-center gap-3 lg:block">
            <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#FFC300] bg-[#090a0c] font-brand text-xs text-[#FFC300]">
              {number}
            </span>
            <Icon className="h-5 w-5 flex-shrink-0 text-[#FFC300] lg:mt-4" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 className="font-brand mt-3 text-lg text-[#f1efe9]">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#a3a5aa]">{desc}</p>
        </div>
      ))}
    </div>
  )
}
