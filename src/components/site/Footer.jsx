import { Instagram, Mail, MapPin } from 'lucide-react'
import centroCultural from '@/assets/comunidade-centro-cultural.png'
import comunidadeAguas from '@/assets/comunidade-comunidade-das-aguas.png'

export default function Footer() {
  return (
    <footer id="contato" className="bg-tinta px-5 pt-16 pb-8 text-white sm:px-14">
      <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-3">
        <div>
          {/* Preserva as letras originais da identidade da comunidade. */}
          <img
            src={centroCultural}
            alt="Centro Cultural"
            width="536"
            height="51"
            className="h-auto w-[73%]"
          />
          <img
            src={comunidadeAguas}
            alt="Comunidade das Águas"
            width="732"
            height="60"
            className="mt-2 h-auto w-full"
          />
          <p className="mt-4 max-w-xs text-base text-white/70">
            Cultura, fotografia, pesquisa, mapeamento, educação, audiovisual e produção.
          </p>
        </div>

        <div className="space-y-3 text-base text-white/80">
          <p className="font-semibold text-white">Contato</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua%20Quarenta%20e%20Nove%2C%2040%2C%20Zumbi%20do%20Pacheco%2C%20Jaboat%C3%A3o%20dos%20Guararapes%2C%20PE%2C%20Brasil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 underline-offset-4 hover:underline"
            aria-label="Abrir endereço da Comunidade das Águas no Google Maps (nova aba)"
          >
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-barro-500" aria-hidden="true" />
            Rua Quarenta e Nove, 40 — Zumbi do Pacheco, Jaboatão dos Guararapes — PE
          </a>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-barro-500" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=c.c.comunidadedasaguas%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 break-all hover:underline"
            >
              c.c.comunidadedasaguas@gmail.com
            </a>
          </p>
        </div>

        <div className="text-base text-white/80">
          <p className="font-semibold text-white">Redes</p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://www.instagram.com/ccomunidadedasaguas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/30 p-3 hover:bg-barro-500"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-[1300px] text-xs text-white/50">
        © {new Date().getFullYear()} Comunidade das Águas
      </p>
    </footer>
  )
}
