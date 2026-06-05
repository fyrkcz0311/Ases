// ============ Página: Contacto ============
const HORARIOS = [
  { d: "Lunes a Viernes", h: "8:00 am – 8:00 pm" },
  { d: "Sábados",         h: "9:00 am – 2:00 pm" },
  { d: "Domingos",        h: "Cerrado" }
];

const FAQS = [
  {
    q: "¿Cuánto cuesta una asesoría de tesis?",
    a: "Los precios son referenciales: Proyecto desde S/ 350, Desarrollo desde S/ 900 y Tesis Integral desde S/ 1,800. El monto final depende del alcance, la carrera y los plazos. Solicita tu cotización exacta sin compromiso."
  },
  {
    q: "¿Cuánto tiempo demora el proceso?",
    a: "Depende del plan y la etapa de tu tesis. Un proyecto puede estar listo en 2–3 semanas; el desarrollo integral puede tomar de 1 a 3 meses. Te entregamos un cronograma desde la primera sesión."
  },
  {
    q: "¿Trabajan con todas las universidades de Chiclayo?",
    a: "Sí, trabajamos con UNPRG, USAT, USS, UTP, USMP y UCV, respetando los formatos y reglamentos de investigación de cada institución."
  },
  {
    q: "¿Los trabajos son 100% originales?",
    a: "Absolutamente. Todos los entregables pasan por control de originalidad con Turnitin. El trabajo se elabora a medida, sin copias ni reutilización de proyectos anteriores."
  },
  {
    q: "¿Atienden servicios fuera de tesis?",
    a: "Sí, somos un consorcio. También brindamos asesoría legal, contable, marketing, finanzas y recursos humanos. Escríbenos y te orientamos al especialista correcto."
  }
];

function ContactoHero(){
  return (
    <header className="page-hero" id="inicio">
      <div className="wrap">
        <span className="eyebrow light">Contáctanos</span>
        <h1>Estamos listos para ayudarte.</h1>
        <p>Cuéntanos lo que necesitas y uno de nuestros asesores se comunicará contigo de inmediato — sin compromiso y sin costo.</p>
        <div className="hero-btns">
          <a className="btn btn-red btn-lg" href={waLink("Hola Grupo ASES 👋, quiero información sobre sus servicios.")} target="_blank" rel="noopener">
            <Icon n="whatsapp" /> Escríbenos por WhatsApp
          </a>
          <a className="btn btn-ghost btn-lg" href={"tel:"+ASES.tel}>
            <Icon n="phone" /> {ASES.telDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

function AppContacto(){
  useReveal();
  return (
    <>
      <Navbar />
      <ContactoHero />

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Información de contacto</span>
            <h2>Múltiples formas de comunicarte.</h2>
            <p>Elige el canal que más te convenga. Respondemos rápido y siempre con la atención personalizada que mereces.</p>
          </div>

          <div className="contact-grid">
            {/* WhatsApp */}
            <a className="contact-card" href={waLink("Hola Grupo ASES 👋, quiero información sobre sus servicios.")} target="_blank" rel="noopener">
              <div className="cc-ic wa"><Icon n="whatsapp" /></div>
              <div>
                <h4>WhatsApp</h4>
                <span className="cc-val">{ASES.waDisplay}</span>
                <p>Escríbenos y recibe respuesta en minutos. Canal principal de atención.</p>
              </div>
            </a>

            {/* Teléfono */}
            <a className="contact-card" href={"tel:"+ASES.tel}>
              <div className="cc-ic"><Icon n="phone" /></div>
              <div>
                <h4>Teléfono</h4>
                <span className="cc-val">{ASES.telDisplay}</span>
                <p>Llámanos directamente en horario de atención.</p>
              </div>
            </a>

            {/* Dirección */}
            <div className="contact-card">
              <div className="cc-ic"><Icon n="pin" /></div>
              <div>
                <h4>Dirección</h4>
                <span className="cc-val">Chiclayo, Perú</span>
                <p>{ASES.dir}</p>
              </div>
            </div>

            {/* Horario */}
            <div className="contact-card">
              <div className="cc-ic"><Icon n="clock" /></div>
              <div>
                <h4>Horario de atención</h4>
                <div style={{marginTop:8}}>
                  {HORARIOS.map(h=>(
                    <div key={h.d} style={{display:'flex',justifyContent:'space-between',gap:16,marginBottom:7}}>
                      <span style={{fontWeight:600,fontSize:14,color:'var(--navy)'}}>{h.d}</span>
                      <span style={{fontSize:14,color:h.h==='Cerrado'?'var(--red)':'var(--muted)',fontWeight:h.h==='Cerrado'?700:500}}>{h.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec-head center reveal" style={{marginTop:20}}>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Respuestas rápidas.</h2>
            <p>Lo que más nos consultan. Si no encuentras lo que buscas, escríbenos directamente.</p>
          </div>
          <div className="faq-list">
            {FAQS.map((f,i)=>(
              <div className="faq-item reveal" key={i} style={{animationDelay:(i*55)+'ms'}}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsFloat />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<AppContacto />);
