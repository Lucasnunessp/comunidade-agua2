import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import nomeOriginal from '@/assets/comunidade-nome-original.png'

// carrega o 3D só quando precisa (deixa o primeiro carregamento mais leve)
const WaterScene = lazy(() => import('./WaterScene.jsx'))

// checa se o navegador suporta WebGL
function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export default function Hero() {
  const ref = useRef(null)
  const [webgl, setWebgl] = useState(false)
  const [lowPower, setLowPower] = useState(false)
  const [visible, setVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setWebgl(hasWebGL())

    // celular ou pouca memória/CPU -> versão mais leve
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const fewCores = (navigator.hardwareConcurrency || 8) <= 4
    setLowPower(isMobile || fewCores)

    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // pausa o render quando o hero não está visível
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const show3D = webgl && !reduceMotion

  return (
    <section id="inicio" ref={ref} className="bg-white">
      {/* Preserva as letras originais da identidade da comunidade. */}
      <h1 className="mx-auto max-w-[1500px] px-5 pt-10 text-center sm:px-14 sm:pt-12">
        <img src={nomeOriginal} alt="Centro Cultural Comunidade das Águas" width="1329" height="105" className="mx-auto block h-auto w-full" />
      </h1>

      {/* faixa com a água 3D (no site original aqui fica a foto da comunidade) */}
      <div className="relative mt-6 h-[62vh] min-h-[380px] w-full overflow-hidden bg-white">
        {show3D ? (
          <Suspense fallback={null}>
            <WaterScene lowPower={lowPower} paused={!visible} />
          </Suspense>
        ) : (
          <div
            className="h-full w-full"
            style={{ background: 'linear-gradient(180deg, #ffffff 0%, #7da0b5 60%, #1c3447 100%)' }}
          />
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="cartao pointer-events-none absolute left-1/2 top-1/2 w-[88%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl px-6 py-6 text-center font-display text-4xl leading-tight sm:text-6xl"
        >
          Somos mais de mil, somos um
        </motion.p>
      </div>

      <div className="flex justify-center bg-white py-6">
        <a href="#sobre" aria-label="Ir para Sobre Nós" className="animate-bounce text-tinta/70">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
