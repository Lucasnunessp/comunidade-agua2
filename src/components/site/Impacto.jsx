import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { Users, CalendarHeart, Clapperboard, GraduationCap } from 'lucide-react'

// ATENÇÃO: números fictícios, só para o protótipo. Trocar pelos dados reais da organização.
const metricas = [
  { valor: 4, sufixo: '', label: 'Coletivos reunidos', icone: Users },
  { valor: 120, sufixo: '+', label: 'Atividades por ano', icone: CalendarHeart },
  { valor: 35, sufixo: '+', label: 'Produções audiovisuais', icone: Clapperboard },
  { valor: 800, sufixo: '+', label: 'Pessoas alcançadas', icone: GraduationCap },
]

function Contador({ ate, sufixo }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, ate, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + sufixo
      },
    })
    return () => controls.stop()
  }, [inView, ate, sufixo])

  return <span ref={ref}>0{sufixo}</span>
}

export default function Impacto() {
  return (
    <section id="impacto" className="papel px-5 py-20 sm:px-14">
      <div className="mx-auto max-w-[1300px]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-barro-600">
          Impacto social &amp; causas
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
          Cultura que transforma o território.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metricas.map((m) => {
            const Icon = m.icone
            return (
              <div key={m.label} className="cartao rounded-2xl p-6">
                <Icon className="h-6 w-6 text-barro-600" />
                <p className="mt-4 font-display text-6xl text-tinta">
                  <Contador ate={m.valor} sufixo={m.sufixo} />
                </p>
                <p className="mt-1 text-base text-tinta/70">{m.label}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-tinta/75">
          Nossas causas: memória e ancestralidade afro-indígena, educação popular, audiovisual
          periférico, protagonismo de mulheres e juventudes, e o direito ao bem-viver.
        </p>
      </div>
    </section>
  )
}
