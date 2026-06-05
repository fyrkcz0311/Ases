// ============ Config & helpers ============
const ASES = {
  wa: "51902417655",        // WhatsApp +51 902 417 655
  waDisplay: "902 417 655",
  tel: "943852718",
  telDisplay: "943 852 718",
  dir: "Calle Lora y Cordero 610, Chiclayo",
  web: "www.grupoases.com.pe"
};
function waLink(msg){ return "https://wa.me/" + ASES.wa + "?text=" + encodeURIComponent(msg); }
window.ASES = ASES; window.waLink = waLink;

const { useState, useEffect, useRef } = React;

// Hook: revela elementos al hacer scroll
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
    <div className={"logo"+(dark?" on-dark":"")}>
      <div className={"logo-mark"+(sm?" sm":"")}></div>
      <div className="logo-txt">
        <div className="g">Grupo</div>
        <div className="a">ases</div>
        <div className="c">Consorcio de Asesores</div>
      </div>
    </div>
  );
}
window.Logo = Logo;

// ============ Navbar ============
function Navbar({ onGoTesis }){
  const [top, setTop] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(()=>{
    const f = ()=> setTop(window.scrollY < 30);
    window.addEventListener('scroll', f); f();
    return ()=> window.removeEventListener('scroll', f);
  },[]);
  const links = [
    ["Inicio","#inicio"],["Servicios","#servicios"],["Asesoría de Tesis","#tesis"],
    ["Proceso","#proceso"],["Contacto","#contacto"]
  ];
  return (
    <>
      <nav className={"nav"+(top?" top":"")}>
        <div className="wrap nav-inner">
          <a href="#inicio"><Logo /></a>
          <div className="nav-links">
            {links.map(l=> <a key={l[1]} href={l[1]}>{l[0]}</a>)}
          </div>
          <div className="nav-cta">
            <a className="btn btn-red" href={waLink("Hola Grupo ASES 👋, quiero más información sobre sus servicios.")} target="_blank" rel="noopener">
              <Icon n="whatsapp" /> Escríbenos
            </a>
            <button className="burger" onClick={()=>setMenu(true)} aria-label="Menú"><Icon n="menu" /></button>
          </div>
        </div>
      </nav>
      <div className={"mobile-menu"+(menu?" open":"")} onClick={()=>setMenu(false)}>
        <div className="mm-panel" onClick={e=>e.stopPropagation()}>
          <button className="mm-close" onClick={()=>setMenu(false)}><Icon n="close" /></button>
          {links.map(l=> <a key={l[1]} href={l[1]} onClick={()=>setMenu(false)}>{l[0]}</a>)}
          <a className="btn btn-wa" style={{marginTop:14,justifyContent:'center'}} href={waLink("Hola Grupo ASES 👋")} target="_blank" rel="noopener"><Icon n="whatsapp" /> WhatsApp</a>
        </div>
      </div>
    </>
  );
}
window.Navbar = Navbar;

// ============ Hero ============
function Hero({ onGoTesis }){
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
          <p className="hero-sub">Un equipo de profesionales especializados a tu servicio. Asesoría de tesis, legal, contable y de marketing — <b>todo lo que necesitas, en un solo lugar.</b></p>
          <div className="hero-cta">
            <button className="btn btn-red btn-lg" onClick={onGoTesis}><Icon n="cap" /> Asesoría de Tesis</button>
            <a className="btn btn-ghost btn-lg" href="#servicios"><Icon n="arrow" /> Ver servicios</a>
          </div>
          <div className="hero-trust">
            <div className="t"><b>+5,000</b><span>Clientes satisfechos</span></div>
            <div className="t"><b>+10</b><span>Años de experiencia</span></div>
            <div className="t"><b>100%</b><span>Trabajo original</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hv-card">
            <div className="hv-head"><span className="hv-dot"></span><span>Asesor ASES en línea</span></div>
            <div className="hv-q">¿En qué universidad estudias?</div>
            <p style={{color:'#9fb0c4',fontSize:14}}>Selecciona y te acompañamos en cada paso de tu tesis.</p>
            <div className="hv-list">
              <div className="hv-item"><span className="ic"><Icon n="cap" /></span> Proyecto y desarrollo de tesis</div>
              <div className="hv-item"><span className="ic"><Icon n="chart" /></span> Asesoría estadística</div>
              <div className="hv-item"><span className="ic"><Icon n="shield" /></span> Originalidad y antiplagio</div>
            </div>
          </div>
          <div className="hv-float f1"><div><div className="num">6</div><small>Universidades<br/>de Chiclayo</small></div></div>
          <div className="hv-float f2"><span className="ic" style={{background:'var(--red)',width:36,height:36,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center'}}><Icon n="star" style={{width:18,color:'#fff'}}/></span><div><div className="num" style={{fontSize:18}}>4.9/5</div><small>Calificación</small></div></div>
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;

// ============ Marquee universidades ============
function Marquee(){
  const items = (window.UNIVERSIDADES||[]).map(u=>u.sigla);
  const all = [...items, "Asesoría de Tesis", ...items, "100% Original"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.concat(all).map((t,i)=>(
          <div className="marquee-item" key={i}><span className="b"></span>{t}</div>
        ))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;

// ============ Servicios ============
function Servicios({ onGoTesis }){
  useReveal();
  const otros = [
    { ic:"scale", t:"Asesoría Legal", d:"Soluciones legales confiables y efectivas para personas y empresas." },
    { ic:"calc", t:"Asesoría Contable", d:"Orden, control y cumplimiento tributario sin complicaciones." },
    { ic:"mega", t:"Marketing y Publicidad", d:"Estrategias creativas que impulsan tu marca y tus ventas." },
    { ic:"chart", t:"Finanzas y Consultoría", d:"Decisiones financieras inteligentes para crecer con seguridad." },
    { ic:"users", t:"Recursos Humanos", d:"Talento, desarrollo y bienestar para tu organización." }
  ];
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Nuestros servicios</span>
          <h2>Un consorcio, todas las soluciones.</h2>
          <p>Profesionales especializados en cada área. Hoy destacamos nuestra <b>Asesoría de Tesis</b>, el servicio favorito de los universitarios de Chiclayo.</p>
        </div>
        <div className="serv-grid">
          <div className="serv-card feature reveal" style={{cursor:'pointer'}} onClick={onGoTesis}>
            <span className="serv-tag">Destacado</span>
            <div className="serv-ic"><Icon n="cap" /></div>
            <h3>Asesoría de Tesis</h3>
            <p>Te acompañamos desde el proyecto hasta la sustentación. Explora las <b>6 universidades de Chiclayo</b> y todas sus carreras, y arma tu plan a medida.</p>
            <div className="serv-link">Explorar mi carrera <Icon n="arrow" /></div>
          </div>
          {otros.map((s,i)=>(
            <div className="serv-card reveal" key={s.t} style={{animationDelay:(i*60)+'ms'}}>
              <div className="serv-ic"><Icon n={s.ic} /></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Servicios = Servicios;
