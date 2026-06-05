function App(){
  const tesisRef = React.useRef(null);
  function goTesis(){
    const el = document.getElementById('tesis');
    if(el){ window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior:'smooth' }); }
  }
  return (
    <>
      <Navbar />
      <Hero onGoTesis={goTesis} />
      <Marquee />
      <Servicios onGoTesis={goTesis} />
      <TesisExplorer />
      <Proceso />
      <CTA />
      <Footer />
      <WhatsFloat />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
