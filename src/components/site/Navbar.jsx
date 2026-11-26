import { useEffect, useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from './Button'
import { Search, User, X } from 'lucide-react'
import logoOriginal from '@/assets/comunidade-logo-original.png'

const links = [
  { to: '/', label: 'Início' },
  { to: '/quem-somos', label: 'Quem somos' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/noticias-e-atividades', label: 'Notícias e atividades' },
  { to: '/contato', label: 'Contato' },
]

const searchItems = [
  { title: 'Início', description: 'Página inicial da Comunidade das Águas', to: '/', keywords: 'home comunidade das águas centro cultural ibura recife' },
  { title: 'Quem somos', description: 'Conheça a Comunidade das Águas e sua história', to: '/quem-somos', keywords: 'sobre história missão ancestralidade cultura afro indígena' },
  { title: 'Projetos', description: 'Conheça os projetos desenvolvidos pela comunidade', to: '/projetos', keywords: 'projetos iniciativas ações' },
  { title: 'Feira do Troca', description: 'Educação, preparação e acesso à universidade', to: '/projetos', keywords: 'feira troca estudo universidade ensino educação' },
  { title: 'Egbé que Ensina', description: 'Educação social para crianças e adolescentes', to: '/projetos', keywords: 'egbe ensina crianças adolescentes aprendizagem formação' },
  { title: 'Coletiva Periféricas', description: 'Comunicação, jornalismo, pesquisa e mapeamento', to: '/coletivos/coletiva-perifericas', keywords: 'coletiva periféricas comunicação jornalismo dados pesquisa mapeamento' },
  { title: 'Espaço Cultural das Marias', description: 'Produção audiovisual, fotografia e cultura periférica', to: '/coletivos/espaco-cultural-das-marias', keywords: 'espaço cultural marias audiovisual fotografia artistas negros periferia cultura favela' },
  { title: "Terreiro Egbé Omo L'Omi", description: 'Espiritualidade, acolhimento e ações sociais', to: '/coletivos/terreiro-egbe-omo-lomi', keywords: 'terreiro egbe omo omi religião espiritualidade saúde cestas básicas' },
  { title: 'Grupo Abre Caminho', description: 'Fomento à cultura popular, percussão e música', to: '/coletivos/grupo-abre-caminho', keywords: 'grupo abre caminho percussão música cultura popular' },
  { title: 'Notícias e atividades', description: 'Acompanhe novidades e atividades', to: '/noticias-e-atividades', keywords: 'notícias atividades eventos agenda novidades' },
  { title: 'Contato', description: 'Entre em contato com a Comunidade das Águas', to: '/contato', keywords: 'contato falar endereço telefone email' },
]

function normalize(value) {
  return value
    .toLocaleLowerCase('pt-BR')
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .trim()
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  const results = useMemo(() => {
    const query = normalize(search)
    if (!query) return []
    return searchItems.filter((item) =>
      normalize(`${item.title} ${item.description} ${item.keywords}`).includes(query)
    ).slice(0, 6)
  }, [search])

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 0)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const closeSearch = () => {
    setSearch('')
    setSearchOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 border-b bg-white transition-colors motion-reduce:transition-none ${scrolled ? 'border-tinta/15' : 'border-transparent'}`}>
      <div className="mx-auto flex max-w-[1500px] items-start justify-between gap-4 px-5 py-3 sm:px-14">
        <Link to="/" aria-label="Comunidade das Águas" onClick={closeSearch}>
          <img src={logoOriginal} alt="Logo original da Comunidade das Águas" width="245" height="130" className="h-24 w-auto max-w-full object-contain sm:h-28" />
        </Link>

        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <form
                role="search"
                onSubmit={(event) => {
                  event.preventDefault()
                  if (results.length > 0) {
                    window.location.href = results[0].to
                    closeSearch()
                  } else {
                    setSearchOpen(true)
                  }
                }}
                className="flex items-center rounded-lg border border-tinta px-3 py-2"
              >
                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value)
                    setSearchOpen(true)
                  }}
                  onFocus={() => setSearchOpen(true)}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') closeSearch()
                  }}
                  placeholder="Pesquisar"
                  aria-label="Pesquisar no site"
                  aria-expanded={searchOpen && Boolean(search)}
                  aria-controls="search-results"
                  className="w-36 bg-transparent text-sm text-tinta outline-none placeholder:text-tinta/70"
                />
                {search ? (
                  <button type="button" onClick={closeSearch} aria-label="Limpar pesquisa" className="text-tinta/70 hover:text-tinta">
                    <X className="h-4 w-4" />
                  </button>
                ) : (
                  <Search className="h-4 w-4 text-tinta" aria-hidden="true" />
                )}
              </form>

              {searchOpen && search.trim() && (
                <div id="search-results" className="absolute right-0 top-full z-[60] mt-2 max-h-80 w-80 overflow-y-auto rounded-xl border border-tinta/15 bg-white p-2 shadow-xl" role="listbox" aria-label="Resultados da pesquisa">
                  {results.length > 0 ? results.map((item) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      onClick={closeSearch}
                      className="block rounded-lg px-3 py-2 text-left transition-colors hover:bg-papel focus-visible:bg-papel focus-visible:outline-none"
                      role="option"
                    >
                      <span className="block text-sm font-semibold text-tinta">{item.title}</span>
                      <span className="mt-0.5 block text-xs text-tinta/70">{item.description}</span>
                    </Link>
                  )) : (
                    <p className="px-3 py-4 text-sm text-tinta/70">Nenhum resultado encontrado para “{search}”.</p>
                  )}
                </div>
              )}
            </div>

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
