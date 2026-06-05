// ============ Explorador de Asesoría de Tesis ============
const { useState:uS, useMemo } = React;

// Elige un icono según el nombre de la facultad
function facIcon(nombre){
  const n = nombre.toLowerCase();
  if(/derecho|política/.test(n)) return "scale";
  if(/salud|medic|enfer|odont|obstet|veterin/.test(n)) return "heart";
  if(/ingenier|arquitect|civil|sistema|física|matem/.test(n)) return "build";
  if(/empresa|administ|contab|económic|negocio|financ/.test(n)) return "chart";
  if(/comunic|human|educa|turismo|psicol|arte|social|histó/.test(n)) return "mega";
  if(/biológ|química|aliment|agro|zootec|ciencias/.test(n)) return "flask";
  return "book";
}

// Planes de asesoría de tesis (precios referenciales)
const PLANES = [
  { id:"proyecto", n:"Proyecto de Tesis", d:"Plan de investigación listo para aprobación.", precio:"350", pop:false,
    items:["Planteamiento del problema","Marco teórico y antecedentes","Hipótesis y variables","Metodología y matriz de consistencia","Formato según tu universidad"] },
  { id:"desarrollo", n:"Desarrollo de Tesis", d:"De los resultados a las conclusiones.", precio:"900", pop:true,
    items:["Recolección y procesamiento de datos","Análisis estadístico (SPSS / Excel)","Resultados y discusión","Conclusiones y recomendaciones","Informe final completo","Control de originalidad (antiplagio)"] },
  { id:"integral", n:"Tesis Integral", d:"Acompañamiento de inicio a sustentación.", precio:"1,800", pop:false,
    items:["Todo lo del Proyecto + Desarrollo","Asesor personal asignado","Levantamiento de observaciones","Preparación para la sustentación","Diapositivas profesionales","Revisión Turnitin incluida"] }
];

