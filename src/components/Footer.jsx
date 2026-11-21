import { WA_LINK, PHONE, INSTAGRAM } from '../data.js'
import { WhatsIcon } from './Icons.jsx'
import Glass from './Glass.jsx'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-in">
          <div className="brand">
            <img src="./logo.jpg" alt="" />
            <span>Lava <em>&amp;</em> Brilho</span>
          </div>
          <div className="footer-links">
            <a href={INSTAGRAM.url} target="_blank" rel="noopener">{INSTAGRAM.handle}</a>
            <a href={WA_LINK} target="_blank" rel="noopener">{PHONE}</a>
          </div>
          <small>© {new Date().getFullYear()} Lava &amp; Brilho — Estética Automotiva. Santo André — SP.</small>
        </div>
      </footer>
      <Glass as="a" className="wa-float" href={WA_LINK} target="_blank" rel="noopener" aria-label="Agendar pelo WhatsApp">
        <WhatsIcon width={24} height={24} />
      </Glass>
    </>
  )
}
