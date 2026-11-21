import Glass from './Glass.jsx'
import { waService } from '../data.js'
import { ShieldIcon } from './Icons.jsx'

export default function Highlight() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Glass className="highlight reveal" interactive>
          <div className="highlight-icon"><ShieldIcon width={34} height={34} /></div>
          <div>
            <span className="eyebrow">Proteção definitiva</span>
            <h2>5 anos de <span className="chrome">proteção.</span></h2>
            <p>Vitrificação com brilho profundo e resistência contra sol, chuva e contaminantes.</p>
          </div>
          <div className="highlight-cta">
            <div className="price price--lg"><small className="from">a partir de</small><span><small>R$</small>1.100</span></div>
            <a className="btn btn--primary" href={waService('Vitrificação — 5 anos')} target="_blank" rel="noopener">Quero proteger meu carro</a>
          </div>
        </Glass>
      </div>
    </section>
  )
}
