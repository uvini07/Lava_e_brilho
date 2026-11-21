import { useEffect, useRef, useState } from 'react'
import Glass from './Glass.jsx'
import { WA_LINK, ADDRESS } from '../data.js'
import { WhatsIcon, StarIcon, ShieldIcon, PinIcon } from './Icons.jsx'

export default function Hero() {
  const video = useRef(null)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const v = video.current
    if (!v) return
    // pausa quando sai da tela (economiza bateria no celular)
    const io = new IntersectionObserver(([e]) => {
      if (!playing || v.ended) return
      e.isIntersecting ? v.play().catch(() => {}) : v.pause()
    }, { threshold: 0.2 })
    io.observe(v)
    return () => io.disconnect()
  }, [playing])

  const [ended, setEnded] = useState(false)
  const toggle = () => {
    const v = video.current
    if (ended) { v.currentTime = 0; setEnded(false) }
    if (v.paused) { v.play(); setPlaying(true) } else { v.pause(); setPlaying(false) }
  }

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
            Do sujo ao brilho de vitrine. Lavagem detalhada, higienização, polimento,
            vitrificação e proteção — para quem trata o carro como ele merece.
          </p>
          <div className="cta-row reveal">
            <a className="btn btn--primary" href={WA_LINK} target="_blank" rel="noopener">
              <WhatsIcon /> Agendar pelo WhatsApp
            </a>
            <a className="btn btn--glass" href="#servicos">Ver serviços</a>
          </div>
          <div className="hero-stats reveal">
            <div><b>13+</b><small>serviços</small></div>
            <span className="sep" />
            <div><b>5 anos</b><small>de proteção</small></div>
            <span className="sep" />
            <div>
              <b className="stars">{[...Array(5)].map((_, i) => <StarIcon key={i} width={14} height={14} />)}</b>
              <small>acabamento premium</small>
            </div>
          </div>
          <div className="hero-chips reveal">
            <Glass className="chip"><PinIcon /> {ADDRESS.line1} · Santo André</Glass>
          </div>
        </div>

        </div>
      <div className="hero-media" >
        <video
          ref={video}
          src="./hero.mp4"
          poster="./hero-poster.jpg"
          autoPlay muted playsInline preload="auto"
          onEnded={() => { setEnded(true); setPlaying(false) }}
          aria-label="Carro esportivo azul acendendo os faróis e passando de sujo para limpo e brilhante"
        />
        <div className="hero-media-fade" />
        <Glass className="float-card fc-1">
          <span className="fc-icon"><ShieldIcon width={18} height={18} /></span>
          <div><b>Vitrificação</b><small>brilho e proteção por 5 anos</small></div>
        </Glass>
      </div>
    </section>
  )
}
