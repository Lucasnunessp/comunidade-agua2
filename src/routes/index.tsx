import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore jsx components from original project
import Navbar from "@/components/site/Navbar.jsx";
// @ts-ignore
import Hero from "@/components/site/Hero.jsx";
// @ts-ignore
import Sobre from "@/components/site/Sobre.jsx";
// @ts-ignore
import Projetos from "@/components/site/Projetos.jsx";
// @ts-ignore
import Coletivos from "@/components/site/Coletivos.jsx";
// @ts-ignore
import Impacto from "@/components/site/Impacto.jsx";
// @ts-ignore
import Footer from "@/components/site/Footer.jsx";

const desc =
  "Comunidade das Águas — centro cultural do Ibura, Recife. Ancestralidade afro-indígena, cultura popular e tecnologia social.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comunidade das Águas" },
      { name: "description", content: desc },
      { property: "og:title", content: "Comunidade das Águas" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Coletivos />
        <Impacto />
      </main>
      <Footer />
    </div>
  );
}
