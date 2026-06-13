// Banco de datos: Universidades de Chiclayo, sus facultades y carreras.
// Para cambiar precios: edita el campo "precio" de cada carrera (en soles).
export const UNIVERSIDADES = [
  {
    id: "unprg",
    sigla: "UNPRG",
    nombre: "Univ. Nacional Pedro Ruiz Gallo",
    tipo: "Pública",
    ciudad: "Lambayeque",
    color: "#1f4e8c",
    logo: "img/unprg.png",
    facultades: [
      { nombre: "Agronomía", carreras: [
        { n: "Agronomía", precio: 4000 }
      ]},
      { nombre: "Ciencias Biológicas", carreras: [
        { n: "Ciencias Biológicas", precio: 3800 }
      ]},
      { nombre: "Ciencias Económicas, Administrativas y Contables", carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Contabilidad", precio: 3000 },
        { n: "Economía", precio: 3000 },
        { n: "Comercio y Negocios Internacionales", precio: 3000 }
      ]},
      { nombre: "Ciencias Físicas y Matemáticas", carreras: [
        { n: "Física", precio: 4000 },
        { n: "Matemáticas", precio: 4000 },
        { n: "Estadística", precio: 4000 },
        { n: "Computación e Informática", precio: 4000 },
        { n: "Ingeniería Electrónica", precio: 4000 }
      ]},
      { nombre: "Ciencias Histórico Sociales y Educación", carreras: [
        { n: "Educación", precio: 3000 },
        { n: "Psicología", precio: 3000 },
        { n: "Sociología", precio: 3000 },
        { n: "Arqueología", precio: 3000 },
        { n: "Ciencias de la Comunicación", precio: 3000 },
        { n: "Arte", precio: 3000 }
      ]},
      { nombre: "Derecho y Ciencia Política", carreras: [
        { n: "Derecho", precio: 3800 },
        { n: "Ciencia Política", precio: 3800 }
      ]},
      { nombre: "Enfermería", carreras: [
        { n: "Enfermería", precio: 3800 }
      ]},
      { nombre: "Ingeniería Agrícola", carreras: [
        { n: "Ingeniería Agrícola", precio: 4000 }
      ]},
      { nombre: "Ingeniería Civil, de Sistemas y de Arquitectura", carreras: [
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería de Sistemas", precio: 4000 },
        { n: "Arquitectura", precio: 5000 }
      ]},
      { nombre: "Ingeniería Mecánica y Eléctrica", carreras: [
        { n: "Ingeniería Mecánica y Eléctrica", precio: 4000 }
      ]},
      { nombre: "Ingeniería Química e Industrias Alimentarias", carreras: [
        { n: "Ingeniería Química", precio: 4000 },
        { n: "Ingeniería en Industrias Alimentarias", precio: 4000 }
      ]},
      { nombre: "Ingeniería Zootecnia", carreras: [
        { n: "Ingeniería Zootecnista", precio: 4000 }
      ]},
      { nombre: "Medicina Humana", carreras: [
        { n: "Medicina Humana", precio: 4000 }
      ]},
      { nombre: "Medicina Veterinaria", carreras: [
        { n: "Medicina Veterinaria", precio: 3800 }
      ]}
    ]
  },
  {
    id: "usat",
    sigla: "USAT",
    nombre: "Univ. Católica Santo Toribio de Mogrovejo",
    tipo: "Privada",
    ciudad: "Chiclayo",
    color: "#7a1f2b",
    logo: "img/usat.jpg",
    facultades: [
      { nombre: "Ciencias Empresariales", carreras: [
        { n: "Administración de Empresas", precio: 3000 },
        { n: "Administración Hotelera y de Servicios Turísticos", precio: 3000 },
        { n: "Contabilidad", precio: 3000 },
        { n: "Economía", precio: 3000 }
      ]},
      { nombre: "Derecho", carreras: [
        { n: "Derecho", precio: 3800 }
      ]},
      { nombre: "Humanidades", carreras: [
        { n: "Educación Inicial", precio: 3000 },
        { n: "Educación Primaria", precio: 3000 },
        { n: "Educación Secundaria: Filosofía y Teología", precio: 3000 },
        { n: "Comunicación", precio: 3000 }
      ]},
      { nombre: "Ingeniería", carreras: [
        { n: "Ingeniería Civil y Ambiental", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Sistemas y Computación", precio: 4000 },
        { n: "Ingeniería Mecánica Eléctrica", precio: 4000 },
        { n: "Arquitectura", precio: 5000 }
      ]},
      { nombre: "Medicina", carreras: [
        { n: "Medicina Humana", precio: 4000 },
        { n: "Enfermería", precio: 3800 },
        { n: "Odontología", precio: 3800 },
        { n: "Psicología", precio: 3000 }
      ]}
    ]
  },
  {
    id: "uss",
    sigla: "USS",
    nombre: "Univ. Señor de Sipán",
    tipo: "Privada",
    ciudad: "Pimentel · Chiclayo",
    color: "#0a2a66",
    logo: "img/uss.png",
    facultades: [
      { nombre: "Ciencias Empresariales", carreras: [
        { n: "Gastronomía y Gestion Empresarial del Turismo", precio: 3000 },
        { n: "Administración", precio: 3000 },
        { n: "Contabilidad", precio: 3000 },
        { n: "Administración de Negocios Internacionales", precio: 3000 },
        { n: "Contabilidad y Finanzas", precio: 3000 },
        { n: "Administración y Emprendimiento", precio: 3000 },
        { n: "Administración y Marketing", precio: 3000 }
      ]},
      { nombre: "Derecho y Humanidades", carreras: [
        { n: "Derecho", precio: 3800 },
        { n: "Artes & Diseño Gráfico Empresarial", precio: 3000 },
        { n: "Ciencias de la Comunicación", precio: 3000 }
      ]},
      { nombre: "Ciencias de la Salud", carreras: [
        { n: "Medicina Humana", precio: 4000 },
        { n: "Enfermería", precio: 3800 },
        { n: "Estomatología", precio: 3800 },
        { n: "Tecnología Médica - Terapía Fisíca y Rehabilitacion", precio: 3800 },
        { n: "Tecnología Médica – Laboratorio Cliníco y Anatomía Patológica ", precio: 3800 },
        { n: "Tecnología Médica - Radiología", precio: 3800 },
        { n: "Psicología", precio: 3000 },
        { n: "Trabajo Social", precio: 3000 }
      ]},
      { nombre: "Ingeniería, Arquitectura y Urbanismo", carreras: [
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Sistemas", precio: 4000 },
        { n: "Ingeniería de Software", precio: 4000 },
        { n: "Ingeniería Agroindustrial e Industrias Alimentarias", precio: 4000 },
        { n: "Ingeniería Mecánica Eléctrica", precio: 4000 },
        { n: "Arquitectura", precio: 5000 },
        { n: "Arquitectura y Diseño de Interiores", precio: 5000 }
      ]}
    ]
  },
  {
    id: "utp",
    sigla: "UTP",
    nombre: "Univ. Tecnológica del Perú",
    tipo: "Privada",
    ciudad: "Chiclayo",
    color: "#c8102e",
    logo: "img/utp.png",
    facultades: [
      { nombre: "Negocios", carreras: [
        { n: "Administración de Empresas", precio: 3000 },
        { n: "Administración de Negocios Internacionales", precio: 3000 },
        { n: "Administración Hotelera y de Turismo", precio: 3000 },
        { n: "Contabilidad", precio: 3000 },
        { n: "Administración y Marketing", precio: 3000 },
        { n: "Economía", precio: 3000 }
      ]},
      { nombre: "Ingeniería", carreras: [
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Sistemas e Informática", precio: 4000 },
        { n: "Ingeniería de Software", precio: 4000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería de Seguridad Industrial y Minera", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Ingeniería Empresarial", precio: 4000 }
      ]},
      { nombre: "Derecho", carreras: [
        { n: "Derecho", precio: 3800 }
      ]},
      { nombre: "Ciencias de la Salud", carreras: [
        { n: "Enfermería", precio: 3800 },
        { n: "Farmacia y Bioquímica", precio: 3800 },
        { n: "Laboratorio Clínico y Anatomía Patalógica", precio: 3800 },
        { n: "Nutrición y Dietética", precio: 3800 },
        { n: "Obstetricia", precio: 3800 },
        { n: "Terapia Física", precio: 3800 }
      ]},
      { nombre: "Medicina", carreras: [
        { n: "Medicina", precio: 4000 }
      ]},
      { nombre: "Psicología", carreras: [
        { n: "Psicología", precio: 3000 }
      ]},
      { nombre: "Arquitectura", carreras: [
        { n: "Arquitectura", precio: 5000 },
        { n: "Diseño Profesional de Interiores", precio: 5000 }
      ]},
      { nombre: "Educación", carreras: [
        { n: "Educación Primaria", precio: 3000 },
        { n: "Educación Secundaria", precio: 3000 }
      ]}
    ]
  },
  {
    id: "ucv",
    sigla: "UCV",
    nombre: "Univ. César Vallejo",
    tipo: "Privada",
    ciudad: "Chiclayo",
    color: "#9c1d2b",
    logo: "img/ucv.png",
    facultades: [
      { nombre: "Ciencias Empresariales", carreras: [
        { n: "Administración y Marketing", precio: 3000 },
        { n: "Administración y Negocios Internacionales", precio: 3000 },
        { n: "Administración de Empresas", precio: 3000 },
        { n: "Contabilidad", precio: 3000 }
      ]},
      { nombre: "Ciencias de la Salud", carreras: [
        { n: "Enfermería", precio: 3800 },
        { n: "Nutrición", precio: 3800 },
        { n: "Psicología", precio: 3000 },
        { n: "Tecnología Médica – Terapia Física y Rehabilitación", precio: 3800 },
        { n: "Tecnología Médica – Laboratorio Clínico y Anatomía Patológica", precio: 3800 }
      ]},
      { nombre: "Derecho y Ciencias Políticas", carreras: [
        { n: "Derecho", precio: 3800 }
      ]},
      { nombre: "Ingeniería y Arquitectura", carreras: [
        { n: "Arquitectura", precio: 5000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Sistemas", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Ingeniería Mecánica Eléctrica", precio: 4000 },
        { n: "Ingeniería de Minas", precio: 4000 }
      ]},
      { nombre: "Humanidades", carreras: [
        { n: "Ciencias de la Comunicación", precio: 3000 },
        { n: "Ciencias del Deporte", precio: 3000 },
        { n: "Educación Inicial", precio: 3000 },
        { n: "Educación Primaria", precio: 3000 },
        { n: "Traducción e Interpretación", precio: 3000 },
        { n: "Educación en Idiomas Inglés", precio: 3000 }
      ]}
    ]
  },
  {
    id: "usmp",
    sigla: "USMP",
    nombre: "Univ. de San Martín de Porres",
    tipo: "Privada",
    ciudad: "Chiclayo",
    color: "#13294b",
    logo: "img/usmp.png",
    facultades: [
      { nombre: "Ciencias Administrativas y Recursos Humanos", carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Administración de Negocios Internacionales", precio: 3000 }
      ]},
      { nombre: "Ciencias Contables, Económicas y Financieras", carreras: [
        { n: "Contabilidad y Finanzas", precio: 3000 },
        { n: "Economía", precio: 3000 }
      ]},
      { nombre: "Ciencias de la Comunicación, Turismo y Psicología", carreras: [
        { n: "Ciencias de la Comunicación", precio: 3000 },
        { n: "Psicología", precio: 3000 }
      ]},
      { nombre: "Derecho", carreras: [
        { n: "Derecho", precio: 3800 }
      ]},
      { nombre: "Ingeniería y Arquitectura", carreras: [
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería en Ciencia de Datos", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería en Ciberseguridad y Análisis Forenses Digital", precio: 4000 },
        { n: "Ingeniería en IA y Róbotica", precio: 4000 },
        { n: "Arquitectura", precio: 5000 }
      ]},
      { nombre: "Medicina Humana", carreras: [
        { n: "Medicina Humana", precio: 4000 }
      ]},
      { nombre: "Odontología", carreras: [
        { n: "Odontología", precio: 3800 }
      ]}
    ]
  }
];
