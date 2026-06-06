// ============ Config & helpers ============
const ASES = {
  wa: "51902417655",
  waDisplay: "902 417 655",
  tel: "943852718",
  telDisplay: "943 852 718",
  dir: "Calle Lora y Cordero 610, Chiclayo",
  web: "www.grupoases.com.pe"
};
function waLink(msg){ return "https://wa.me/" + ASES.wa + "?text=" + encodeURIComponent(msg); }
window.ASES = ASES; window.waLink = waLink;

const { useState, useEffect, useRef } = React;

function useReveal(){
  useEffect(()=>{
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    },{threshold:.12});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  });
}
window.useReveal = useReveal;

// ============ Logo ============
function Logo({ dark, sm }){
  return (
    <img
      src="img/ases.png"
      alt="Grupo ASES - Consorcio de Asesores"
      className={"logo-img"+(sm?" sm":"")+(dark?" on-dark":"")}
    />
  );
}
window.Logo = Logo;

// ============ Navbar ============
function Navbar(){
  const [top, setTop] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(()=>{
    const f = ()=> setTop(window.scrollY < 30);
    window.addEventListener('scroll', f); f();
    return ()=> window.removeEventListener('scroll', f);
  },[]);
  const pg = window.location.pathname.split('/').pop() || 'index.html';
  const links = [
    ["Inicio","index.html"],["Servicios","servicios.html"],["Asesoría de Tesis","tesis.html"],
    ["Nosotros","nosotros.html"],["Contacto","contacto.html"]
  ];
  function active(href){ return pg===href||(href==='index.html'&&(pg===''||pg==='/')); }
  return (
    <>
      <nav className={"nav"+(top?" top":"")}>
        <div className="wrap nav-inner">
          <a href="index.html"><Logo /></a>
          <div className="nav-links">
            {links.map(l=> <a key={l[1]} href={l[1]} className={active(l[1])?"active":""}>{l[0]}</a>)}
          </div>
          <div className="nav-cta">
            <a className="btn btn-red" href={waLink("Hola Grupo ASES, quiero más información sobre sus servicios.")} target="_blank" rel="noopener">
              <Icon n="whatsapp" /> Escríbenos
            </a>
            <button className="burger" onClick={()=>setMenu(true)} aria-label="Menú"><Icon n="menu" /></button>
          </div>
        </div>
      </nav>
      <div className={"mobile-menu"+(menu?" open":"")} onClick={()=>setMenu(false)}>
        <div className="mm-panel" onClick={e=>e.stopPropagation()}>
          <button className="mm-close" onClick={()=>setMenu(false)}><Icon n="close" /></button>
          {links.map(l=> <a key={l[1]} href={l[1]} onClick={()=>setMenu(false)} className={active(l[1])?"active":""}>{l[0]}</a>)}
          <a className="btn btn-wa" style={{marginTop:14,justifyContent:'center'}} href={waLink("Hola Grupo ASES")} target="_blank" rel="noopener"><Icon n="whatsapp" /> WhatsApp</a>
        </div>
      </div>
    </>
  );
}
window.Navbar = Navbar;

