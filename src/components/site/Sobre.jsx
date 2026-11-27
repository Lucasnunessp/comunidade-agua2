import { motion } from 'framer-motion'

// texto retirado da seção "Sobre Nós" do site original
export default function Sobre() {
  return (
    <section id="sobre" className="papel px-5 py-20 sm:px-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-6xl font-light sm:text-7xl">Sobre Nós.</h2>

          <p className="mt-8 text-xl leading-9 text-tinta/80 sm:text-2xl sm:leading-10">
            O Centro Cultural Comunidade das Águas é uma iniciativa que reúne quatro coletivos e
            grupos, todos comprometidos com a promoção da cultura e o bem-estar da comunidade.
          </p>
          <p className="mt-4 text-xl leading-9 text-tinta/80 sm:text-2xl sm:leading-10">
            Cada um desses grupos realiza projetos que impactam positivamente a comunidade. Além
            disso, o Centro Cultural também conta com dois projetos em andamento:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-xl leading-9 text-tinta/80 sm:text-2xl sm:leading-10">
            <li>
              <span className="font-semibold text-tinta">Feira do Troca:</span> um espaço de estudo
              que apoia pessoas que desejam ingressar ou permanecer na universidade.
            </li>
            <li>
              <span className="font-semibold text-tinta">Egbé que Ensina:</span> projeto voltado para
              a educação social de crianças e adolescentes.
            </li>
          </ul>

          <p className="mt-4 text-xl leading-9 text-tinta/80 sm:text-2xl sm:leading-10">
            Por meio dessas iniciativas, o Centro Cultural Comunidade das Águas busca fortalecer a
            identidade cultural e promover o desenvolvimento social na região.
          </p>
        </div>

        {/* Espaço reservado para a imagem que será adicionada ao lado do texto. */}
        <div className="hidden min-h-[420px] lg:block" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
