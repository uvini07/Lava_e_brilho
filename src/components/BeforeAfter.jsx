import { useRef, useState } from 'react'
import Glass from './Glass.jsx'

export default function BeforeAfter() {
  const wrap = useRef(null)
  const [pct, setPct] = useState(50)
  const dragging = useRef(false)

  const move = (clientX) => {
    const r = wrap.current.getBoundingClientRect()
    setPct(Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100)))
  }
  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setPct((p) => Math.max(2, p - 4))
    if (e.key === 'ArrowRight') setPct((p) => Math.min(98, p + 4))
  }

  return (
    <section className="section" id="antes-depois">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Transformação real</span>
          <h2>Veja a <span className="chrome">diferença.</span></h2>
          <p className="muted">Arraste o controle para comparar o antes e o depois.</p>
        </div>

        <Glass className="ba-frame reveal">
          <div
            ref={wrap}
            className="ba"
            onPointerDown={(e) => { dragging.current = true; wrap.current.setPointerCapture(e.pointerId); move(e.clientX) }}
            onPointerMove={(e) => dragging.current && move(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <img src="./antes.jpg" alt="BMW antes da lavagem detalhada, com poeira e sujeira acumulada na pintura" draggable="false" />
            <img src="./depois.jpg" alt="Mesmo BMW após a lavagem detalhada e proteção, com pintura limpa e brilhante" draggable="false" style={{ clipPath: `inset(0 0 0 ${pct}%)` }} />
            <Glass className="ba-label ba-label--l">Antes</Glass>
            <Glass className="ba-label ba-label--r">Depois</Glass>
            <div className="ba-line" style={{ left: `${pct}%` }}>
              <Glass
                className="ba-knob"
                role="slider"
                tabIndex={0}
                aria-label="Comparar antes e depois"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pct)}
                onKeyDown={onKey}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 6-6 6 6 6M15 6l6 6-6 6" /></svg>
              </Glass>
            </div>
          </div>
        </Glass>
      </div>
    </section>
  )
}
