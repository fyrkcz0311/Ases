import { createRoot } from 'react-dom/client'
import { useMicroInteractions, Navbar, Hero, Stats, Marquee, Servicios, Galeria, Acompanamiento } from './landing.jsx'
import { Proceso, NosotrosPreview, MapSection, Footer, WhatsFloat, MobileCTABar } from './landing2.jsx'

function App() {
  useMicroInteractions()
  return (
    <>
      <div id="scroll-sentinel" style={{ position: 'absolute', top: 0, height: '1px', width: '100%', pointerEvents: 'none' }}></div>
      <Navbar />
      <Hero />
      <Stats />
      <Marquee />
      <Servicios />
      <Galeria />
      <Acompanamiento />
      <Proceso />
      <NosotrosPreview />
      <MapSection />
      <Footer />
      <WhatsFloat />
      <MobileCTABar />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