function StepDots({ step }){
  const labels = [["01","Universidad"],["02","Facultad"],["03","Carrera"],["04","Tu plan"]];
  return (
    <div className="steps">
      {labels.map((l,i)=>(
        <React.Fragment key={i}>
          <div className={"step"+(i===step?" active":"")+(i<step?" done":"")}>
            <div className="step-n">{i<step ? <Icon n="check" style={{width:16}}/> : l[0]}</div>
            <div className="step-tx"><small>Paso {l[0]}</small><b>{l[1]}</b></div>
          </div>
          {i<3 && <div className="step-bar" style={{"--p": i<step?1:0}}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function TesisExplorer(){
  const unis = window.UNIVERSIDADES || [];
  const [step, setStep] = uS(0);
  const [uni, setUni] = uS(null);
  const [fac, setFac] = uS(null);
  const [carrera, setCarrera] = uS(null);
  const [q, setQ] = uS("");

  function pickUni(u){ setUni(u); setFac(null); setCarrera(null); setStep(1); }
  function pickFac(f){ setFac(f); setCarrera(null); setQ(""); setStep(2); }
  function pickCar(c){ setCarrera(c); setStep(3); }
  function reset(){ setUni(null); setFac(null); setCarrera(null); setStep(0); }

  const totalCarreras = u => u.facultades.reduce((a,f)=>a+f.carreras.length,0);
  const filtered = useMemo(()=>{
    if(!fac) return [];
    const t = q.trim().toLowerCase();
    return fac.carreras.filter(c=> c.toLowerCase().includes(t));
  },[fac,q]);

  const waMsg = (plan)=> "Hola Grupo ASES 👋, soy estudiante de *"+carrera+"* en "+uni.sigla+" ("+uni.nombre+")."
    + (plan ? " Me interesa el plan *"+plan.n+"* de Asesoría de Tesis." : " Quiero información sobre Asesoría de Tesis.")
    + " ¿Me podrían brindar información?";

  return (
    <section className="section tesis" id="tesis">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Asesoría de Tesis · Chiclayo</span>
          <h2>Encuentra tu carrera en 3 pasos.</h2>
          <p>Elige tu universidad, tu facultad y tu carrera. Te mostramos los planes y te conectamos con un asesor por WhatsApp — con tu información ya lista.</p>
        </div>

        <div className="explorer reveal">
          <StepDots step={step} />
          <div className="explorer-body">

            {/* Breadcrumbs */}
            {(uni||fac||carrera) && (
              <div className="crumbs">
                {uni && <span className="crumb">{uni.sigla} <button className="x" onClick={reset} title="Cambiar">×</button></span>}
                {fac && <><span className="crumb-sep">›</span><span className="crumb">{fac.nombre} <button className="x" onClick={()=>{setFac(null);setCarrera(null);setStep(1);}} title="Cambiar">×</button></span></>}
                {carrera && <><span className="crumb-sep">›</span><span className="crumb">{carrera} <button className="x" onClick={()=>{setCarrera(null);setStep(2);}} title="Cambiar">×</button></span></>}
              </div>
            )}

            {/* PASO 1: Universidad */}
            {step===0 && (
              <div className="stepper-anim" key="s0">
                <h3 className="step-title">¿En qué universidad estudias?</h3>
                <p className="step-desc">Trabajamos con las principales universidades de Chiclayo.</p>
                <div className="uni-grid stagger">
                  {unis.map((u,i)=>(
                    <button className="uni-card" key={u.id} style={{"--uc":u.color, animationDelay:(i*55)+'ms'}} onClick={()=>pickUni(u)}>
                      <div className="seal" style={{background:u.color}}>{u.sigla}</div>
                      <div>
                        <div className="nm">{u.nombre}</div>
                        <div className="meta">
                          <span className={"tipo "+(u.tipo==="Pública"?"pub":"priv")}>{u.tipo}</span>
                          <span><Icon n="pin" style={{width:13,display:'inline',verticalAlign:'-2px'}}/> {u.ciudad}</span>
                        </div>
                      </div>
                      <div className="go"><span className="cnt">{u.facultades.length} facultades · {totalCarreras(u)} carreras</span> <Icon n="arrow" /></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 2: Facultad */}
            {step===1 && uni && (
              <div className="stepper-anim" key="s1">
                <button className="back" onClick={reset}><Icon n="arrowLeft" /> Cambiar universidad</button>
                <h3 className="step-title">Facultades de {uni.sigla}</h3>
                <p className="step-desc">Elige la facultad de tu carrera.</p>
                <div className="fac-grid stagger">
                  {uni.facultades.map((f,i)=>(
                    <button className="fac-card" key={f.nombre} style={{"--uc":uni.color, animationDelay:(i*45)+'ms'}} onClick={()=>pickFac(f)}>
                      <div className="fac-ic"><Icon n={facIcon(f.nombre)} /></div>
                      <div className="fc-tx"><b>{f.nombre}</b><small>{f.carreras.length} {f.carreras.length===1?"carrera":"carreras"}</small></div>
                      <div className="arr"><Icon n="arrow" /></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 3: Carrera */}
            {step===2 && fac && (
              <div className="stepper-anim" key="s2">
                <button className="back" onClick={()=>{setFac(null);setStep(1);}}><Icon n="arrowLeft" /> Cambiar facultad</button>
                <h3 className="step-title">Carreras · {fac.nombre}</h3>
                <p className="step-desc">Selecciona tu carrera para ver los planes de asesoría.</p>
                <div className="car-search">
                  <Icon n="search" />
                  <input placeholder="Busca tu carrera..." value={q} onChange={e=>setQ(e.target.value)} autoFocus />
                </div>
                {filtered.length>0 ? (
                  <div className="car-grid stagger">
                    {filtered.map((c,i)=>(
                      <button className="car-card" key={c} style={{"--uc":uni.color, animationDelay:(i*35)+'ms'}} onClick={()=>pickCar(c)}>
                        <span className="cdot"></span>
                        <span>{c}</span>
                        <span className="pick">Elegir <Icon n="arrow" /></span>
                      </button>
                    ))}
                  </div>
                ) : <div className="empty">No encontramos esa carrera. Prueba con otra palabra 🔍</div>}
              </div>
            )}

            {/* PASO 4: Resultado + Planes */}
            {step===3 && carrera && (
              <div className="stepper-anim" key="s3">
                <button className="back" onClick={()=>{setCarrera(null);setStep(2);}}><Icon n="arrowLeft" /> Cambiar carrera</button>
                <div className="result-hero">
                  <span className="tag"><Icon n="checkCircle" style={{width:15}}/> ¡Perfecto, te podemos ayudar!</span>
                  <h3>{carrera}</h3>
                  <p className="ruta"><b>{uni.sigla}</b> · {fac.nombre} · <span style={{color:'#fff'}}>{uni.nombre}</span></p>
                </div>

                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,flexWrap:'wrap',marginBottom:18}}>
                  <h3 className="step-title" style={{marginBottom:0}}>Elige tu plan de asesoría</h3>
                  <a className="btn btn-wa" href={waLink(waMsg(null))} target="_blank" rel="noopener"><Icon n="whatsapp" /> Hablar con un asesor</a>
                </div>

                <div className="planes stagger">
                  {PLANES.map((p,i)=>(
                    <div className={"plan"+(p.pop?" pop":"")} key={p.id} style={{animationDelay:(i*70)+'ms'}}>
                      {p.pop && <span className="badge">Más elegido</span>}
                      <div className="pn">{p.n}</div>
                      <div className="pd">{p.d}</div>
                      <div className="price"><small>Desde S/</small> {p.precio}</div>
                      <div className="per">Precio referencial · se ajusta a tu caso</div>
                      <ul>
                        {p.items.map(it=> <li key={it}><Icon n="check" /> {it}</li>)}
                      </ul>
                      <a className={"btn "+(p.pop?"btn-red":"btn-navy")} href={waLink(waMsg(p))} target="_blank" rel="noopener">
                        <Icon n="whatsapp" /> Solicitar este plan
                      </a>
                    </div>
                  ))}
                </div>
                <p className="disclaimer">* Precios referenciales en soles (S/). El monto final depende del alcance, la complejidad y los plazos de tu tesis. Solicita tu cotización exacta sin compromiso.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
window.TesisExplorer = TesisExplorer;
