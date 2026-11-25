import { createFileRoute } from '@tanstack/react-router';
import Navbar from '@/components/site/Navbar.jsx';
import Footer from '@/components/site/Footer.jsx';

const description = 'Entre em contato com o Centro Cultural Comunidade das Águas por e-mail ou pelo Instagram.';
export const Route = createFileRoute('/contato')({
  head: () => ({ meta: [
    { title: 'Contato | Comunidade das Águas' },
    { name: 'description', content: description },
    { property: 'og:title', content: 'Contato | Comunidade das Águas' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Contato,
});
function Contato() {
  return <><Navbar /><main className="mx-auto max-w-[1300px] px-5 py-12 sm:px-14"><h1 className="text-5xl font-light sm:text-6xl">Contato.</h1></main><Footer /></>;
}