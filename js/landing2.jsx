// ============ Proceso ============
function Proceso(){
  useReveal();
  const pasos = [
    { n:"01", t:"Elige tu carrera", d:"Selecciona tu universidad y carrera en nuestro explorador interactivo." },
    { n:"02", t:"Diagnóstico gratis", d:"Conversamos por WhatsApp y evaluamos en qué etapa de tu tesis estás." },
    { n:"03", t:"Plan a medida", d:"Definimos alcance, cronograma y un plan acorde a tu necesidad." },
    { n:"04", t:"Acompañamiento", d:"Te guiamos paso a paso, con originalidad garantizada, hasta sustentar." }
  ];
  return (
    <section className="section dark" id="proceso">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow light">Cómo trabajamos</span>
          <h2>De la idea a la sustentación.</h2>
          <p>Un proceso claro y acompañado para que avances con confianza.</p>
        </div>
        <div className="proc-grid">
          {pasos.map((p,i)=>(
            <div className="proc reveal" key={p.n} style={{animationDelay:(i*80)+'ms'}}>
              <div className="pn">{p.n}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Proceso = Proceso;

// ============ CTA ============
function CTA(){
  useReveal();
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta reveal">
          <span className="eyebrow light" style={{justifyContent:'center',color:'#fff'}}>Tu éxito, nuestra misión</span>
          <h2 style={{marginTop:14}}>Demos el siguiente paso, juntos.</h2>
          <p>Cuéntanos en qué etapa estás y recibe una asesoría inicial sin costo. Estamos listos para acompañarte y llevar tu proyecto al siguiente nivel.</p>
          <div className="cta-btns">
            <a className="btn btn-wa btn-lg" href={waLink("Hola Grupo ASES 👋, quiero una asesoría inicial gratuita para mi tesis.")} target="_blank" rel="noopener"><Icon n="whatsapp" /> Escríbenos al WhatsApp</a>
            <a className="btn btn-ghost btn-lg" href={"tel:"+ASES.tel}><Icon n="phone" /> {ASES.telDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;

// ============ Footer ============
function Footer(){
  return (
    <footer className="footer" id="contacto">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo dark />
            <p>Consorcio de asesores en Chiclayo. Soluciones integrales para personas y empresas: tesis, legal, contable y marketing.</p>
          </div>
          <div className="foot-col">
            <h5>Servicios</h5>
            <a href="#tesis">Asesoría de Tesis</a>
            <a href="#servicios">Asesoría Legal</a>
            <a href="#servicios">Asesoría Contable</a>
            <a href="#servicios">Marketing y Publicidad</a>
          </div>
          <div className="foot-col">
            <h5>Universidades</h5>
            {(window.UNIVERSIDADES||[]).map(u=>(
              <a href="tesis.html" key={u.id} className="foot-uni-link">
                <img src={u.logo} alt={u.sigla} className="foot-uni-logo" />
                {u.sigla}
              </a>
            ))}
          </div>
          <div className="foot-col">
            <h5>Contacto</h5>
            <a href={waLink("Hola Grupo ASES 👋")} target="_blank" rel="noopener"><Icon n="whatsapp" /> {ASES.waDisplay}</a>
            <a href={"tel:"+ASES.tel}><Icon n="phone" /> {ASES.telDisplay}</a>
            <div className="fi"><Icon n="pin" /> {ASES.dir}</div>
            <div className="fi"><Icon n="globe" /> {ASES.web}</div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Grupo ASES — Consorcio de Asesores. Todos los derechos reservados.</span>
          <span>Hecho con compromiso en Chiclayo, Perú 🇵🇪</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

// ============ Botón flotante WhatsApp ============
function WhatsFloat(){
  return (
    <a className="wa-float" href={waLink("Hola Grupo ASES 👋, quiero información.")} target="_blank" rel="noopener" aria-label="WhatsApp">
      <Icon n="whatsapp" />
    </a>
  );
}
window.WhatsFloat = WhatsFloat;
