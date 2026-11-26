import { Palette, BookOpen, Leaf } from 'lucide-react'

const causas = [
  {
    titulo: 'Arte',
    subtitulo: 'Cultura em Destaque',
    descricao:
      'Através de exposições, workshops e eventos culturais, promovemos a valorização da arte e da cultura local. Buscamos preservar e transmitir nossas tradições, promovendo a diversidade cultural e fortalecendo nossa identidade como comunidade.',
    icone: Palette,
  },
  {
    titulo: 'Educação',
    subtitulo: 'Conhecimento que transforma',
    descricao:
      'Investimos em programas educacionais que capacitam e inspiram os participantes, promovendo a inclusão, a igualdade de oportunidades e o acesso ao conhecimento. Acreditamos que a educação é a chave para o crescimento individual e coletivo.',
    icone: BookOpen,
  },
  {
    titulo: 'Sustentabilidade',
    subtitulo: 'Cuidando do Nosso Lar',
    descricao:
      'Comprometemo-nos com práticas sustentáveis que respeitam o meio ambiente e promovem a conscientização ambiental. Buscamos criar um impacto positivo, preservando os recursos naturais e incentivando a comunidade a adotar hábitos mais sustentáveis.',
    icone: Leaf,
  },
]

export default function Impacto() {
  return (
    <section id="impacto" className="papel px-5 py-20 sm:px-14">
      <div className="mx-auto max-w-[1300px]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-barro-600">
          Nossas Causas
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
          Impacto positivo na Comunidade
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {causas.map((causa) => {
            const Icon = causa.icone
            return (
              <article key={causa.titulo} className="cartao rounded-2xl p-6 sm:p-8">
                <Icon className="h-7 w-7 text-barro-600" aria-hidden="true" />
                <h3 className="mt-5 font-display text-3xl text-tinta">{causa.titulo}</h3>
                <p className="mt-2 text-sm font-semibold text-barro-600">{causa.subtitulo}</p>
                <p className="mt-4 text-base leading-8 text-tinta/75">{causa.descricao}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
