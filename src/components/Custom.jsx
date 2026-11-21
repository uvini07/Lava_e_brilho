import Glass from './Glass.jsx'
import { CUSTOM, waService } from '../data.js'
import { ArrowIcon } from './Icons.jsx'

export default function Custom() {
  return (
    <section className="section" id="personalizacao">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Sob consulta</span>
          <h2>Proteção e <span className="chrome">personalização.</span></h2>
        </div>
        <div className="custom-grid">
          {CUSTOM.map((c, i) => (
            <Glass as="a" interactive key={c.name} className="custom reveal" href={waService(c.name)} target="_blank" rel="noopener">
              <span className="num">0{i + 1}</span>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <span className="link">Consulte condições <ArrowIcon width={16} height={16} /></span>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  )
}
