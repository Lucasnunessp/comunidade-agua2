import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/site/Button';
import Navbar from '@/components/site/Navbar.jsx';
import foto1 from '@/assets/projetos-foto1.jpg';
import foto2 from '@/assets/projetos-foto2.jpg';
import foto3 from '@/assets/projetos-foto3.jpg';

import feiraFoto1 from '@/assets/imagem1.png';
import feiraFoto2 from '@/assets/imagem2.png';
import feiraFoto3 from '@/assets/imagem3.png';

const feiraFotos = [feiraFoto1, feiraFoto2, feiraFoto3];

const description = 'Conheça Egbé que Ensina e Feira do Troca, projetos do Centro Cultural Comunidade das Águas que fortalecem a educação e a colaboração na comunidade.';
const fotos = [
  { src: foto1, alt: 'Grupo caminhando em trilha na mata' },
  { src: foto2, alt: 'Crianças sentadas em roda durante atividade do Egbé que Ensina' },
  { src: foto3, alt: 'Criança fixando cartazes na parede durante oficina' },
];

export const Route = createFileRoute('/projetos')({
  head: () => ({ meta: [
    { title: 'Projetos | Comunidade das Águas' },
    { name: 'description', content: description },
    { property: 'og:title', content: 'Projetos | Comunidade das Águas' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ProjetosPage,
});

function ProjetosPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const projetos = [
    {
      id: 'feira', title: 'Feira do Troca',
      summary: 'A Feira do Troca é um espaço de estudo e preparação voltado a pessoas que desejam ingressar ou permanecer na universidade.',
      text: 'A Feira do Troca é um espaço de estudo e preparação voltado a pessoas que desejam ingressar ou permanecer na universidade. A iniciativa busca ampliar as oportunidades de acesso ao ensino superior, oferecendo apoio educacional e incentivando a continuidade da formação acadêmica. Por meio do compartilhamento de conhecimentos e experiências, o projeto contribui para fortalecer a trajetória educacional dos participantes e tornar o ambiente universitário mais acessível.',
    },
    {
      id: 'egbe', title: 'Egbé que Ensina',
      summary: 'O Egbé que Ensina é um projeto dedicado à educação social de crianças e adolescentes, promovendo oportunidades de aprendizagem, desenvolvimento e formação cidadã.',
      text: 'O Egbé que Ensina é um projeto dedicado à educação social de crianças e adolescentes, promovendo oportunidades de aprendizagem, desenvolvimento e formação cidadã. A iniciativa busca proporcionar experiências educativas que contribuam para a construção de conhecimentos, o fortalecimento da autonomia e a convivência coletiva. Além disso, reconhece a importância da educação como instrumento de transformação social e desenvolvimento comunitário.',
    },
  ];
  return (
    <div className="min-h-screen bg-card text-tinta">
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <h1 className="text-5xl font-light sm:text-6xl">Projetos.</h1>
        {projetos.map((projeto) => (
          <section key={projeto.id} className="mt-10 border-t border-tinta/15 pt-8" aria-labelledby={`${projeto.id}-title`}>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:justify-between sm:gap-8">
              <div className="min-w-0 flex-1">
                <h2 id={`${projeto.id}-title`} className="font-display text-3xl sm:text-4xl">{projeto.title}</h2>
                <p className="mt-4 text-lg leading-8 text-tinta/80">{projeto.summary}</p>
              </div>
              <Button className="shrink-0 sm:mt-1" aria-expanded={Boolean(expanded[projeto.id])} aria-controls={`${projeto.id}-details`} onClick={() => setExpanded((current) => ({ ...current, [projeto.id]: !current[projeto.id] }))}>
                {expanded[projeto.id] ? 'Mostrar menos' : 'Saber mais'}
                {expanded[projeto.id] ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
              </Button>
            </div>
            {expanded[projeto.id] && <div id={`${projeto.id}-details`} className="mt-6">
              <p className="whitespace-pre-line text-lg leading-8 text-tinta/80">{projeto.text}</p>
              {projeto.highlight && (
                <p className="mt-6 text-xl font-semibold leading-8 text-tinta sm:text-2xl">
                  {projeto.highlight}
                </p>
              )}
              {projeto.id === 'feira' && <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {feiraFotos.map((foto, index) => <img key={foto} src={foto} alt={`Feira do Troca — foto ${index + 1}`} className="aspect-square w-full rounded-lg object-cover" loading="lazy" />)}
              </div>}
              {projeto.id === 'egbe' && <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {fotos.map((foto) => <img key={foto.src} src={foto.src} alt={foto.alt} className="aspect-square w-full rounded-lg object-cover" />)}
              </div>}
            </div>}
          </section>
        ))}
      </main>
    </div>
  );
}