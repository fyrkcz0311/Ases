// ============ Página: Asesoría de Tesis ============
function TesisPageHero(){
  return (
    <header className="page-hero" id="inicio">
      <div className="wrap">
        <span className="eyebrow light">Asesoría de Tesis · Chiclayo</span>
        <h1>Tu tesis, con acompañamiento profesional.</h1>
        <p>Selecciona tu universidad y carrera, elige tu plan y conéctate con un asesor por WhatsApp — en minutos, con tu información ya lista.</p>
        <div className="hero-btns">
          <a className="btn btn-red btn-lg" href={waLink("Hola Grupo ASES 👋, quiero información sobre Asesoría de Tesis.")} target="_blank" rel="noopener">
            <Icon n="whatsapp" /> Hablar con un asesor
          </a>
          <a className="btn btn-ghost btn-lg" href="#tesis">
            <Icon n="cap" /> Explorar carreras
          </a>
        </div>
      </div>
    </header>
  );
}

function AppTesis(){
  useMicroInteractions();
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
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<AppTesis />);
