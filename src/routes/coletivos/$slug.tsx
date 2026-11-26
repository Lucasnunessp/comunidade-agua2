import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/site/Navbar.jsx'

const coletivos: Record<string, { nome: string; descricao: string; site?: string }> = {
  'coletiva-perifericas': {
    nome: 'Coletiva Periféricas',
    site: 'https://coletiva-perifericas.vercel.app/',
    descricao: 'Fundada em 2016, a Coletiva Periféricas é composta por mulheres negras, periféricas e candomblecistas, dedicando-se ao mapeamento de dados e à promoção do bem viver na comunidade do Ibura. Entre seus projetos atuais, destacam-se o Mapeando a Ancestralidade na Periferia, que visa mapear os terreiros do Ibura e Jaboatão dos Guararapes, e o Cine Rua Escura, que busca promover a cultura e a visibilidade da produção audiovisual periférica.',
  },
  'espaco-cultural-das-marias': {
    nome: 'Espaço Cultural das Marias',
    descricao: 'Conteúdo desta página será acrescentado assim que as informações do coletivo forem enviadas.',
  },
  'terreiro-egbe-omo-lomi': {
    nome: "Terreiro Egbé Omo L'Omi",
    descricao: 'A Egbé Omo L\'Omi foi fundada em 2019 e utiliza os cultos de Candomblé (Orísá) e Jurema (entidades encantadas) como ferramentas de resistência contra o racismo, a LGBTQIAfobia e a misoginia. Além disso, a ancestralidade é empregada como um meio de fortalecer a comunidade. Entre suas iniciativas, a comunidade realiza ações sociais, como a entrega de cestas básicas e mutirões de saúde, promovendo assim o bem-estar e o acolhimento no território.',
  },
  'grupo-abre-caminho': {
    nome: 'Grupo Abre Caminho',
    descricao: 'Conteúdo desta página será acrescentado assim que as informações do coletivo forem enviadas.',
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
        <h1 className="mt-8 font-display text-4xl sm:text-5xl">{coletivo.nome}</h1>
        <p className="mt-6 text-lg leading-8 text-tinta/75">{coletivo.descricao}</p>
        {coletivo.site && (
          <div className="mt-8">
            <p className="text-lg leading-8 text-tinta/75">Para conhecer mais sobre os projetos da Coletiva Perifericas acesse o site abaixo</p>
            <a href={coletivo.site} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-barro-600 underline underline-offset-4 hover:text-barro-700">
              https://coletiva-perifericas.vercel.app/
            </a>
          </div>
        )}
      </main>
    </div>
  )
}
