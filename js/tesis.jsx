import React, { useState as uS, useMemo } from 'react'
import { Icon } from './icons.jsx'
import { waLink } from './landing.jsx'
import { UNIVERSIDADES } from '../data/universidades.js'

function facIcon(nombre) {
  const n = nombre.toLowerCase()
  if (/derecho|política/.test(n)) return "scale"
  if (/salud|medic|enfer|odont|obstet|veterin/.test(n)) return "heart"
  if (/ingenier|arquitect|civil|sistema|física|matem/.test(n)) return "build"
  if (/empresa|administ|contab|económic|negocio|financ/.test(n)) return "chart"
  if (/comunic|human|educa|turismo|psicol|arte|social|histó/.test(n)) return "mega"
  if (/biológ|química|aliment|agro|zootec|ciencias/.test(n)) return "flask"
  return "book"
}

const SERVICIOS = [
  "Asesoría personalizada",
  "Metodología de investigación",
  "Procesamiento y análisis de datos",
  "Corrección y levantamiento de observaciones",
  "Informes con calidad académica",
  "Acompañamiento permanente"
]

function StepDots({ step }) {
  const labels = [["01", "Universidad"], ["02", "Facultad"], ["03", "Carrera"], ["04", "Tu asesoría"]]
  return (
    <div className="steps">
      {labels.map((l, i) => (
        <React.Fragment key={i}>
          <div className={"step" + (i === step ? " active" : "") + (i < step ? " done" : "")}>
            <div className="step-n">{i < step ? <Icon n="check" style={{ width: 16 }} /> : l[0]}</div>
            <div className="step-tx"><small>Paso {l[0]}</small><b>{l[1]}</b></div>
          </div>
          {i < 3 && <div className="step-bar" style={{ "--p": i < step ? 1 : 0 }}></div>}
        </React.Fragment>
      ))}
    </div>
  )
}

