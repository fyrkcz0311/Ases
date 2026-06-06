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

// GSAP plugin registration (once at load)
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Hook: spring press micro-interaction on all .btn elements
function useMicroInteractions() {
  useEffect(() => {
    if (typeof gsap === 'undefined') return;
    let active = null;
    const onDown = e => {
      active = e.target.closest('.btn');
      if (active) gsap.to(active, { scale: 0.95, duration: 0.12, ease: 'power2.out', overwrite: true });
    };
    const onUp = () => {
      if (active) {
        gsap.to(active, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)', overwrite: true });
        active = null;
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchstart', onDown, { passive: true });
    document.addEventListener('touchend', onUp, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchstart', onDown);
      document.removeEventListener('touchend', onUp);
    };
  }, []);
}
window.useMicroInteractions = useMicroInteractions;

// Hook: parallax suave en un elemento al hacer scroll
function useParallax(ref, amount = 40) {
  useEffect(() => {
    if (!ref.current || typeof gsap === 'undefined') return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { y: -(amount / 2) },
        {
          y: amount / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);
}
window.useParallax = useParallax;

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
      width="140" height="40"
      decoding="async"
    />
  );
}
window.Logo = Logo;

// ============ Navbar ============
function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(()=>{
    const sentinel = document.getElementById('scroll-sentinel');
    if(!sentinel) return;
    const obs = new IntersectionObserver(
      ([e]) => setScrolled(!e.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  },[]);
  const pg = window.location.pathname.split('/').pop() || 'index.html';
  const onIndex = pg===''||pg==='/'||pg==='index.html';
  const links = [
    ["Inicio","index.html"],["Asesoría de Tesis","tesis.html"],
    ["Nosotros", onIndex?"#nosotros":"index.html#nosotros"],
    ["Ubicación", onIndex?"#ubicacion":"index.html#ubicacion"]
  ];
  function active(href){ return pg===href||(href==='index.html'&&onIndex); }
  return (
    <>
      <nav className={"nav"+(scrolled?" scrolled":"")}>
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
  const imgRef = useRef(null);
  useParallax(imgRef, 50);
  return (
    <header className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Consorcio de Asesores · Chiclayo</span>
          <h1 style={{marginTop:16}}>Soluciones <span className="hl">integrales</span> para personas y empresas.</h1>
          <p className="hero-sub">Asesoría de tesis, legal, contable y marketing. Todo en un solo lugar, con profesionales que conocen tu universidad.</p>
          <div className="hero-cta">
            <a className="btn btn-red btn-lg" href="tesis.html"><Icon n="cap" /> Asesoría de Tesis</a>
            <a className="btn btn-ghost btn-lg" href="#nosotros">Quiénes somos</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hv-img-wrap">
            <img
              ref={imgRef}
              src="img/graduation.png"
              alt="Graduados asesorados por Grupo ASES en Chiclayo"
              className="hv-img"
              width="600" height="600"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hv-badge">
            <div className="hv-badge-ic"><Icon n="cap" /></div>
            <div className="hv-badge-tx">
              <b>+5,000</b>
              <span>Tesis aprobadas</span>
            </div>
          </div>
          <div className="hv-chip">
            <span className="hv-dot"></span>
            Asesores en línea
          </div>
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;

// ============ Stats strip ============
function Stats(){
  const barRef = useRef(null);
  useEffect(() => {
    if (!barRef.current || typeof gsap === 'undefined') return;
    const els = barRef.current.querySelectorAll('.stat-count');
    els.forEach(el => {
      const end = +el.dataset.end;
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const useLocale = el.dataset.locale === 'true';
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate() {
          const val = Math.round(obj.v);
          el.textContent = prefix + (useLocale ? val.toLocaleString('es-PE') : val) + suffix;
        },
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 85%',
          once: true
        }
      });
    });
  }, []);

  const items = [
    { end:5000, prefix:'+', suffix:'',       locale:true,  display:'+5,000',   l:'Tesis aprobadas' },
    { end:10,   prefix:'+', suffix:' años',  locale:false, display:'+10 años', l:'De experiencia'  },
    { end:100,  prefix:'',  suffix:'%',      locale:false, display:'100%',     l:'Trabajo original'}
  ];
  return (
    <div className="stats-bar" ref={barRef}>
      <div className="wrap">
        <div className="stats-inner">
          {items.map(s=>(
            <div className="stat-item" key={s.l}>
              <b className="stat-count"
                 data-end={s.end}
                 data-prefix={s.prefix}
                 data-suffix={s.suffix}
                 data-locale={s.locale}
              >{s.display}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.Stats = Stats;

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
              ? <><img src={item.logo} alt={item.sigla} className="mq-uni-logo" width="32" height="32" loading="lazy" decoding="async" />{item.sigla}</>
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
  const servicios = [
    { ic:"cap",   t:"Asesoría de Tesis",    d:"De la idea a la sustentación. Explora las 6 universidades de Chiclayo y arma tu plan a medida.", href:"tesis.html",  featured:true },
    { ic:"scale", t:"Asesoría Legal",        d:"Soluciones legales confiables para personas y empresas.",                                        href:waLink("Hola Grupo ASES, necesito asesoría legal.") },
    { ic:"calc",  t:"Asesoría Contable",     d:"Orden, control y cumplimiento tributario sin complicaciones.",                                   href:waLink("Hola Grupo ASES, necesito asesoría contable.") },
    { ic:"mega",  t:"Marketing y Publicidad",d:"Estrategias digitales que impulsan tu marca y tus ventas.",                                      href:waLink("Hola Grupo ASES, necesito marketing y publicidad.") }
  ];
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Un consorcio, <span className="hl">todas</span> las soluciones.</h2>
          <p>Profesionales especializados en cada área para personas, estudiantes y empresas de Chiclayo.</p>
        </div>
        <div className="serv-4grid">
          {servicios.map((s,i)=>(
            <a
              key={s.t}
              className={"serv-4card reveal"+(s.featured?" featured":"")}
              href={s.href}
              style={{
                animationDelay:(i*70)+'ms',
                ...(s.featured&&{
                  backgroundImage:'url(img/servicios-bg.webp)',
                  backgroundSize:'cover',
                  backgroundPosition:'center top'
                })
              }}
            >
              {s.featured && <div className="s4-overlay"></div>}
              <div className="s4-inner">
                {s.featured && <span className="serv-tag">Servicio estrella</span>}
                <div className="s4-header">
                  <div className={"serv-ic"+(s.featured?"":" sm")}><Icon n={s.ic} /></div>
                  <h3>{s.t}</h3>
                </div>
                <p>{s.d}</p>
                {s.featured && <div className="serv-link">Explorar mi carrera <Icon n="arrow" /></div>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Servicios = Servicios;

// ============ Galería visual ============
function Galeria(){
  useReveal();
  const items = [
    { img:'img/galeria-asesoria.webp',   label:'Asesoría de tesis',   sub:'Desde el proyecto hasta sustentar' },
    { img:'img/galeria-equipo.webp',     label:'Equipo especializado', sub:'Abogados, asesores y contadores' },
    { img:'img/galeria-graduacion.webp', label:'Resultados reales',    sub:'+5,000 tesis aprobadas en Chiclayo' }
  ];
  return (
    <section className="section galeria-section">
      <div className="wrap">
        <div className="galeria-grid">
          {items.map((item,i)=>(
            <div className="galeria-item reveal" key={item.seed} style={{animationDelay:(i*100)+'ms'}}>
              <div className="galeria-img-wrap">
                <img
                  src={item.img}
                  alt={item.label}
                  width="600" height="400"
                  loading="lazy"
                  decoding="async"
                />
                <div className="galeria-overlay">
                  <span className="galeria-label">{item.label}</span>
                  <span className="galeria-sub">{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Galeria = Galeria;

// ============ Acompañamiento ============
function Acompanamiento(){
  useReveal();
  const imgRef = useRef(null);
  useParallax(imgRef, 30);
  return (
    <section className="section alt">
      <div className="wrap split-grid">
        <div className="split-img reveal">
          <img ref={imgRef} src="img/mentoring.png" alt="Asesoría personalizada de tesis en Chiclayo" width="600" height="600" loading="lazy" decoding="async" />
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
