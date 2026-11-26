export default function IconCard({ Icon, title, desc }) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-[#15181d] p-6">
      <Icon className="h-6 w-6 text-[#FFC300]" strokeWidth={1.75} aria-hidden="true" />
      <p className="font-brand mt-4 text-lg text-[#f1efe9]">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-[#a3a5aa]">{desc}</p>
    </div>
  )
}
