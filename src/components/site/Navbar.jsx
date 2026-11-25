import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from './Button'
import { Search, User } from 'lucide-react'
import logoOriginal from '@/assets/comunidade-logo-original.png'

const links = [
  { to: '/', label: 'Início' },
  { to: '/quem-somos', label: 'Quem somos' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/noticias-e-atividades', label: 'Notícias e atividades' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 0)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b bg-white transition-colors motion-reduce:transition-none ${scrolled ? 'border-tinta/15' : 'border-transparent'}`}>
      <div className="mx-auto flex max-w-[1500px] items-start justify-between gap-4 px-5 py-3 sm:px-14">
        <Link to="/" aria-label="Comunidade das Águas">
          <img src={logoOriginal} alt="Logo original da Comunidade das Águas" width="245" height="130" className="h-24 w-auto max-w-full object-contain sm:h-28" />
        </Link>

        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-3">
            {/* busca (só visual no protótipo) */}
            <label className="hidden items-center rounded-lg border border-tinta px-4 py-1 sm:flex">
              <input
                type="text"
                placeholder="Search"
                className="w-28 bg-transparent text-sm outline-none placeholder:text-tinta/70"
              />
              <Search className="h-4 w-4" />
            </label>

            <Button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="min-h-0 px-8 py-2 text-sm text-primary-foreground"
            >
              MENU
            </Button>
          </div>

          <Link to="/contato" className="hidden items-center gap-2 text-sm text-tinta/80 sm:flex hover:text-barro-600">
            <User className="h-6 w-6" /> Apoie o Centro
          </Link>
        </div>
      </div>

      {open && (
        <nav id="site-menu" aria-label="Menu principal" className="absolute right-5 top-[4.5rem] w-56 rounded-2xl border border-tinta/10 bg-barro-500/70 p-3 text-tinta shadow-lg backdrop-blur-sm sm:right-14">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-white px-4 py-1.5 text-base font-medium text-tinta shadow-sm transition-colors hover:bg-papel"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
