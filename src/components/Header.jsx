import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Siren } from 'lucide-react'
import { NAV, SITE } from '../config/site'

export function Logo() {
  return (<Link to="/" className="flex items-center gap-3">
    <img src="/logo.png" alt="Logo M&M Abogados" className="h-10 w-10 rounded object-cover" />
    <span className="leading-tight"><span className="block font-serif text-xl font-bold text-gold">M&M Abogados</span>
      <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300">Magallanes – Montero</span></span>
  </Link>)
}
export default function Header() {
  const [open, setOpen] = useState(false)
  return (<header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <Logo />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
        {NAV.map(n => (<NavLink key={n.to} to={n.to} end={n.to === '/'}
          className={({ isActive }) => `border-b-2 py-1 text-sm font-medium transition-colors hover:text-gold ${isActive ? 'border-gold text-gold' : 'border-transparent text-white'}`}>{n.label}</NavLink>))}
      </nav>
      <Link to="/contacto" className="btn-gold hidden !px-4 !py-2 md:inline-flex"><Siren size={16} /> Consulta Urgente</Link>
      <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">{open ? <X /> : <Menu />}</button>
    </div>
    {open && (<nav className="space-y-1 border-t border-white/10 bg-navy px-4 py-4 md:hidden">
      {NAV.map(n => (<NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-white hover:bg-white/5 hover:text-gold">{n.label}</NavLink>))}
      <Link to="/contacto" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full">Consulta Urgente</Link>
    </nav>)}
  </header>)
}
