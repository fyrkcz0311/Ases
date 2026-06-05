// ============ Página: Servicios ============
const { useState: uSS } = React;

const SERVICIOS_DETAIL = [
  {
    id: "tesis", ic: "cap", feat: true,
    t: "Asesoría de Tesis",
    d: "Acompañamiento profesional desde el primer borrador hasta la sustentación. Trabajamos con las 6 principales universidades de Chiclayo y todas sus carreras, respetando cada formato institucional.",
    items: [
      "Proyecto de tesis: planteamiento, marco teórico y metodología",
      "Desarrollo completo: resultados, análisis estadístico y conclusiones",
      "Control de originalidad con Turnitin — antiplagio garantizado",
      "Preparación y diapositivas para la sustentación",
      "Levantamiento de observaciones del jurado sin costo adicional",
      "Asesor personal asignado según tu carrera y universidad"
    ],
    hl_title: "Planes disponibles",
    hl_items: ["Proyecto de Tesis — desde S/ 350","Desarrollo de Tesis — desde S/ 900","Tesis Integral — desde S/ 1,800"],
    cta: "Explorar carreras",
    href: "tesis.html"
  },
  {
    id: "legal", ic: "scale", feat: false,
    t: "Asesoría Legal",
    d: "Soluciones jurídicas confiables y accesibles para personas naturales y empresas. Protege tus derechos y actúa con seguridad en cada decisión legal.",
    items: [
      "Revisión y elaboración de contratos",
      "Constitución y formalización de empresas (SAC, SRL, EIRL)",
      "Asesoría en derecho laboral y civil",
      "Resolución de conflictos y conciliación extrajudicial",
      "Trámites notariales y registrales ante SUNARP",
      "Consultas legales puntuales"
    ],
    hl_title: "¿Cuándo consultarnos?",
    hl_items: ["Antes de firmar cualquier contrato","Al iniciar o formalizar tu negocio","Ante conflictos laborales o civiles"],
    cta: "Consultar ahora",
    href: null
  },
  {
    id: "contable", ic: "calc", feat: false,
    t: "Asesoría Contable y Tributaria",
    d: "Mantén tu contabilidad en orden, cumple con tus obligaciones tributarias y toma decisiones financieras con datos precisos y confiables.",
    items: [
      "Contabilidad general para MYPES y empresas",
      "Declaraciones mensuales y anuales ante SUNAT",
      "Facturación electrónica y libros contables electrónicos",
      "Elaboración de planilla de remuneraciones",
      "Regularización tributaria y fraccionamientos",
      "Cierre contable anual e informes financieros"
    ],
    hl_title: "Sectores que atendemos",
    hl_items: ["Empresas comerciales y de servicios","Profesionales independientes (4ta. categoría)","Negocios familiares y MYPES"],
    cta: "Consultar ahora",
    href: null
  },
  {
    id: "marketing", ic: "mega", feat: false,
    t: "Marketing y Publicidad",
    d: "Estrategias creativas y efectivas para que tu marca destaque, atraiga clientes y genere resultados medibles tanto en el mundo digital como físico.",
    items: [
      "Diseño de identidad de marca y branding completo",
      "Gestión y creación de contenido para redes sociales",
      "Publicidad digital: Meta Ads, Google Ads, TikTok Ads",
      "Diseño gráfico y material publicitario",
      "Fotografía y video para negocios y productos",
      "Plan de marketing digital personalizado"
    ],
    hl_title: "Canales que trabajamos",
    hl_items: ["Instagram · Facebook · TikTok","Google Business · Google Ads","WhatsApp Business y automatización"],
    cta: "Consultar ahora",
    href: null
  },
  {
    id: "finanzas", ic: "chart", feat: false,
    t: "Finanzas y Consultoría Empresarial",
    d: "Decisiones financieras inteligentes para que tu empresa crezca con solidez. Análisis, planificación y estrategias adaptadas a tu realidad y objetivos.",
    items: [
      "Evaluación y estructuración de proyectos de inversión",
      "Análisis financiero y proyección de flujo de caja",
      "Elaboración y control de presupuestos empresariales",
      "Diagnóstico y reestructuración financiera",
      "Diseño de indicadores de gestión (KPIs)",
      "Consultoría para acceso a financiamiento bancario"
    ],
    hl_title: "Ideal para",
    hl_items: ["Startups y nuevos negocios","Empresas en proceso de crecimiento","Proyectos de inversión y expansión"],
    cta: "Consultar ahora",
    href: null
  },
  {
    id: "rrhh", ic: "users", feat: false,
    t: "Recursos Humanos",
    d: "Atrae, desarrolla y retiene el talento que tu organización necesita. Gestión humana profesional, ágil y alineada con los objetivos del negocio.",
    items: [
      "Reclutamiento y selección de personal",
      "Elaboración de perfiles de puesto y organigramas",
      "Evaluación de desempeño y retroalimentación",
      "Capacitación y desarrollo organizacional",
      "Diseño de remuneraciones y beneficios",
      "Diagnóstico de clima organizacional"
    ],
    hl_title: "Nuestro enfoque",
    hl_items: ["Procesos ágiles y orientados a resultados","Alineados con la legislación laboral peruana","Adaptados al tamaño y sector de tu empresa"],
    cta: "Consultar ahora",
    href: null
  }
];

