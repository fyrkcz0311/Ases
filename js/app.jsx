import { createRoot } from 'react-dom/client'
import { useMicroInteractions, Navbar, Hero, Stats, Marquee, Servicios, Galeria, Acompanamiento } from './landing.jsx'
import { Proceso, NosotrosPreview, MapSection, Footer, WhatsFloat, MobileCTABar } from './landing2.jsx'

function App() {
  useMicroInteractions()
  return (
    <>
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
