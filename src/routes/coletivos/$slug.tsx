import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, Instagram, Youtube } from 'lucide-react'
import Navbar from '@/components/site/Navbar.jsx'
import perifericas from '@/assets/coletivo-perifericas.png'
import marias from '@/assets/coletivo-marias.png'
import egbe from '@/assets/coletivo-egbe.png'
import abreCaminho from '@/assets/coletivo-abre-caminho.png'

const coletivos: Record<string, { nome: string; descricao: string; logo: string; site?: string; instagram?: string; youtube?: string }> = {
  'coletiva-perifericas': {
    nome: 'Coletiva Periféricas',
    logo: perifericas,
    site: 'https://coletiva-perifericas.vercel.app/',
    instagram: 'https://www.instagram.com/perifericas?knvt=bDJjbng0bmNvamJ6',
    descricao: 'Fundada em 2016, a Coletiva Periféricas é composta por mulheres negras, periféricas e candomblecistas, dedicando-se ao mapeamento de dados e à promoção do bem viver na comunidade do Ibura. Entre seus projetos atuais, destacam-se o Mapeando a Ancestralidade na Periferia, que visa mapear os terreiros do Ibura e Jaboatão dos Guararapes, e o Cine Rua Escura, que busca promover a cultura e a visibilidade da produção audiovisual periférica.',
  },
  'espaco-cultural-das-marias': {
    nome: 'Espaço Cultural das Marias',
    logo: marias,
    instagram: 'https://www.instagram.com/espacoculturaldasmarias?bqrl=MWhtemFocTVieWhhcA==',
    youtube: 'https://m.youtube.com/%40espacoculturaldasmarias/featured?fbclid=PAb21jcAVx69lleHRuA2FlbQIxMQBwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpy_ck7Liv7qftBJQZMBFoAuMPwDD87MD79_D7yZ0U4mxlQ9e5uFX0LfTYFe4_aem_cTcUfic-RTXpZyB3aaqBpA',
    descricao: 'O Espaço Cultural das Marias, fundado em 2016, tem como objetivo movimentar a cultura no Ibura, criando suportes para compartilhar e apoiar artistas locais. A iniciativa articula espaços para ensaios, estabelece redes colaborativas e produz eventos e conteúdos audiovisuais. Um dos projetos mais recentes, Cultura de Favela, inclui a produção de vídeos e podcasts com artistas, além de ações de divulgação nas redes sociais. O Espaço também está em processo de desenvolvimento de um projeto para criar um espaço físico dedicado à produção cultural nas periferias. Além disso, a equipe atua em áreas como fotografia, audiovisual, produção cultural e organização de eventos e feiras pretas, sempre buscando valorizar e enaltecer os criadores de cultura do território.',
  },
  'terreiro-egbe-omo-lomi': {
    nome: "Terreiro Egbé Omo L'Omi",
    logo: egbe,
    instagram: 'https://www.instagram.com/egbeomolomi?bqrl=MXM4NDltZnBsam50Nw==',
    descricao: 'A Egbé Omo L\'Omi foi fundada em 2019 e utiliza os cultos de Candomblé (Orísá) e Jurema (entidades encantadas) como ferramentas de resistência contra o racismo, a LGBTQIAfobia e a misoginia. Além disso, a ancestralidade é empregada como um meio de fortalecer a comunidade. Entre suas iniciativas, a comunidade realiza ações sociais, como a entrega de cestas básicas e mutirões de saúde, promovendo assim o bem-estar e o acolhimento no território.',
  },
  'grupo-abre-caminho': {
    nome: 'Grupo Abre Caminho',
    logo: abreCaminho,
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
  const usarFundoExemplo = ['coletiva-perifericas', 'terreiro-egbe-omo-lomi', 'grupo-abre-caminho'].includes(slug)

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
    <div className={`min-h-screen text-tinta ${usarFundoExemplo ? "bg-[linear-gradient(110deg,#f1f0ef_0%,#faf9f8_100%)]" : "bg-card"}`}>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <a href="/#coletivos" className="text-sm font-semibold text-barro-600 hover:underline">← Voltar aos coletivos</a>
        <article className="mt-8 rounded-2xl border border-tinta/15 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={coletivo.logo}
              alt={`Logo de ${coletivo.nome}`}
              width="80"
              height="80"
              className="h-16 w-16 shrink-0 rounded-full object-contain sm:h-20 sm:w-20"
            />
            <h1 className="font-display text-3xl leading-tight sm:text-5xl">{coletivo.nome}</h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-tinta/75">{coletivo.descricao}</p>
          {(coletivo.site || coletivo.instagram || coletivo.youtube) && (
            <div className="mt-8 border-t border-tinta/10 pt-6">
              {coletivo.site && (
                <p className="inline-flex flex-wrap items-center gap-2 text-lg leading-8 text-tinta/75">
                  Para conhecer mais sobre os projetos da Coletiva Perifericas acesse o site abaixo
                  <ArrowDown className="h-4 w-4 shrink-0 text-tinta/60" strokeWidth={1.7} aria-hidden="true" />
                </p>
              )}
              <div className={`flex flex-wrap items-center gap-3 ${coletivo.site ? 'mt-3' : ''}`}>
                {coletivo.site && (
                  <a
                    href={coletivo.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Site da Coletiva Periféricas (abre em nova aba)"
                    className="inline-flex items-center gap-2 rounded-full border border-tinta/30 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-barro-500 hover:text-white"
                  >
                    Site
                  </a>
                )}
                {coletivo.instagram && (
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
                )}
                {coletivo.youtube && (
                  <a
                    href={coletivo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube do coletivo (abre em nova aba)"
                    className="inline-flex items-center gap-2 rounded-full border border-tinta/30 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-barro-500 hover:text-white"
                  >
                    <Youtube className="h-5 w-5" aria-hidden="true" />
                    YouTube
                  </a>
                )}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  )
}
