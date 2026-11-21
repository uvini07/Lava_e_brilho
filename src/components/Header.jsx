import { useEffect, useState } from 'react'
import Glass from './Glass.jsx'
import { WA_LINK } from '../data.js'

const LINKS = [
  ['#servicos', 'Serviços'],
  ['#antes-depois', 'Antes & Depois'],
  ['#personalizacao', 'Personalização'],
  ['#contato', 'Contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <Glass className="nav">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <img src="./logo.jpg" alt="" />
          <span>Lava <em>&amp;</em> Brilho</span>
        </a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="btn btn--primary btn--sm nav-cta" href={WA_LINK} target="_blank" rel="noopener">Agendar</a>
        <button className="burger" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </Glass>
    </header>
  )
}
