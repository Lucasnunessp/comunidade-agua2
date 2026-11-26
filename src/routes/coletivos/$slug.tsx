import { createFileRoute } from '@tanstack/react-router'
import { Instagram } from 'lucide-react'
import Navbar from '@/components/site/Navbar.jsx'

const coletivos: Record<string, { nome: string; descricao: string; site?: string; instagram?: string }> = {
  'coletiva-perifericas': {
    nome: 'Coletiva Periféricas',
    site: 'https://coletiva-perifericas.vercel.app/',
    instagram: 'https://www.instagram.com/perifericas?knvt=bDJjbng0bmNvamJ6',
    descricao: 'Fundada em 2016, a Coletiva Periféricas é composta por mulheres negras, periféricas e candomblecistas, dedicando-se ao mapeamento de dados e à promoção do bem viver na comunidade do Ibura. Entre seus projetos atuais, destacam-se o Mapeando a Ancestralidade na Periferia, que visa mapear os terreiros do Ibura e Jaboatão dos Guararapes, e o Cine Rua Escura, que busca promover a cultura e a visibilidade da produção audiovisual periférica.',
  },
  'espaco-cultural-das-marias': {
    nome: 'Espaço Cultural das Marias',
    descricao: 'Conteúdo desta página será acrescentado assim que as informações do coletivo forem enviadas.',
  },
  'terreiro-egbe-omo-lomi': {
    nome: "Terreiro Egbé Omo L'Omi",
    instagram: 'https://www.instagram.com/egbeomolomi?bqrl=MXM4NDltZnBsam50Nw==',
    descricao: 'A Egbé Omo L\'Omi foi fundada em 2019 e utiliza os cultos de Candomblé (Orísá) e Jurema (entidades encantadas) como ferramentas de resistência contra o racismo, a LGBTQIAfobia e a misoginia. Além disso, a ancestralidade é empregada como um meio de fortalecer a comunidade. Entre suas iniciativas, a comunidade realiza ações sociais, como a entrega de cestas básicas e mutirões de saúde, promovendo assim o bem-estar e o acolhimento no território.',
  },
  'grupo-abre-caminho': {
    nome: 'Grupo Abre Caminho',
    instagram: 'https://www.instagram.com/_abrecaminho?bqrl=MTBxcThjODdyNTB3cg==',
    descricao: 'O Grupo Abre Caminho, originário do Ibura, traz uma nova abordagem musical que preserva a essência dos estilos que interpreta. Encantando o público com a harmonia de seus instrumentos percussivos, a combinação entre a alfaia e o pandeiro é o coração de cada melodia. Com base em estratégias inspiradas na cultura negra afro-indígena, o grupo é guiado pela Jurema Sagrada, buscando sempre conectar suas raízes às suas performances.',
  },
}

export const Route = createFileRoute('/coletivos/$slug')({
  component: ColetivoPage,
})

function ColetivoPage() {
  const { slug } = Route.useParams()
  const coletivo = coletivos[slug]

  if (!coletivo) {
    return (
      <div className="min-h-screen bg-card text-tinta">
        <Navbar />
        <main className="mx-auto max-w-4xl px-5 py-16">
          <h1 className="font-display text-4xl">Coletivo não encontrado</h1>
          <a href="/#coletivos" className="mt-6 inline-block text-barro-600 underline">Voltar aos coletivos</a>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-card text-tinta">
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <a href="/#coletivos" className="text-sm font-semibold text-barro-600 hover:underline">← Voltar aos coletivos</a>
        <article className="mt-8 rounded-2xl border border-tinta/15 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="font-display text-4xl sm:text-5xl">{coletivo.nome}</h1>
          <p className="mt-6 text-lg leading-8 text-tinta/75">{coletivo.descricao}</p>
          {coletivo.site && (
            <div className="mt-8 border-t border-tinta/10 pt-6">
              <p className="text-lg leading-8 text-tinta/75">Para conhecer mais sobre os projetos da Coletiva Perifericas acesse o site abaixo</p>
              <a
                href={coletivo.site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site da Coletiva Periféricas (abre em nova aba)"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-tinta/30 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-barro-500 hover:text-white"
              >
                Site
              </a>
            </div>
          )}
          {coletivo.instagram && (
            <div className="mt-8 border-t border-tinta/10 pt-6">
              <a
                href={coletivo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do coletivo (abre em nova aba)"
                className="inline-flex items-center gap-2 rounded-full border border-tinta/30 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-barro-500 hover:text-white"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                Instagram
              </a>
            </div>
          )}
        </article>
      </main>
    </div>
  )
}
