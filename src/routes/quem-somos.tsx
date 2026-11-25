import { createFileRoute } from '@tanstack/react-router';
import Navbar from '@/components/site/Navbar.jsx';
import Sobre from '@/components/site/Sobre.jsx';
import Coletivos from '@/components/site/Coletivos.jsx';

const description = 'Conheça o Centro Cultural Comunidade das Águas e os quatro coletivos que compõem a comunidade.';
export const Route = createFileRoute('/quem-somos')({
  head: () => ({ meta: [
    { title: 'Quem somos | Comunidade das Águas' },
    { name: 'description', content: description },
    { property: 'og:title', content: 'Quem somos | Comunidade das Águas' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: QuemSomos,
});
function QuemSomos() {
  return <><Navbar /><main><Sobre /><Coletivos /></main></>;
}