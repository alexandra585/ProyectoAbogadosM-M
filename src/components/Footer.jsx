import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { NAV, SITE } from '../config/site'
import { Logo } from './Header'
export default function Footer() {
  return (<footer className="bg-navy text-slate-300">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
      <div><Logo />
        <p className="mt-4 font-serif italic text-gold">“{SITE.tagline}”</p>
        <p className="mt-2 text-sm text-slate-400">Firma jurídica multidisciplinaria especializada en defensa penal de alta complejidad, derecho familiar, civil, corporativo y patrimonial en Lima.</p></div>
      <div><h3 className="mb-4 border-b border-white/10 pb-2 font-serif text-lg !text-white">Navegación</h3>
        <ul className="space-y-2 text-sm">{NAV.map(n => <li key={n.to}><Link className="hover:text-gold" to={n.to}>{n.label}</Link></li>)}</ul></div>
      <div><h3 className="mb-4 border-b border-white/10 pb-2 font-serif text-lg !text-white">Contacto Directo</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2 break-all"><Mail size={16} className="mt-0.5 shrink-0 text-gold" />{SITE.email}</li>
          <li className="flex gap-2"><Phone size={16} className="text-gold" />{SITE.phone}</li>
          <li className="flex gap-2"><MapPin size={16} className="text-gold" />Lima, Perú</li></ul></div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados. <Link to="/admin/blog" className="ml-2 hover:text-gold">Admin</Link></div>
  </footer>)
}
