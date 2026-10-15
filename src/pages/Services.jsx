import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Phone, MessageSquare } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { SERVICES, STEPS, SITE } from '../config/site'

export default function Services() {
  return (<>
    <SEO title="Especialidades Legales" description="Derecho Penal, Familia, Civil, Laboral, Corporativo e Inmobiliario. Defensa estratégica y atención 24/7 en Lima." />
    <section className="bg-navy py-20 text-white"><div className="mx-auto max-w-6xl px-4">
      <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Excelencia jurisdiccional y litigio</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold !text-white md:text-5xl">Nuestras Áreas de <em className="text-gold">Práctica Legal</em></h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">Representación experta y defensa estratégica en las ramas más críticas del derecho peruano. Abordamos cada patrocinio con rigor doctrinal y determinación probatoria.</p></Reveal></div></section>

    <section className="bg-gray-50 py-20"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Especialidades centrales" title="Disciplinas Dirigidas por Socios Especialistas" text="Cada departamento procesal cuenta con el liderazgo activo de colegiados con dedicación exclusiva." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (<Reveal key={s.title} delay={(i % 3) * 0.1}><article className="card-lift flex h-full flex-col rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded bg-gold/15 text-gold-dark"><s.icon size={22} /></span>
            <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase ${i === 0 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-slate-500'}`}>{s.badge}</span></div>
          <h2 className="mt-4 text-xl font-semibold">{s.title}</h2><p className="mt-2 text-sm text-slate-500">{s.text}</p>
          <ul className="mb-6 mt-4 flex-1 space-y-2 text-xs text-slate-600">{s.items.map(it => <li key={it} className="flex gap-2"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-gold-dark" />{it}</li>)}</ul>
          <Link to="/contacto" className="flex items-center justify-between rounded bg-navy px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-navy-700">Consultar caso {s.title.replace('Derecho de ', '').replace('Derecho ', '').toLowerCase()} <ArrowRight size={14} /></Link>
        </article></Reveal>))}
      </div></div></section>

    <section className="bg-white py-20"><div className="mx-auto max-w-6xl px-4">
      <SectionTitle kicker="Eficacia comprobada" title="Metodología de Acción Procesal" text="Un protocolo forense estructurado que elimina la incertidumbre y maximiza las probabilidades de éxito procesal." />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (<Reveal key={s.n} delay={i * 0.08}><li className="h-full rounded-lg bg-gray-50 p-6">
          <span className="font-serif text-4xl text-gold">{s.n}</span><p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-gold-dark">{s.k}</p>
          <h3 className="mt-1 text-lg font-semibold">{s.t}</h3><p className="mt-2 text-sm text-slate-500">{s.d}</p><div className="mt-4 h-1 rounded bg-gold/40" /></li></Reveal>))}</ol></div></section>

    <section className="bg-navy py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 lg:flex-row lg:items-center">
      <div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Respuesta inmediata en Lima y Callao</p>
        <h2 className="mt-3 text-3xl !text-white">¿Enfrenta una urgencia legal? <em className="text-gold">Nuestro equipo está disponible.</em></h2>
        <p className="mt-3 text-slate-300">Atención prioritaria 24/7 para diligencias fiscales en flagrancia, detenciones policiales y desalojos imprevistos.</p></div>
      <div className="flex flex-col gap-3 sm:flex-row"><a href={`tel:+${SITE.phoneRaw}`} className="btn-gold"><Phone size={16} /> Llamar ahora ({SITE.phone})</a>
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost"><MessageSquare size={16} /> WhatsApp jurídico</a></div></div></section>
  </>)
}