export function TesisExplorer() {
  const unis = UNIVERSIDADES
  const [step, setStep] = uS(0)
  const [uni, setUni] = uS(null)
  const [fac, setFac] = uS(null)
  const [carrera, setCarrera] = uS(null)
  const [q, setQ] = uS("")

  function pickUni(u) { setUni(u); setFac(null); setCarrera(null); setStep(1) }
  function pickFac(f) { setFac(f); setCarrera(null); setQ(""); setStep(2) }
  function pickCar(c) { setCarrera(c); setStep(3) }
  function reset() { setUni(null); setFac(null); setCarrera(null); setStep(0) }

  const totalCarreras = u => u.facultades.reduce((a, f) => a + f.carreras.length, 0)
  const filtered = useMemo(() => {
    if (!fac) return []
    const t = q.trim().toLowerCase()
    return fac.carreras.filter(c => c.n.toLowerCase().includes(t))
  }, [fac, q])

  const waMsg = () => "Hola Grupo ASES 👋, soy estudiante de *" + carrera.n + "* en " + uni.sigla + " (" + uni.nombre + "). Quiero información sobre Asesoría de Tesis. ¿Me podrían brindar información?"

  return (
    <section className="section tesis" id="tesis">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Asesoría de Tesis · Chiclayo</span>
          <h2>Encuentra tu carrera en 3 pasos.</h2>
          <p>Elige tu universidad, tu facultad y tu carrera. Te mostramos el costo de tu asesoría y te conectamos con un asesor por WhatsApp — con tu información ya lista.</p>
        </div>

        <div className="explorer reveal">
          <StepDots step={step} />
          <div className="explorer-body">

            {(uni || fac || carrera) && (
              <div className="crumbs">
                {uni && <span className="crumb">{uni.sigla} <button className="x" onClick={reset} title="Cambiar">×</button></span>}
                {fac && <><span className="crumb-sep">›</span><span className="crumb">{fac.nombre} <button className="x" onClick={() => { setFac(null); setCarrera(null); setStep(1) }} title="Cambiar">×</button></span></>}
                {carrera && <><span className="crumb-sep">›</span><span className="crumb">{carrera.n} <button className="x" onClick={() => { setCarrera(null); setStep(2) }} title="Cambiar">×</button></span></>}
              </div>
            )}

            {step === 0 && (
              <div className="stepper-anim" key="s0">
                <h3 className="step-title">¿En qué universidad estudias?</h3>
                <p className="step-desc">Trabajamos con las principales universidades de Chiclayo.</p>
                <div className="uni-grid stagger">
                  {unis.map((u, i) => (
                    <button className="uni-card" key={u.id} style={{ "--uc": u.color, animationDelay: (i * 55) + 'ms' }} onClick={() => pickUni(u)}>
                      <div className="uni-seal">
                        <img src={u.logo} alt={u.sigla} className="uni-seal-img" width="64" height="64" loading="lazy" decoding="async" />
                      </div>
                      <div>
                        <div className="nm">{u.nombre}</div>
                        <div className="meta">
                          <span className={"tipo " + (u.tipo === "Pública" ? "pub" : "priv")}>{u.tipo}</span>
                          <span><Icon n="pin" style={{ width: 13, display: 'inline', verticalAlign: '-2px' }} /> {u.ciudad}</span>
                        </div>
                      </div>
                      <div className="go"><span className="cnt">{u.facultades.length} facultades · {totalCarreras(u)} carreras</span> <Icon n="arrow" /></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && uni && (
              <div className="stepper-anim" key="s1">
                <button className="back" onClick={reset}><Icon n="arrowLeft" /> Cambiar universidad</button>
                <h3 className="step-title">Facultades de {uni.sigla}</h3>
                <p className="step-desc">Elige la facultad de tu carrera.</p>
                <div className="fac-grid stagger">
                  {uni.facultades.map((f, i) => (
                    <button className="fac-card" key={f.nombre} style={{ "--uc": uni.color, animationDelay: (i * 45) + 'ms' }} onClick={() => pickFac(f)}>
                      <div className="fac-ic"><Icon n={facIcon(f.nombre)} /></div>
                      <div className="fc-tx"><b>{f.nombre}</b><small>{f.carreras.length} {f.carreras.length === 1 ? "carrera" : "carreras"}</small></div>
                      <div className="arr"><Icon n="arrow" /></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && fac && (
              <div className="stepper-anim" key="s2">
                <button className="back" onClick={() => { setFac(null); setStep(1) }}><Icon n="arrowLeft" /> Cambiar facultad</button>
                <h3 className="step-title">Carreras · {fac.nombre}</h3>
                <p className="step-desc">Selecciona tu carrera para ver el costo de asesoría.</p>
                <div className="car-search">
                  <Icon n="search" />
                  <input
                    placeholder="Busca tu carrera..."
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    autoFocus
                    aria-label="Buscar carrera"
                    role="searchbox"
                  />
                </div>
                {filtered.length > 0 ? (
                  <div className="car-grid stagger">
                    {filtered.map((c, i) => (
                      <button className="car-card" key={c.n} style={{ "--uc": uni.color, animationDelay: (i * 35) + 'ms' }} onClick={() => pickCar(c)}>
                        <span className="cdot"></span>
                        <span>{c.n}</span>
                        <span className="pick">Elegir <Icon n="arrow" /></span>
                      </button>
                    ))}
                  </div>
                ) : <div className="empty">No encontramos esa carrera. Prueba con otra palabra 🔍</div>}
              </div>
            )}

            {step === 3 && carrera && (
              <div className="stepper-anim" key="s3">
                <button className="back" onClick={() => { setCarrera(null); setStep(2) }}><Icon n="arrowLeft" /> Cambiar carrera</button>
                <div className="result-hero">
                  <span className="tag"><Icon n="checkCircle" style={{ width: 15 }} /> ¡Perfecto, te podemos ayudar!</span>
                  <h3>{carrera.n}</h3>
                  <p className="ruta"><b>{uni.sigla}</b> · {fac.nombre} · <span style={{ color: '#fff' }}>{uni.nombre}</span></p>
                </div>

                <div className="costo-card">
                  <div className="costo-left">
                    <div className="costo-label">Costo de asesoría completa</div>
                    {carrera.precio ? (
                      <>
                        <div className="costo-price"><small>S/</small> {carrera.precio.toLocaleString("es-PE")}</div>
                        <div className="costo-note">Precio fijo · sin costos ocultos</div>
                      </>
                    ) : (
                      <>
                        <div className="costo-price costo-desde"><small>Desde</small> <small>S/</small>350</div>
                        <div className="costo-note">Precio exacto según tu avance · sin compromisos</div>
                      </>
                    )}
                    <a className="btn btn-red btn-lg" href={waLink(waMsg())} target="_blank" rel="noopener" style={{ marginTop: 24 }}>
                      <Icon n="whatsapp" /> {carrera.precio ? "Reservar mi asesoría" : "Consultar mi precio"}
                    </a>
                  </div>
                  <div className="costo-right">
                    <div className="costo-inc-title">¿Qué incluye?</div>
                    <ul className="costo-list">
                      {SERVICIOS.map(s => <li key={s}><Icon n="check" /> {s}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