function ServicioCard({ s }){
  const msg = "Hola Grupo ASES 👋, quiero información sobre el servicio de *"+s.t+"*.";
  const dest = s.href || waLink(msg);
  const target = s.href ? '_self' : '_blank';
  return (
    <div className={"serv-detail-card"+(s.feat?" feat":"")}>
      <div>
        {s.feat && <span className="serv-tag">Servicio destacado</span>}
        <div className="sd-ic" style={{marginTop: s.feat?14:0}}><Icon n={s.ic} /></div>
        <h3>{s.t}</h3>
        <p>{s.d}</p>
        <a className={"btn "+(s.feat?"btn-red":"btn-navy")} href={dest} target={target} rel="noopener">
          {s.href ? <><Icon n="arrow" /> {s.cta}</> : <><Icon n="whatsapp" /> {s.cta}</>}
        </a>
      </div>
      <div>
        <div className="sd-highlight">
          <h5>{s.hl_title}</h5>
          <ul className="serv-list">
            {s.hl_items.map(h=><li key={h}><Icon n="check"/>{h}</li>)}
          </ul>
        </div>
        <ul className="serv-list">
          {s.items.map(it=><li key={it}><Icon n="check"/>{it}</li>)}
        </ul>
      </div>
    </div>
  );
}

function ServiciosPageHero(){
  return (
    <header className="page-hero" id="inicio">
      <div className="wrap">
        <span className="eyebrow light">Nuestros Servicios</span>
        <h1>Un consorcio, todas las soluciones.</h1>
        <p>Equipo de profesionales especializados en distintas áreas. Desde asesoría de tesis hasta consultoría empresarial — todo lo que necesitas, en un solo lugar.</p>
        <div className="hero-btns">
          <a className="btn btn-red btn-lg" href={waLink("Hola Grupo ASES 👋, quiero información sobre sus servicios.")} target="_blank" rel="noopener">
            <Icon n="whatsapp" /> Consultar un servicio
          </a>
          <a className="btn btn-ghost btn-lg" href="tesis.html">
            <Icon n="cap" /> Asesoría de Tesis
          </a>
        </div>
      </div>
    </header>
  );
}

function AppServicios(){
  useReveal();
  return (
    <>
      <Navbar />
      <ServiciosPageHero />
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Catálogo completo</span>
            <h2>Cada servicio, a fondo.</h2>
            <p>Conoce el detalle de lo que incluye cada área. Si tienes dudas, escríbenos por WhatsApp — te orientamos sin compromiso.</p>
          </div>
          <div className="serv-detail-grid">
            {SERVICIOS_DETAIL.map(s=> <ServicioCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
      <WhatsFloat />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<AppServicios />);
