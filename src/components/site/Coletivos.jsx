import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import perifericas from '@/assets/coletivo-perifericas.png'
import marias from '@/assets/coletivo-marias.png'
import egbe from '@/assets/coletivo-egbe.png'
import abreCaminho from '@/assets/coletivo-abre-caminho.png'

// descrições vindas do "Sobre Nós" do site original
const coletivos = [
  {
    slug: 'coletiva-perifericas',
    nome: 'Coletiva Periféricas',
    logo: perifericas,
    resumo:
      'Coletivo de comunicação jornalística dedicado ao gerenciamento de dados, pesquisa e mapeamentos.',
  },
  {
    slug: 'espaco-cultural-das-marias',
    nome: 'Espaço Cultural das Marias',
    logo: marias,
    resumo:
      'Produtora audiovisual e fotográfica independente, que fomenta e agencia artistas negros e periféricos, priorizando a comunidade do Ibura de forma colaborativa e acessível.',
  },
  {
    slug: 'terreiro-egbe-omo-lomi',
    nome: "Terreiro Egbé Omo L'Omi",
    logo: egbe,
    resumo:
      'Organização religiosa que cuida do bem-estar espiritual da comunidade, com ações sociais como cestas básicas, mutirões de saúde e acolhimento.',
  },
  {
    slug: 'grupo-abre-caminho',
    nome: 'Grupo Abre Caminho',
    logo: abreCaminho,
    resumo: 'Grupo percussivo e musical que se dedica ao fomento da cultura popular.',
  },
]

// card com efeito de inclinação 3D seguindo o mouse
function Card({ item, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="flex h-full flex-col rounded-2xl border border-tinta/20 bg-white p-6 shadow-sm transition-colors hover:border-barro-500"
      >
        <div style={{ transform: 'translateZ(30px)' }}>
          <img src={item.logo} alt={`Logo de ${item.nome}`} width="80" height="80" className="mb-4 h-20 w-20 rounded-full object-contain" />
          <h3 className="font-display text-3xl leading-tight">{item.nome}</h3>
          <p className="mt-3 text-base leading-7 text-tinta/75">{item.resumo}</p>
        </div>
        <Link
          to={`/coletivos/${item.slug}`}
          className="mt-auto inline-flex w-fit items-center rounded-full bg-barro-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-barro-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-barro-600"
        >
          Ver mais
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default function Coletivos() {
  return (
    <section id="coletivos" className="bg-white px-5 py-20 sm:px-14">
      <div className="mx-auto max-w-[1300px]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-barro-600">
          Coletivos mapeados
        </p>
        <h2 className="mt-2 max-w-xl font-display text-4xl leading-tight sm:text-6xl">
          Quatro coletivos, uma só comunidade.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coletivos.map((c, i) => (
            <Card key={c.nome} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
