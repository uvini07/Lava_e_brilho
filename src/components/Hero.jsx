import Glass from './Glass.jsx'
import { WA_LINK, ADDRESS } from '../data.js'
import { WhatsIcon, StarIcon, ShieldIcon, PinIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Glass className="pill reveal">
            <span className="dot" /> Estética automotiva · Santo André — SP
          </Glass>
          <h1 className="reveal">
            Seu carro merece <span className="chrome">o melhor.</span>
          </h1>
          <p className="lead reveal">
            Cuidado, proteção e brilho de verdade. Lavagem detalhada, higienização,
            polimento, vitrificação e muito mais — para quem trata o carro como ele merece.
          </p>
          <div className="cta-row reveal">
            <a className="btn btn--primary" href={WA_LINK} target="_blank" rel="noopener">
              <WhatsIcon /> Agendar pelo WhatsApp
            </a>
            <a className="btn btn--glass" href="#servicos">Ver serviços</a>
          </div>
          <div className="hero-chips reveal">
            <Glass className="chip"><ShieldIcon /> Vitrificação 5 anos</Glass>
            <Glass className="chip"><PinIcon /> {ADDRESS.line1}</Glass>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="halo" />
          <Glass className="logo-orb" interactive>
            <img src="./logo.jpg" alt="Logo Lava & Brilho — Estética Automotiva" />
          </Glass>
          <Glass className="float-card fc-1">
            <div className="stars">{[...Array(5)].map((_, i) => <StarIcon key={i} width={14} height={14} />)}</div>
            <small>Acabamento premium</small>
          </Glass>
          <Glass className="float-card fc-2">
            <b>13+</b>
            <small>serviços de estética</small>
          </Glass>
        </div>
      </div>
    </section>
  )
}
