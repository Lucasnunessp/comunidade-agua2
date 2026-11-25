import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/site/Button'

// texto retirado da seção "Projetos" do site original

export default function Projetos() {
  return (
    <section id="projetos" className="border-t border-tinta/10 bg-white px-5 py-20 sm:px-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl rounded-2xl border border-tinta/20 bg-white p-6 shadow-sm transition-colors hover:border-barro-500 sm:p-10"
      >
        <h2 className="text-5xl font-light">Projetos.</h2>

        <p className="mt-8 text-base leading-8 text-tinta/80 sm:text-lg">
          Os projetos Egbé que Ensina e Feira do Troca são iniciativas integradas que envolvem a
          colaboração de todos os coletivos que compõem o Centro Cultural Comunidade das Águas.
          Esses projetos refletem a missão do Centro Cultural de promover a colaboração entre os
          coletivos, fortalecendo a comunidade por meio da troca de conhecimentos e experiências.
        </p>

        <Button asChild className="mt-6">
          <Link to="/projetos" target="_blank" rel="noopener noreferrer">
            Conheça os projetos <ExternalLink size={18} aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
