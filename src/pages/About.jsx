import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Quote } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { STATS, TEAM, VALUES } from '../config/site'

// NUEVO: El componente Photo ahora recibe la ruta de la imagen y la renderiza
const Photo = ({ src, alt, className = '' }) => (
  <img 
    src={src} 
    alt={alt || "Fotografía del equipo"} 
    className={`object-cover object-top ${className}`} 
  />
)

export default function About() {
  const { lead, others } = TEAM
  
  return (
    <>
      <SEO title="Nosotros – Nuestro Equipo Legal" description="Conoce al equipo de abogados de Magallanes - Montero: más de 18 años de experiencia en litigios penales, familia y derecho corporativo en Lima." />
      
      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h1 className="text-4xl font-semibold md:text-5xl">Conoce a nuestro equipo legal</h1>
            <div className="mx-auto mt-4 h-0.5 w-14 bg-gold" />
            <p className="mt-6 text-slate-500">Nos dedicamos a proteger los derechos y el patrimonio de nuestros clientes a través de una práctica jurídica estratégica, implacable y con los más rigurosos estándares éticos.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-6 md:grid-cols-4">
            {STATS.map(s => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-navy">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle center={false} kicker="Cuerpo de letrados" title="Nuestro Equipo Legal" text="Profesionales formados en las más exigentes cortes y comprometidos con una defensa técnica implacable." />
          <div className="grid gap-6 lg:grid-cols-2">
            
            {/* ABOGADO PRINCIPAL (FOTO 1) */}
            <Reveal>
              <article className="card-lift overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative">
                  <Photo src="/foto1.jpg" alt={lead.name} className="aspect-[4/3] w-full" />
                  <span className="absolute bottom-3 left-3 rounded bg-gold px-2 py-1 text-xs font-semibold text-navy">{lead.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{lead.name}</h3>
                  <p className="text-gold-dark">{lead.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{lead.text}</p>
                  <Link to="/contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark">
                    Contactar <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* ABOGADOS ASOCIADOS (FOTOS 2, 3 y 4) */}
            <div className="space-y-4">
              {others.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1}>
                  <article className="card-lift flex gap-4 rounded-lg bg-white p-4 shadow-sm">
                    {/* Al sumar i + 2, la primera foto de este grupo será /foto2.jpg, la siguiente /foto3.jpg, etc. */}
                    <Photo src={`/foto${i + 2}.jpg`} alt={m.name} className="h-32 w-28 shrink-0 rounded sm:w-36" />
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-dark">{m.tag}</span>
                      <h3 className="text-lg font-semibold">{m.name}</h3>
                      <p className="text-xs font-semibold text-gold-dark">{m.role}</p>
                      <p className="mt-2 text-sm text-slate-500">{m.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <SectionTitle center={false} kicker="Pilares de acción" title="Nuestra Filosofía de Práctica" />
            {[[Target, 'Misión', 'Proveer patrocinio legal del más alto nivel mediante un estudio exhaustivo del ordenamiento procesal y sustantivo. Asumimos cada causa con valentía jurídica, resguardando la libertad, el honor y el acervo patrimonial de nuestros patrocinados frente a cualquier contingencia.'],
              [Eye, 'Visión', 'Consolidarnos como el bufete boutique referente en el Perú en resolución de litigios penales y corporativos de alta complejidad, reconocidos por nuestra integridad deontológica, innovación dogmática y precisión procesal decisiva en los tribunales del país.']].map(([I, t, d]) => (
              <Reveal key={t}>
                <div className="mb-4 rounded-lg bg-gray-50 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded bg-navy text-gold"><I size={18} /></span>
                    <h3 className="text-xl font-semibold">{t}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          {/* SALA MAGISTRAL (FOTO 5 COMO FONDO) */}
          <Reveal>
            <div 
              className="relative flex aspect-[4/3] items-end overflow-hidden rounded-lg bg-cover bg-center p-6 shadow-md"
              style={{ backgroundImage: "url('/foto5.jpg')" }}
            >
              {/* Filtro oscuro para que las letras blancas resalten */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"></div>
              <p className="relative z-10 font-serif text-2xl font-semibold text-white">Sala Magistral de Estrategia y Deliberación</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle kicker="Ética y conducta" title="Valores Institucionales" text="Nuestros principios rectores no son declaraciones abstractas: son la pauta estricta que rige cada recurso, alegato y dictamen de nuestra firma." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="card-lift h-full rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-slate-500">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 rounded-lg bg-navy p-10 text-center">
              <Quote className="mx-auto mb-4 text-gold" />
              <blockquote className="mx-auto max-w-3xl font-serif text-2xl italic leading-snug text-white md:text-3xl">“La abogacía no es un simple oficio de formas, sino un sacerdocio cívico donde la libertad y la justicia solo se conquistan con preparación técnica implacable y honor intachable.”</blockquote>
              <p className="mt-6 font-semibold text-gold">Estudio Jurídico Magallanes – Montero (M&M)</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contacto" className="btn-gold">Agendar audiencia privada</Link>
                <Link to="/contacto" className="btn-ghost">Enviar consulta escrita</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}