// ============ Hero ============
function Hero(){
  return (
    <header className="hero" id="inicio">
      <div className="hero-bg">
        <div className="hero-arc arc1"></div>
        <div className="hero-arc arc2"></div>
      </div>
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Consorcio de Asesores · Chiclayo</span>
          <h1 style={{marginTop:18}}>Soluciones <span className="hl">integrales</span> para personas y empresas.</h1>
          <p className="hero-sub">Un equipo de profesionales especializados a tu servicio: asesoría de tesis, legal, contable y marketing, <b>todo en un solo lugar.</b></p>
          <div className="hero-cta">
            <a className="btn btn-red btn-lg" href="tesis.html"><Icon n="cap" /> Asesoría de Tesis</a>
            <a className="btn btn-ghost btn-lg" href="servicios.html">Ver servicios</a>
          </div>
          <div className="hero-trust">
            <div className="t"><b>+5,000</b><span>Tesis aprobadas</span></div>
            <div className="t"><b>+10</b><span>Años de experiencia</span></div>
            <div className="t"><b>100%</b><span>Trabajo original</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hv-img-wrap">
            <img
              src="img/graduation.png"
              alt="Graduados asesorados por Grupo ASES en Chiclayo"
              className="hv-img"
            />
            <div className="hv-status">
              <span className="hv-dot"></span>
              <span>Asesores disponibles ahora</span>
            </div>
            <div className="hv-stats">
              <div className="hvs-item">
                <span className="hvs-num">6</span>
                <small>Universidades<br/>en Chiclayo</small>
              </div>
              <div className="hvs-sep"></div>
              <div className="hvs-item">
                <span className="hvs-num">4.9</span>
                <small>Calificación<br/>promedio</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;

// ============ Marquee universidades ============
function Marquee(){
  const unis = (window.UNIVERSIDADES||[]).map(u=>({logo:u.logo, sigla:u.sigla, isUni:true}));
  const extras = ["Asesoría de Tesis", "100% Original", "Trabajo Garantizado"];
  const all = [...unis, ...extras.map(t=>({text:t})), ...unis, ...extras.map(t=>({text:t}))];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.concat(all).map((item,i)=>(
          <div className="marquee-item" key={i}>
            {item.isUni
              ? <><img src={item.logo} alt={item.sigla} className="mq-uni-logo" />{item.sigla}</>
              : item.text
            }
          </div>
        ))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;

// ============ Servicios ============
function Servicios(){
  useReveal();
  const otros = [
    { ic:"scale", t:"Asesoría Legal", d:"Soluciones legales confiables para personas y empresas." },
    { ic:"calc", t:"Asesoría Contable", d:"Orden, control y cumplimiento tributario sin complicaciones." },
    { ic:"mega", t:"Marketing y Publicidad", d:"Estrategias que impulsan tu marca y tus ventas." },
    { ic:"chart", t:"Finanzas y Consultoría", d:"Decisiones financieras inteligentes para crecer." },
    { ic:"users", t:"Recursos Humanos", d:"Talento, desarrollo y bienestar para tu organización." }
  ];
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Un consorcio, <span className="hl">todas</span> las soluciones.</h2>
          <p>Profesionales especializados en cada área. Hoy destacamos nuestra <b>Asesoría de Tesis</b>, el servicio favorito de los universitarios de Chiclayo.</p>
        </div>
        <div className="serv-bento">
          <a className="serv-card feature reveal" href="tesis.html">
            <span className="serv-tag">Servicio estrella</span>
            <div className="serv-ic"><Icon n="cap" /></div>
            <h3>Asesoría de Tesis</h3>
            <p>Te acompañamos desde el proyecto hasta la sustentación. Explora las <b>6 universidades de Chiclayo</b> y todas sus carreras, y arma tu plan a medida.</p>
            <div className="serv-link">Explorar mi carrera <Icon n="arrow" /></div>
          </a>
          <div className="serv-secondary">
            <div className="serv-grid-sm">
              {otros.slice(0,4).map((s,i)=>(
                <a className="serv-card sm reveal" key={s.t} href="servicios.html" style={{animationDelay:(i*60)+'ms'}}>
                  <div className="serv-ic sm"><Icon n={s.ic} /></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </a>
              ))}
            </div>
            <a className="serv-card wide reveal" href="servicios.html">
              <div className="serv-ic"><Icon n={otros[4].ic} /></div>
              <div className="serv-wide-tx">
                <h3>{otros[4].t}</h3>
                <p>{otros[4].d}</p>
              </div>
              <span className="serv-arr"><Icon n="arrow" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Servicios = Servicios;

// ============ Acompañamiento ============
function Acompanamiento(){
  useReveal();
  return (
    <section className="section alt">
      <div className="wrap split-grid">
        <div className="split-img reveal">
          <img src="img/mentoring.png" alt="Asesoría personalizada de tesis en Chiclayo" />
        </div>
        <div className="split-text reveal">
          <h2>Te acompañamos en cada etapa de tu investigación.</h2>
          <p style={{marginTop:18, color:'var(--muted)', fontSize:16, lineHeight:1.75}}>
            Entendemos que hacer una tesis puede ser complejo. Te brindamos acompañamiento uno a uno: un asesor experto revisará tus avances, guiará tu metodología y te preparará para una sustentación exitosa.
          </p>
          <p style={{marginTop:12, color:'var(--muted)', fontSize:16, lineHeight:1.75}}>
            Todos los entregables pasan por control estricto de originalidad con Turnitin, garantizando que tu trabajo cumpla los estándares exigidos por tu universidad.
          </p>
          <div style={{marginTop:28}}>
            <a className="btn btn-red btn-lg" href="tesis.html">
              <Icon n="cap" /> Comenzar mi Tesis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Acompanamiento = Acompanamiento;
