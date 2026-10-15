import { useState, useMemo } from 'react'
import { ArrowRight, Calendar, Search } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { CATEGORIES, INITIAL_POSTS } from '../config/site'

const fmt = d => new Date(d + 'T00:00:00').toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })

export default function Blog() {
  const [cat, setCat] = useState('Todas'); const [q, setQ] = useState('')
  // TODO: reemplazar INITIAL_POSTS por fetch a tu API/CMS (mismo estado que el panel /admin/blog)
  const posts = useMemo(() => INITIAL_POSTS.filter(p => p.status === 'Publicado' && (cat === 'Todas' || p.category === cat) && (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase())), [cat, q])
  return (<>
    <SEO title="Blog – Actualidad Legal & Asesoría" description="Análisis jurídico, doctrina procesal y criterios judiciales del equipo de M&M Abogados en Lima, Perú." />
    <section className="bg-navy py-16 text-white"><div className="mx-auto max-w-6xl px-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Boletín jurídico y doctrinal</p>
      <h1 className="mt-3 text-4xl font-semibold !text-white md:text-5xl">Actualidad Legal <em className="text-gold">& Asesoría</em></h1>
      <p className="mt-4 max-w-2xl text-slate-300">Información clave para proteger sus derechos y su patrimonio. Análisis riguroso y criterios judiciales emitidos por el equipo de M&M Abogados.</p>
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist">{CATEGORIES.map(c => (
          <button key={c} onClick={() => setCat(c)} className={`rounded px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${cat === c ? 'bg-gold text-navy' : 'bg-white/10 hover:bg-white/20'}`}>{c}</button>))}</div>
        <label className="relative block lg:w-72"><span className="sr-only">Buscar</span>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar por tema o norma…" className="w-full rounded bg-white/10 px-4 py-2.5 pr-10 text-sm text-white placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-gold" />
          <Search size={16} className="absolute right-3 top-3 text-gold" /></label></div>
    </div></section>

    <section className="bg-gray-50 py-16"><div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p, i) => (<Reveal key={p.id} delay={(i % 2) * 0.1}><article className="card-lift group overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="relative aspect-[16/8] animate-pulse bg-gray-300">
            {p.cover && <img src={p.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />}
            <span className="absolute left-3 top-3 rounded bg-gold px-2 py-1 text-[10px] font-semibold uppercase text-navy">{p.category}</span></div>
          <div className="p-6"><p className="flex items-center gap-1 text-xs text-slate-400"><Calendar size={12} />{fmt(p.date)}</p>
            <h2 className="mt-2 text-xl font-semibold transition group-hover:text-gold-dark">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{p.excerpt}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">Leer artículo completo <ArrowRight size={14} /></a></div>
        </article></Reveal>))}
      </div>
      {!posts.length && <p className="py-16 text-center text-slate-500">No hay artículos que coincidan con su búsqueda.</p>}
    </div></section>
  </>)
}
