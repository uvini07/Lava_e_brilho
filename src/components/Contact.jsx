import Glass from './Glass.jsx'
import { WA_LINK, PHONE, INSTAGRAM, ADDRESS, MAPS_URL, MAPS_EMBED } from '../data.js'
import { WhatsIcon, PinIcon, InstaIcon, PhoneIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contato & localização</span>
          <h2>Seu carro está <span className="chrome">pronto?</span></h2>
          <p className="muted">Agende seu serviço e deixe o cuidado por nossa conta.</p>
        </div>

        <div className="contact-grid">
          <Glass className="contact-card reveal">
            <a className="contact-row" href={WA_LINK} target="_blank" rel="noopener">
              <span className="ci"><WhatsIcon /></span>
              <span><small>WhatsApp</small><b>{PHONE}</b></span>
            </a>
            <a className="contact-row" href={`tel:+5511981385123`}>
              <span className="ci"><PhoneIcon /></span>
              <span><small>Telefone</small><b>{PHONE}</b></span>
            </a>
            <a className="contact-row" href={INSTAGRAM.url} target="_blank" rel="noopener">
              <span className="ci"><InstaIcon /></span>
              <span><small>Instagram</small><b>{INSTAGRAM.handle}</b></span>
            </a>
            <a className="contact-row" href={MAPS_URL} target="_blank" rel="noopener">
              <span className="ci"><PinIcon /></span>
              <span><small>Endereço</small><b>{ADDRESS.line1}</b><em>{ADDRESS.line2}</em></span>
            </a>
            <a className="btn btn--primary btn--block" href={WA_LINK} target="_blank" rel="noopener">
              <WhatsIcon /> Agendar pelo WhatsApp
            </a>
          </Glass>

          <Glass className="map reveal">
            <iframe title="Mapa — Lava & Brilho" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a className="btn btn--glass btn--sm map-btn" href={MAPS_URL} target="_blank" rel="noopener">Abrir no Google Maps</a>
          </Glass>
        </div>
      </div>
    </section>
  )
}
