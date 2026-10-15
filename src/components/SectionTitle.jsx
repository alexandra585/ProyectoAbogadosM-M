export default function SectionTitle({ kicker, title, text, center = true, light = false }) {
  return (<div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    {kicker && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{kicker}</p>}
    <h2 className={`text-3xl md:text-4xl font-semibold ${light ? '!text-white' : ''}`}>{title}</h2>
    <div className={`mt-3 h-0.5 w-14 bg-gold ${center ? 'mx-auto' : ''}`} />
    {text && <p className="mt-4 leading-relaxed text-slate-500">{text}</p>}
  </div>)
}
