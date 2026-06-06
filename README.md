# Plan por hacer

🔴 Crítico — Rendimiento (lo que más te está costando)
Tu mayor problema no es visual, es de peso. Tus imágenes son enormes:

Imagen Peso actual Debería pesar
proceso-bg.png 8.2 MB ~150 KB
galeria-graduacion.png 6.7 MB ~120 KB
servicios-bg.png 6.3 MB ~120 KB
galeria-asesoria.png 6.0 MB ~120 KB
galeria-equipo.png 5.5 MB ~120 KB
Tu página pesa ~35 MB solo en imágenes. En un celular con datos en Chiclayo, eso son 20–40 segundos en blanco antes de ver nada. La mitad de los visitantes se va antes de que cargue.

Comprimir y convertir a WebP todas las imágenes (reducción del ~95% sin perder calidad visible).
React en modo desarrollo + Babel en el navegador: hoy el sitio compila el JSX en el celular del usuario cada vez que abre. Cambiar a los builds de producción (react.production.min.js) y/o precompilar acelera el arranque notablemente.
Lazy-load y dimensiones (width/height) en todas las imágenes para evitar saltos de layout.
Esto, solo, es el cambio que más se va a sentir.

🟠 Importante — Que te encuentren y compartan (SEO local)
Tu negocio vive del WhatsApp y de Google. Hoy te falta:

Open Graph tags — cuando alguien comparte tu link por WhatsApp/Facebook, no aparece imagen ni descripción. Hoy sale un link pelado. Esto es clave para un negocio que se mueve por mensajería.
Favicon — la pestaña del navegador sale en blanco.
Schema LocalBusiness (datos estructurados) — le dice a Google tu dirección, horario y teléfono → apareces mejor en "asesoría de tesis Chiclayo" y en Google Maps.
robots.txt + sitemap.xml y lang="es-PE".
🟡 Conversión — Secciones que faltan para cerrar más clientes
Testimonios reales — no tienes ni una sola prueba social. Para un estudiante desconfiado, ver "le funcionó a alguien como yo" vale más que cualquier eslogan. 3–4 testimonios con nombre, carrera y universidad.
Sección de preguntas frecuentes (FAQ) — responde de una las dudas que llegan siempre: ¿es confidencial? ¿es original/antiplagio? ¿cuánto demora? ¿cómo pago? ¿dan factura? Cada duda resuelta es un mensaje menos de fricción.
CTA final de cierre — al quitar la sección "Demos el siguiente paso", el inicio termina en el mapa. Conviene un último empujón a WhatsApp antes del footer.
Métodos de pago / garantía — "Yape, Plin, transferencia" + "si hay observaciones, las levantamos sin costo" da seguridad.
Indicador de respuesta rápida — "Te respondemos en minutos · Lun–Sáb" junto al botón de WhatsApp.
🟢 Visual — Para que sea "más llamativa"
GSAP está en tu stack (CLAUDE.md) pero no se usa en ningún lado. Aprovecharlo para:
Contadores animados en los stats (+5,000 subiendo de 0 al hacer scroll) — muy vistoso y barato.
Scroll-trigger con parallax suave en el hero y las imágenes.
Micro-interacciones — hoy solo hay hover. Detalles pequeños (botones, tarjetas que reaccionan) dan sensación premium.
Barra CTA fija en móvil — un botón de WhatsApp anclado abajo que siempre acompaña al usuario.
⚪ Higiene técnica
.DS_Store está commiteado (basura de Mac) → agregar .gitignore.
Sin analítica — no puedes medir cuántos llegan ni cuántos dan clic en WhatsApp. Google Analytics o similar para saber qué funciona.
Mi recomendación de orden
Primero el #1–3 (rendimiento) — es invisible pero es lo que está espantando gente. Luego #4–7 (SEO/compartir), que es trabajo rápido de alto retorno. Después las secciones de conversión (#8–12), que es donde de verdad ganas clientes. Lo visual (#13–15) lo dejaría al final: es lo más divertido pero lo de menos impacto real.

¿Quieres que arranque por el rendimiento (comprimir imágenes + build de producción), o prefieres que empiece por las secciones nuevas de conversión (testimonios + FAQ + CTA)?
