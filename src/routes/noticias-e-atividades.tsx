import { createFileRoute } from '@tanstack/react-router';
import Navbar from '@/components/site/Navbar.jsx';

const description = 'Notícias e atividades do Centro Cultural Comunidade das Águas. Em breve.';
export const Route = createFileRoute('/noticias-e-atividades')({
  head: () => ({ meta: [
    { title: 'Notícias e atividades | Comunidade das Águas' },
    { name: 'description', content: description },
    { property: 'og:title', content: 'Notícias e atividades | Comunidade das Águas' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Noticias,
});
function Noticias() {
  return <><Navbar /><main className="mx-auto max-w-4xl px-5 py-12 sm:py-16"><h1 className="text-4xl font-light sm:text-6xl">Notícias e atividades.</h1><p className="mt-10 text-xl text-tinta/80">Em breve</p></main></>;
}