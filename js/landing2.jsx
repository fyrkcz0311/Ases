// ============ Proceso ============
function Proceso(){
  useReveal();
  const pasos = [
    { t:"Elige tu carrera", d:"Selecciona tu universidad y carrera en nuestro explorador interactivo." },
    { t:"Diagnóstico inicial", d:"Conversamos por WhatsApp y evaluamos en qué etapa de tu tesis estás." },
    { t:"Plan a medida", d:"Definimos alcance, cronograma y un plan acorde a tu necesidad." },
    { t:"Acompañamiento total", d:"Te guiamos paso a paso, con originalidad garantizada, hasta sustentar." }
  ];
  return (
    <section className="section dark" id="proceso">
      <div className="wrap">
        <div className="sec-head center reveal">
          <h2>De la idea a la sustentación.</h2>
          <p>Un proceso claro y acompañado para que avances con confianza.</p>
        </div>
        <div className="proc-grid">
          {pasos.map((p,i)=>(
            <div className="proc reveal" key={p.t} style={{animationDelay:(i*80)+'ms'}}>
              <div className="proc-badge">{i+1}</div>
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

// ============ Nosotros (preview en landing) ============
function NosotrosPreview(){
  useReveal();
  const valores = [
    { ic:"shield", t:"Compromiso",    d:"Cada cliente es una responsabilidad personal." },
    { ic:"check",  t:"Originalidad",  d:"Trabajo 100% auténtico, libre de plagio." },
    { ic:"spark",  t:"Excelencia",    d:"Estándares altos en cada entregable." },
    { ic:"users",  t:"Cercanía",      d:"Trato personalizado y siempre disponibles." }
  ];
  return (
    <section className="section alt" id="nosotros">
      <div className="wrap">
        <div className="split-grid">
          <div className="split-text reveal">
            <span className="eyebrow">Quiénes somos</span>
            <h2 style={{marginTop:14}}>Un consorcio que pone tu resultado primero.</h2>
            <p style={{marginTop:16, color:'var(--muted)', fontSize:16, lineHeight:1.75}}>
              Grupo ASES reúne a especialistas en metodología, estadística, derecho, contabilidad y marketing. No somos un solo asesor: somos un equipo completo trabajando para que llegues a tu meta.
            </p>
            <div className="nos-valores">
              {valores.map(v=>(
                <div className="nos-val" key={v.t}>
                  <div className="nos-ic"><Icon n={v.ic} /></div>
                  <div>
                    <b>{v.t}</b>
                    <span>{v.d}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop:28}}>
              <a className="btn btn-navy btn-lg" href={waLink("Hola Grupo ASES, quiero conocer más sobre el equipo.")}><Icon n="whatsapp" /> Hablar con el equipo</a>
            </div>
          </div>
          <div className="split-img reveal">
            <img src="img/team.png" alt="Equipo de profesionales Grupo ASES en Chiclayo" />
          </div>
        </div>
      </div>
    </section>
  );
}
window.NosotrosPreview = NosotrosPreview;

// ============ Mapa / Ubicación ============
function MapSection(){
  useReveal();
  return (
    <section className="section map-section" id="ubicacion">
      <div className="wrap">
        <div className="map-grid">
          <div className="map-info reveal">
            <span className="eyebrow">Encuéntranos</span>
            <h2 style={{marginTop:14}}>Estamos en el corazón de Chiclayo.</h2>
            <p style={{marginTop:16,color:'var(--muted)',fontSize:16,lineHeight:1.75}}>
              Visítanos en nuestra oficina o coordina una consulta virtual. Atendemos de lunes a sábado para adaptarnos a tu disponibilidad.
            </p>
            <div className="map-data">
              <div className="map-row">
                <span className="map-ic"><Icon n="pin" /></span>
                <div>
                  <b>Dirección</b>
                  <span>{ASES.dir}</span>
                </div>
              </div>
              <div className="map-row">
                <span className="map-ic"><Icon n="whatsapp" /></span>
                <div>
                  <b>WhatsApp</b>
                  <a href={waLink("Hola Grupo ASES, quiero una asesoría.")} target="_blank" rel="noopener">{ASES.waDisplay}</a>
                </div>
              </div>
              <div className="map-row">
                <span className="map-ic"><Icon n="phone" /></span>
                <div>
                  <b>Teléfono</b>
                  <a href={"tel:"+ASES.tel}>{ASES.telDisplay}</a>
                </div>
              </div>
            </div>
            <div style={{marginTop:28,display:'flex',gap:12,flexWrap:'wrap'}}>
              <a className="btn btn-red btn-lg" href={waLink("Hola Grupo ASES, quiero una asesoría inicial gratuita.")} target="_blank" rel="noopener"><Icon n="whatsapp" /> Escríbenos</a>
              <a className="btn btn-ghost btn-lg" href="#ubicacion"><Icon n="arrow" /> Ver ubicación</a>
            </div>
          </div>
          <div className="map-embed reveal">
            <iframe
              title="Ubicación Grupo ASES"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6898.2456082076305!2d-79.8424056857272!3d-6.769630134564445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef8c60eaf959%3A0xaa419d47be8b1ee8!2sGrupo%20Ases!5e0!3m2!1ses-419!2sus!4v1780719950163!5m2!1ses-419!2sus"
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
window.MapSection = MapSection;

// ============ CTA ============
function CTA(){
  useReveal();
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta reveal">
          <h2>Demos el siguiente paso, juntos.</h2>
          <p>Cuéntanos en qué etapa estás y recibe una consulta inicial sin costo. Estamos listos para acompañarte en cada paso de tu investigación.</p>
          <div className="cta-btns">
            <a className="btn btn-wa btn-lg" href={waLink("Hola Grupo ASES, quiero una asesoría inicial gratuita para mi tesis.")} target="_blank" rel="noopener"><Icon n="whatsapp" /> Escríbenos al WhatsApp</a>
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
            <a href="tesis.html">Asesoría de Tesis</a>
            <a href={waLink("Hola Grupo ASES, necesito asesoría legal.")}>Asesoría Legal</a>
            <a href={waLink("Hola Grupo ASES, necesito asesoría contable.")}>Asesoría Contable</a>
            <a href={waLink("Hola Grupo ASES, necesito marketing y publicidad.")}>Marketing y Publicidad</a>
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
            <a href={waLink("Hola Grupo ASES")} target="_blank" rel="noopener"><Icon n="whatsapp" /> {ASES.waDisplay}</a>
            <a href={"tel:"+ASES.tel}><Icon n="phone" /> {ASES.telDisplay}</a>
            <div className="fi"><Icon n="pin" /> {ASES.dir}</div>
            <div className="fi"><Icon n="globe" /> {ASES.web}</div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Grupo ASES - Consorcio de Asesores. Todos los derechos reservados.</span>
          <span>Hecho con compromiso en Chiclayo, Peru</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

// ============ Botón flotante WhatsApp ============
function WhatsFloat(){
  return (
    <a className="wa-float" href={waLink("Hola Grupo ASES, quiero información.")} target="_blank" rel="noopener" aria-label="WhatsApp">
      <Icon n="whatsapp" />
    </a>
  );
}
window.WhatsFloat = WhatsFloat;
