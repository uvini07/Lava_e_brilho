import { useState } from 'react'
import Glass from './Glass.jsx'
import { CATEGORIES, SERVICES, waService } from '../data.js'
import { ArrowIcon } from './Icons.jsx'

export default function Services() {
  const [cat, setCat] = useState('todos')
  const list = cat === 'todos' ? SERVICES : SERVICES.filter((s) => s.cat === cat)
  const label = (id) => CATEGORIES.find((c) => c.id === id)?.label

  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Catálogo de serviços</span>
          <h2>Escolha o nível <span className="chrome">do seu carro.</span></h2>
        </div>

        <Glass className="tabs reveal" role="tablist">
          {CATEGORIES.map((c) => (
            <button key={c.id} role="tab" aria-selected={cat === c.id} className={cat === c.id ? 'is-active' : ''} onClick={() => setCat(c.id)}>
              {c.label}
            </button>
          ))}
        </Glass>

        <div className="cards" key={cat}>
          {list.map((s, i) => (
            <Glass as="article" interactive key={s.name} className={`card ${s.featured ? 'card--featured' : ''}`} style={{ animationDelay: `${i * 45}ms` }}>
              <div className="card-top">
                <span className="tag">{label(s.cat)}</span>
                {s.featured && <span className="tag tag--hot">Mais pedido</span>}
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className="card-foot">
                <div className="price">
                  {s.from && <small className="from">a partir de</small>}
                  <span><small>R$</small>{s.price}</span>
                </div>
                <a className="icon-btn" href={waService(s.name)} target="_blank" rel="noopener" aria-label={`Agendar ${s.name}`}>
                  <ArrowIcon />
                </a>
              </div>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  )
}
