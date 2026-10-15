import { useState } from 'react'
import { MapPin, Clock, Navigation, Phone, Mail, ExternalLink, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { CASE_TYPES, SITE } from '../config/site'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({ name: '', phone: '', type: '', msg: '', ok: false })
  const set = k => e => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  const submit = e => { e.preventDefault(); /* TODO: enviar a tu backend / EmailJS / Formspree */ setSent(true) }
  const L = 'mb-1 mt-4 block text-xs font-semibold uppercase tracking-wide text-navy'
  return (<>
    <SEO title="Contacto y Sedes" description="Contacte al estudio jurídico M&M en Independencia y Cercado de Lima. Atención confidencial y urgencias penales 24 horas." />
    <section className="bg-navy py-16 text-center text-white"><div className="mx-auto max-w-3xl px-4">
      <h1 className="text-4xl font-semibold !text-white md:text-5xl">Atención Directa y <em className="text-gold">Confidencial</em></h1>
      <p className="mt-4 text-slate-300">Absoluta reserva, rigor técnico y presencia inmediata en nuestras sedes de Lima Metropolitana y tribunales judiciales.</p></div></section>

    <section className="bg-gray-50 py-16"><div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
      <Reveal><div className="rounded-lg border-t-4 border-gold bg-white p-6 shadow-lg md:p-8">
        <span className="rounded bg-gold/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-dark">Protocolo de privacidad estricto</span>
        <h2 className="mt-3 text-2xl font-semibold">Envíenos los detalles de su caso</h2>
        <p className="mt-1 text-sm text-slate-500">Toda consulta queda protegida bajo el secreto profesional y absoluta confidencialidad procesal.</p>
        {sent ? (<div className="py-12 text-center"><CheckCircle2 className="mx-auto text-gold" size={48} /><h3 className="mt-4 text-xl">Consulta recibida</h3><p className="mt-2 text-sm text-slate-500">Un abogado del estudio se comunicará con usted a la brevedad.</p></div>) : (
        <form onSubmit={submit}>
          <label className={L} htmlFor="n">Nombres y apellidos completos *</label><input id="n" required className="input" placeholder="Ej. Roberto Mendoza Ramos" value={f.name} onChange={set('name')} />
          <label className={L} htmlFor="t">Teléfono directo / WhatsApp *</label><input id="t" required type="tel" className="input" placeholder="+51 900 000 000" value={f.phone} onChange={set('phone')} />
          <label className={L} htmlFor="c">Tipo de caso / materia jurídica *</label>
          <select id="c" required className="input" value={f.type} onChange={set('type')}><option value="">Seleccione la especialidad correspondiente</option>{CASE_TYPES.map(c => <option key={c}>{c}</option>)}</select>
          <label className={L} htmlFor="m">Descripción breve de su situación *</label><textarea id="m" required rows={4} className="input resize-none" placeholder="Detalle las fechas clave, citaciones, juzgado o estado actual del procedimiento…" value={f.msg} onChange={set('msg')} />
          <label className="mt-4 flex gap-2 text-xs text-slate-500"><input type="checkbox" required checked={f.ok} onChange={set('ok')} className="mt-0.5 accent-[#D4AF37]" />Autorizo la evaluación reservada de mis datos exclusivamente para efectos de consulta legal confidencial y contacto profesional.</label>
          <button className="btn-gold mt-5 w-full">Solicitar evaluación de caso <ArrowRight size={16} /></button>
        </form>)}
        <div className="mt-5 flex flex-col justify-between gap-3 rounded bg-navy p-4 text-white sm:flex-row sm:items-center">
          <div className="flex items-center gap-3"><ShieldCheck className="text-gold" /><div><p className="text-xs font-semibold uppercase text-gold">Urgencias penales & flagrancias</p><p className="text-xs text-slate-300">Atención inmediata en comisarías y fiscalía</p></div></div>
          <a href={`tel:+${SITE.phoneRaw}`} className="btn-gold !px-4 !py-2 text-xs"><Phone size={14} /> Llamar 24 horas</a></div>
      </div></Reveal>

      <div className="space-y-6">
        {SITE.offices.map((o, i) => (<Reveal key={o.id} delay={i * 0.1}><article className="card-lift rounded-lg border-t-4 border-gold bg-white p-6 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-dark">{o.tag}</p><h3 className="text-lg font-semibold">{o.name}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600"><li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{o.address}</li>
            <li className="flex gap-2 text-xs text-slate-500"><Navigation size={14} className="shrink-0" />{o.ref}</li><li className="flex gap-2 text-xs text-slate-500"><Clock size={14} className="shrink-0" />{o.hours}</li></ul>
          <a href={o.map} target="_blank" rel="noreferrer" className="mt-4 flex h-24 items-center justify-center gap-2 rounded bg-gray-200 text-sm font-semibold text-navy transition hover:bg-gray-300">Ver en Google Maps <ExternalLink size={14} /></a>
        </article></Reveal>))}
        <div className="grid gap-4 sm:grid-cols-2">
          <a href={`tel:+${SITE.phoneRaw}`} className="card-lift rounded-lg bg-white p-4 shadow-sm"><Phone size={18} className="text-gold-dark" /><p className="mt-2 text-[10px] uppercase tracking-wider text-slate-400">Celular / urgencias</p><b className="text-lg text-navy">{SITE.phone}</b></a>
          <a href={`mailto:${SITE.email}`} className="card-lift rounded-lg bg-white p-4 shadow-sm"><Mail size={18} className="text-gold-dark" /><p className="mt-2 text-[10px] uppercase tracking-wider text-slate-400">Correo institucional</p><b className="block truncate text-sm text-navy">{SITE.email}</b></a></div>
      </div></div></section>
  </>)
}
