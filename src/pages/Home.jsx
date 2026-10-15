import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Phone, Star, BadgeCheck, Scale, ShieldCheck } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { PILLARS, SERVICES, TESTIMONIALS, SITE } from '../config/site'

export default function Home() {
  return (<>
    <SEO title="Defensa Legal Sólida y Comprometida en Lima" description="Estudio jurídico especialista en Derecho Penal y de Familia. Atención de emergencias 24/7 en Lima, Perú." />
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">Firma jurídica multidisciplinaria · Lima, Perú</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight !text-white md:text-6xl">Defensa Legal Sólida y <em className="text-gold">Comprometida</em> en Lima</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">Expertos en Derecho Penal y Familia, ofreciendo soluciones jurídicas contundentes y patrocinio legal implacable ante todas las instancias judiciales del país.</p>
          <div className="mt-8 flex gap-8 font-serif">
            {[['+15', 'Años de trayectoria'], ['98%', 'Resoluciones clave'], ['24/7', 'Disponibilidad penal']].map(([v, l]) => (
              <div key={l}><div className="text-3xl text-gold">{v}</div><div className="font-sans text-[11px] uppercase tracking-wider text-slate-400">{l}</div></div>))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/contacto" className="btn-gold">Agendar consulta inmediata <ArrowRight size={16} /></Link>
            <Link to="/especialidades" className="btn-ghost">Ver práctica jurídica</Link>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="lg:col-span-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-8 text-center shadow-2xl">
            <img src="/logo.png" alt="Sello M&M" className="mx-auto h-32 w-32 rounded-lg object-cover" />
            <h2 className="mt-5 text-2xl !text-gold">Magallanes – Montero</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Abogados & Asociados</p>
            <ul className="mt-6 space-y-2 rounded bg-white/5 p-4 text-left text-sm">
              <li className="flex gap-2"><BadgeCheck size={16} className="text-gold" />Colegiatura Oficial Vigente · CAL</li>
              <li className="flex gap-2"><Scale size={16} className="text-gold" />Tribunales y Salas Penales de Lima</li>
              <li className="flex gap-2"><ShieldCheck size={16} className="text-gold" />Protección Integral de Patrimonio</li>
            </ul>
            <a href={`tel:+${SITE.phoneRaw}`} className="mt-4 block rounded bg-white/10 py-2 text-xs font-semibold uppercase tracking-wider text-gold hover:bg-white/20">Línea directa: {SITE.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-white py-20"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Metodología · Excelencia · Firmeza" title="Pilares de Nuestra Práctica Legal" text="Nuestra labor se rige bajo estándares éticos irrenunciables y una dedicación artesanal a cada causa judicial." />
      <div className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((p, i) => (<Reveal key={p.title} delay={i * 0.1}>
          <article className="card-lift h-full rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded bg-navy text-gold"><p.icon size={22} /></div>
            <h3 className="mb-3 text-xl font-semibold">{p.title}</h3><p className="text-sm leading-relaxed text-slate-500">{p.text}</p>
          </article></Reveal>))}
      </div></div></section>

    <section className="bg-gray-50 py-20"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle center={false} kicker="Servicios de alto nivel" title="Nuestras Áreas de Excelencia" text="Práctica jurídica orientada a personas naturales y corporaciones que exigen resolutividad, discreción y rigor técnico." />
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal><div className="card-lift h-full rounded-lg bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Nosotros: Tradición y Vanguardia Jurídica</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">M&M Abogados combina la solemnidad del litigio tradicional con la agilidad metodológica contemporánea, con especialistas colegiados en continua formación.</p>
          <Link to="/nosotros" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark">Conocer al equipo <ArrowRight size={14} /></Link></div></Reveal>
        <Reveal delay={0.1}><div className="card-lift h-full rounded-lg bg-navy p-8 text-white shadow-sm">
          <h3 className="text-xl font-semibold !text-white">Patrocinio en Litigios Complejos</h3>
          <div className="mt-4 space-y-3">{SERVICES.slice(0, 3).map(s => (<div key={s.title} className="rounded bg-white/5 p-3"><p className="font-serif text-gold">{s.title}</p><p className="text-xs text-slate-300">{s.text}</p></div>))}</div>
          <Link to="/especialidades" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">Ver todas las especialidades <ArrowRight size={14} /></Link></div></Reveal>
        <Reveal delay={0.2}><div className="card-lift h-full rounded-lg bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Atención Inmediata · Mesa de Partes</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">Las emergencias legales no esperan plazos burocráticos. Cuente con respuesta prioritaria para detenciones preliminares, medidas cautelares o transacciones urgentes.</p>
          <a href={`tel:+${SITE.phoneRaw}`} className="mt-5 flex items-center gap-3 rounded bg-gray-50 p-3 text-sm"><Phone size={18} className="text-gold-dark" /><span><span className="block text-[10px] uppercase tracking-wider text-slate-400">Llamada urgente</span><b className="text-navy">{SITE.phone}</b></span></a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-700">Iniciar conversación <MessageSquare size={14} /></a></div></Reveal>
      </div></div></section>

    <section className="bg-white py-20"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Confianza & resoluciones favorables" title="Casos de Éxito y Testimonios" text="La máxima garantía de nuestra firma radica en la satisfacción y tranquilidad recuperada por nuestros clientes." />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (<Reveal key={t.name} delay={i * 0.1}>
          <figure className="card-lift flex h-full flex-col rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex gap-1 text-gold" aria-label="5 estrellas">{[...Array(5)].map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
            <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-navy">“{t.text}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded bg-navy font-serif text-gold">{t.name[0]}</span>
              <span className="text-sm"><b className="block text-navy">{t.name}</b><span className="text-xs uppercase text-gold-dark">{t.tag}</span></span></figcaption>
          </figure></Reveal>))}
      </div></div></section>

    <section className="bg-navy py-16 text-center"><div className="mx-auto max-w-3xl px-4">
      <h2 className="text-3xl !text-white md:text-4xl">¿Afronta un Desafío Legal Urgente en Lima?</h2>
      <p className="mt-4 text-slate-300">No deje su libertad, familia ni patrimonio al azar. Póngase en contacto inmediato con los abogados titulares de Magallanes – Montero.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-gold"><MessageSquare size={16} /> Contactar al estudio (WhatsApp)</a>
        <a href={`tel:+${SITE.phoneRaw}`} className="btn-ghost"><Phone size={16} /> Llamar al {SITE.phone}</a></div></div></section>
  </>)
}
