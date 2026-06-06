function App(){
  useMicroInteractions();
  return (
    <>
      <div id="scroll-sentinel" style={{position:'absolute',top:0,height:'1px',width:'100%',pointerEvents:'none'}}></div>
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
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
