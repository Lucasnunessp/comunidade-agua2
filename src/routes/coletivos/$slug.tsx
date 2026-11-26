import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, Instagram, Youtube, Music2 } from 'lucide-react'
import Navbar from '@/components/site/Navbar.jsx'
import perifericas from '@/assets/coletivo-perifericas.png'
import marias from '@/assets/coletivo-marias.png'
import egbe from '@/assets/coletivo-egbe.png'
import abreCaminho from '@/assets/coletivo-abre-caminho.png'
import lucasMarafa from '@/assets/lucas-marafa.jpg'
import ouroOxum from '@/assets/ouro-oxum.jpg'

const coletivos: Record<string, { nome: string; descricao: string; logo: string; site?: string; instagram?: string; youtube?: string; projetos?: { titulo: string; descricao: string; link?: string; destaque?: string; imagem?: string; episodios?: { titulo: string; link: string }[]; spotify?: string }[] }> = {
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
    projetos: [{
      titulo: 'Cultura de Favela',
      descricao: 'Cultura de Favela é uma websérie dedicada a promover e valorizar a cultura periférica, destacando as vivências, lutas e criações de artistas independentes do Ibura e de Jaboatão dos Guararapes. Por meio de entrevistas em formato audiovisual e podcast, todo o conteúdo é disponibilizado no YouTube e no Spotify.\\n\\nEssa iniciativa é uma continuidade de um projeto que começou em 2022, mas que foi temporariamente interrompido devido à falta de recursos. O foco central da websérie é oferecer visibilidade a esses artistas, permitindo que suas histórias e obras alcancem um público mais amplo, enriquecendo a cultura local e ampliando o reconhecimento de suas contribuições.\\n\\nA relevância deste projeto é clara, especialmente diante dos desafios que os artistas da periferia enfrentam, como a desvalorização de seu trabalho e a escassez de espaços adequados para a apresentação de suas criações.\\n\\nAlém de contribuir para a construção de uma identidade cultural mais inclusiva, o projeto oferece alternativas construtivas e inspiradoras. Assim, Cultura de Favela não apenas celebra a diversidade cultural, mas também desempenha um papel vital na transformação social da comunidade.',
      spotify: 'https://open.spotify.com/show/3peHjerzomNDu5sHtHUtZr?si=0rIrt_1eSlemmfKWwRd7zw&utm_source=whatsapp&sci=spotify%3Acard-config%3A6J67SVinC9V6DlhvxkNu0K',
      episodios: [
        { titulo: 'Episódio 1', link: 'https://youtu.be/q7c3VLTPr1w?is=OzJdq-9ZAqwqVQJP' },
        { titulo: 'Episódio 2', link: 'https://youtu.be/InqmboBYv2c?is=6lJ3jVsZT0azy-Yt' },
        { titulo: 'Episódio 3', link: 'https://youtu.be/1vyDeckB_vQ?is=POHL0jWMpPLZmC3Q' },
        { titulo: 'Episódio 4', link: 'https://youtu.be/Pzsg0H-nGzo?is=IJyL7Aau7YWTt7Gh' },
      ],
    }, {
      titulo: 'Ouro de Oxum',
      imagem: ouroOxum,
      descricao: '"O Ouro de Oxum" é um projeto marcante produzido pelo Espaço Cultural das Marias em 2021, que apresenta uma performance envolvente de Lua Maria. Este projeto busca celebrar e valorizar a cultura afro-brasileira, explorando a riqueza das tradições e a ancestralidade através da arte. A performance de Lua Maria é um convite à reflexão sobre a importância de Oxum, a orixá das águas doces, da fertilidade e do amor, simbolizando também a força feminina e a conexão com a natureza.',
      link: 'https://youtu.be/lkGoEO8OGmg?is=IBZs9d0a1So_rskv',
    }, {
      titulo: 'A La Marafa',
      imagem: lucasMarafa,
      descricao: 'Lucas Marafa é um poeta, produtor cultural e educador social em formação, atualmente graduando-se em Ciências Sociais - Licenciatura na Universidade Federal de Pernambuco. Sua trajetória como poeta começou no Grupo Recital Afrologia, e atualmente ele faz parte do coletivo Ataque Surpresa, onde continua a explorar sua arte. Como produtor cultural e educador social, Lucas atua no coletivo Combate Lírico, contribuindo para iniciativas que valorizam a expressão artística e a educação. Em sua carreira solo, ele lançou "Lucas Marafa em NegroPernambucano: Contextos, Conflitos e Amores", um projeto que une sua atuação como poeta, ator e roteirista.',
      link: 'https://youtu.be/h78I3WOY7mw?is=fjBx0SkMYty3g-lH',
    }, {
      titulo: 'Bloco Tic-Tac',
      descricao: 'O bloco carnavalesco Tic-Tac surge com a proposta de enriquecer o carnaval na comunidade do Ibura, trazendo mais uma opção de bloco de rua e promovendo a descentralização dessa festividade tão importante. Reconhecendo que muitos integrantes do Espaço Cultural das Marias e do Centro Cultural Comunidade das Águas estão frequentemente envolvidos nas grandes celebrações, como o carnaval, o bloco Tic-Tac foi criado para garantir que essas pessoas também possam desfrutar da folia e celebrar a cultura local.\\n\\nO bloco se propõe a ser um espaço de diversão e inclusão, onde os moradores da comunidade podem se reunir, dançar e vivenciar a alegria do carnaval em um ambiente acolhedor e festivo. Com ritmos contagiantes e uma programação que valoriza a diversidade cultural, o Tic-Tac é mais do que apenas um bloco; é uma celebração da união e da identidade do Ibura.\\n\\nAtravés de sua atuação, o bloco Tic-Tac reafirma a importância da participação comunitária nas festividades, promovendo um carnaval que é acessível e representativo, onde todos têm a oportunidade de brilhar e se divertir. Com isso, busca fortalecer os laços sociais e culturais da região, transformando o carnaval em um momento de celebração coletiva e pertencimento.',
      destaque: 'Porque nosso tempo é outro!',
    }],
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
  const usarFundoExemplo = ['coletiva-perifericas', 'espaco-cultural-das-marias', 'terreiro-egbe-omo-lomi', 'grupo-abre-caminho'].includes(slug)

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
        {coletivo.projetos?.map((projeto) => (
          <article key={projeto.titulo} className="mt-5 rounded-2xl border border-tinta/15 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl">{projeto.titulo}</h2>
            <p className="mt-3 whitespace-pre-line text-base leading-7 text-tinta/75">{projeto.descricao}</p>
            {projeto.destaque && (
              <p className="mt-6 text-xl font-semibold leading-8 text-tinta sm:text-2xl">
                {projeto.destaque}
              </p>
            )}
            {projeto.imagem && <img src={projeto.imagem} alt={projeto.titulo === "Ouro de Oxum" ? "Representação artística de Oxum" : "Lucas Marafa"} className="mt-5 h-auto w-full max-w-[12rem] rounded-xl object-cover" />}
            {projeto.spotify && (
              <a
                href={projeto.spotify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvir Cultura de Favela no Spotify (abre em nova aba)"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-tinta/30 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-barro-500 hover:text-white"
              >
                <Music2 className="h-5 w-5" aria-hidden="true" />
                Ouvir no Spotify
              </a>
            )}
            {projeto.episodios && (
              <div className="mt-6 border-t border-tinta/10 pt-5">
                <h3 className="font-display text-xl text-tinta sm:text-2xl">Assista aos episódios</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {projeto.episodios.map((episodio) => (
                    <a
                      key={episodio.titulo}
                      href={episodio.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${episodio.titulo} de Cultura de Favela no YouTube (abre em nova aba)`}
                      className="inline-flex items-center gap-2 rounded-full border border-tinta/30 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-barro-500 hover:text-white"
                    >
                      <Youtube className="h-5 w-5" aria-hidden="true" />
                      {episodio.titulo}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {projeto.link && <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Assistir ao projeto ${projeto.titulo} no YouTube (abre em nova aba)`}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-tinta/30 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-barro-500 hover:text-white"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
              Assistir no YouTube
            </a>}
          </article>
        ))}
      </main>
    </div>
  )
}
