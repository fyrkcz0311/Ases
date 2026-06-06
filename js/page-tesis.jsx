import { createRoot } from 'react-dom/client'
import { Icon } from './icons.jsx'
import { useMicroInteractions, Navbar, waLink } from './landing.jsx'
import { Proceso, CTA, Footer, WhatsFloat, MobileCTABar } from './landing2.jsx'
import { TesisExplorer } from './tesis.jsx'

function TesisPageHero() {
  return (
    <header className="page-hero" id="inicio">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Asesoría de Tesis · Chiclayo</span>
          <h1>Tu tesis, con acompañamiento profesional.</h1>
          <p>Selecciona tu universidad y carrera, conoce el costo y conéctate con un asesor por WhatsApp — en minutos, con tu información ya lista.</p>
          <div className="hero-btns">
            <a className="btn btn-red btn-lg" href={waLink("Hola Grupo ASES 👋, quiero información sobre Asesoría de Tesis.")} target="_blank" rel="noopener">
              <Icon n="whatsapp" /> Hablar con un asesor
            </a>
            <a className="btn btn-ghost btn-lg" href="#tesis">
              <Icon n="cap" /> Explorar carreras
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hv-img-wrap">
            <img
              src="img/tesis-hero.webp"
              alt="Estudiante universitario con asesoría de tesis profesional en Chiclayo"
              className="hv-img"
              width="600" height="450"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hv-badge">
            <div className="hv-badge-ic"><Icon n="cap" /></div>
            <div className="hv-badge-tx">
              <b>+5,000</b>
              <span>Tesis aprobadas</span>
            </div>
          </div>
          <div className="hv-chip">
            <span className="hv-dot"></span>
            Asesores en línea
          </div>
        </div>
      </div>
    </header>
  )
}

function AppTesis() {
  useMicroInteractions()
  return (
    <>
      <Navbar />
      <TesisPageHero />
      <TesisExplorer />
      <Proceso />
      <CTA />
      <Footer />
      <WhatsFloat />
      <MobileCTABar />
    </>
  )
}

createRoot(document.getElementById('root')).render(<AppTesis />)
