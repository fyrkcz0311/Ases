// ============ Página: Nosotros ============
const VALORES = [
  { ic:"shield",   t:"Compromiso",         d:"Cada cliente es una responsabilidad personal. Nos comprometemos con tu objetivo como si fuera el nuestro." },
  { ic:"check",    t:"Originalidad",        d:"Trabajo auténtico, sin atajos. Garantizamos que cada entregable es 100% original y libre de plagio." },
  { ic:"spark",    t:"Excelencia",          d:"Estándares altos en todo lo que hacemos. La calidad no es opcional, es nuestra firma profesional." },
  { ic:"users",    t:"Cercanía",            d:"Un trato personalizado y humano. Siempre disponibles para escucharte y orientarte sin tecnicismos." },
  { ic:"scale",    t:"Ética Profesional",   d:"Actuamos con transparencia e integridad en cada etapa del servicio, sin excepciones ni compromisos." },
  { ic:"chart",    t:"Resultados",          d:"No solo asesoramos — impulsamos resultados concretos y medibles para cada uno de nuestros clientes." }
];

const POR_QUE = [
  { n:"01", t:"Equipo multidisciplinario",  d:"Especialistas en distintas áreas bajo un mismo techo. El experto adecuado para tu problema específico." },
  { n:"02", t:"Atención personalizada",     d:"Sin plantillas genéricas. Tu caso tiene su propio plan, adaptado a tus necesidades y plazos reales." },
  { n:"03", t:"Comunicación directa",       d:"Siempre disponibles por WhatsApp. Respuesta rápida y seguimiento constante en cada etapa." },
  { n:"04", t:"Resultados garantizados",    d:"Nos comprometemos con el resultado. Si hay observaciones, las levantamos sin costo adicional." }
];

function NosotrosHero(){
  return (
    <header className="page-hero" id="inicio">
      <div className="wrap">
        <span className="eyebrow light">Quiénes somos</span>
        <h1>Comprometidos con tu éxito desde el primer día.</h1>
        <p>Grupo ASES es un consorcio multidisciplinario de asesores fundado en Chiclayo, especializado en brindar soluciones integrales a personas, estudiantes y empresas de la región norte del Perú.</p>
        <div className="hero-btns">
          <a className="btn btn-red btn-lg" href={waLink("Hola Grupo ASES 👋, quiero información sobre sus servicios.")} target="_blank" rel="noopener">
            <Icon n="whatsapp" /> Contáctanos
          </a>
          <a className="btn btn-ghost btn-lg" href="servicios.html">
            <Icon n="arrow" /> Ver servicios
          </a>
        </div>
      </div>
    </header>
  );
}

function AppNosotros(){
  useReveal();
  return (
    <>
      <Navbar />
      <NosotrosHero />

      {/* Misión y Visión */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Nuestra esencia</span>
            <h2>Propósito y dirección.</h2>
            <p>Lo que nos mueve cada día y el horizonte hacia el que apuntamos como organización.</p>
          </div>
          <div className="mv-grid reveal">
            <div className="mv-card">
              <span className="mv-tag">Misión</span>
              <h3>¿Por qué existimos?</h3>
              <p>Brindar soluciones integrales, personalizadas y de alta calidad a personas y empresas del norte del Perú, impulsando su desarrollo a través de asesoría especializada, ética y comprometida con el resultado.</p>
            </div>
            <div className="mv-card dark-card">
              <span className="mv-tag">Visión</span>
              <h3>¿Hacia dónde vamos?</h3>
              <p>Convertirnos en el consorcio de asesores más confiable y reconocido del norte del Perú, siendo la primera opción para quienes buscan excelencia profesional, cercanía humana y resultados reales.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-strip reveal">
            <div>
              <div className="stat-num">+5,000</div>
              <div className="stat-lbl">Clientes satisfechos</div>
            </div>
            <div>
              <div className="stat-num">+10</div>
              <div className="stat-lbl">Años de experiencia</div>
            </div>
            <div>
              <div className="stat-num">6</div>
              <div className="stat-lbl">Universidades atendidas</div>
            </div>
            <div>
              <div className="stat-num">100%</div>
              <div className="stat-lbl">Trabajo original</div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Nuestros valores</span>
            <h2>Lo que nos define.</h2>
            <p>Principios que guían cada servicio, cada entregable y cada relación con nuestros clientes.</p>
          </div>
          <div className="values-grid">
            {VALORES.map((v,i)=>(
              <div className="value-card reveal" key={v.t} style={{animationDelay:(i*60)+'ms'}}>
                <div className="v-ic"><Icon n={v.ic} /></div>
                <h4>{v.t}</h4>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="section dark" id="diferencias">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow light">¿Por qué elegirnos?</span>
            <h2>La diferencia está en los detalles.</h2>
            <p>No somos una sola persona — somos un consorcio. Eso significa que tienes un equipo completo trabajando para ti.</p>
          </div>
          <div className="proc-grid">
            {POR_QUE.map((p,i)=>(
              <div className="proc reveal" key={p.n} style={{animationDelay:(i*80)+'ms'}}>
                <div className="pn">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
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
ReactDOM.createRoot(document.getElementById('root')).render(<AppNosotros />);
