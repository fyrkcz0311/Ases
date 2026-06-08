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
        { n: "Ciencias Biológicas", precio: 4000 },
      ]},
      { nombre: "Ciencias Económicas, Administrativas y Contables", carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Contabilidad", precio: 0 },
        { n: "Economía", precio: 0 },
        { n: "Comercio y Negocios Internacionales", precio: 0 }
      ]},
      { nombre: "Ciencias Físicas y Matemáticas", carreras: [
        { n: "Física", precio: 0 },
        { n: "Matemáticas", precio: 0 },
        { n: "Estadística", precio: 0 },
        { n: "Computación e Informática", precio: 0 },
        { n: "Ingeniería Electrónica", precio: 0 }
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
        { n: "Derecho", precio: 3880 },
        { n: "Ciencia Política", precio: 3800 }
      ]},
      { nombre: "Enfermería", carreras: [
        { n: "Enfermería", precio: 0 }
      ]},
      { nombre: "Ingeniería Agrícola", carreras: [
        { n: "Ingeniería Agrícola", precio: 0 }
      ]},
      { nombre: "Ingeniería Civil, de Sistemas y de Arquitectura", carreras: [
        { n: "Ingeniería Civil", precio: 0 },
        { n: "Ingeniería de Sistemas", precio: 0 },
        { n: "Arquitectura", precio: 5000 }
      ]},
      { nombre: "Ingeniería Mecánica y Eléctrica", carreras: [
        { n: "Ingeniería Mecánica y Eléctrica", precio: 0 }
      ]},
      { nombre: "Ingeniería Química e Industrias Alimentarias", carreras: [
        { n: "Ingeniería Química", precio: 0 },
        { n: "Ingeniería en Industrias Alimentarias", precio: 0 }
      ]},
      { nombre: "Ingeniería Zootecnia", carreras: [
        { n: "Ingeniería Zootecnista", precio: 0 }
      ]},
      { nombre: "Medicina Humana", carreras: [
        { n: "Medicina Humana", precio: 0 }
      ]},
      { nombre: "Medicina Veterinaria", carreras: [
        { n: "Medicina Veterinaria", precio: 0 }
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
        { n: "Administración de Empresas", precio: 0 },
        { n: "Administración Hotelera y de Servicios Turísticos", precio: 0 },
        { n: "Contabilidad", precio: 0 },
        { n: "Economía", precio: 0 }
      ]},
      { nombre: "Derecho", carreras: [
        { n: "Derecho", precio: 0 }
      ]},
      { nombre: "Humanidades", carreras: [
        { n: "Educación Inicial", precio: 0 },
        { n: "Educación Primaria", precio: 0 },
        { n: "Educación Secundaria: Filosofía y Teología", precio: 0 },
        { n: "Comunicación", precio: 0 }
      ]},
      { nombre: "Ingeniería", carreras: [
        { n: "Ingeniería Civil y Ambiental", precio: 0 },
        { n: "Ingeniería Industrial", precio: 0 },
        { n: "Ingeniería de Sistemas y Computación", precio: 0 },
        { n: "Ingeniería Mecánica Eléctrica", precio: 0 },
        { n: "Arquitectura", precio: 0 }
      ]},
      { nombre: "Medicina", carreras: [
        { n: "Medicina Humana", precio: 0 },
        { n: "Enfermería", precio: 0 },
        { n: "Odontología", precio: 0 },
        { n: "Psicología", precio: 0 }
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
        { n: "Gastronomía y Gestion Empresarial del Turismo", precio: 0 },
        { n: "Administración", precio: 0 },
        { n: "Contabilidad", precio: 0 },
        { n: "Administración de Negocios Internacionales", precio: 0 },
        { n: "Contabilidad y Finanzas", precio: 0 },
        { n: "Administración y Emprendimiento", precio: 0 },
        { n: "Administración y Marketing", precio: 0 }
      ]},
      { nombre: "Derecho y Humanidades", carreras: [
        { n: "Derecho", precio: 0 },
        { n: "Artes & Diseño Gráfico Empresarial", precio: 0 },
        { n: "Ciencias de la Comunicación", precio: 0 }
      ]},
      { nombre: "Ciencias de la Salud", carreras: [
        { n: "Medicina Humana", precio: 0 },
        { n: "Enfermería", precio: 0 },
        { n: "Estomatología", precio: 0 },
        { n: "Tecnología Médica - Terapía Fisíca y Rehabilitacion", precio: 0 },
        { n: "Tecnología Médica – Laboratorio Cliníco y Anatomía Patológica ", precio: 0 },
        { n: "Tecnología Médica - Radiología", precio: 0 },
        { n: "Psicología", precio: 0 },
        { n: "Trabajo Social", precio: 0 }
      ]},
      { nombre: "Ingeniería, Arquitectura y Urbanismo", carreras: [
        { n: "Ingeniería Civil", precio: 0 },
        { n: "Ingeniería Industrial", precio: 0 },
        { n: "Ingeniería de Sistemas", precio: 0 },
        { n: "Ingeniería de Software", precio: 0 },
        { n: "Ingeniería Agroindustrial e Industrias Alimentarias", precio: 0 },
        { n: "Ingeniería Mecánica Eléctrica", precio: 0 },
        { n: "Arquitectura", precio: 0 },
        { n: "Arquitectura y Diseño de Interiores", precio: 0 }
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
        { n: "Administración de Empresas", precio: 0 },
        { n: "Administración de Negocios Internacionales", precio: 0 },
        { n: "Administración Hotelera y de Turismo", precio: 0 },
        { n: "Contabilidad", precio: 0 },
        { n: "Administración y Marketing", precio: 0 },
        { n: "Economía", precio: 0 }
      ]},
      { nombre: "Ingeniería", carreras: [
        { n: "Ingeniería Industrial", precio: 0 },
        { n: "Ingeniería de Sistemas e Informática", precio: 0 },
        { n: "Ingeniería de Software", precio: 0 },
        { n: "Ingeniería Civil", precio: 0 },
        { n: "Ingeniería de Seguridad Industrial y Minera", precio: 0 },
        { n: "Ingeniería Ambiental", precio: 0 },
        { n: "Ingeniería Empresarial", precio: 0 },
      ]},
      { nombre: "Derecho", carreras: [
        { n: "Derecho", precio: 0 },
      ]},
      { nombre: "Ciencias de la Salud", carreras: [
        { n: "Enfermería", precio: 0 },
        { n: "Farmacia y Bioquímica", precio: 0 },
        { n: "Laboratorio Clínico y Anatomía Patalógica", precio: 0 },
        { n: "Nutrición y Dietética", precio: 0 },
        { n: "Obstetricia", precio: 0 },
        { n: "Terapia Física", precio: 0 },
      ]},
      { nombre: "Medicina", carreras: [
        { n: "Medicina", precio: 0 },
      ]},
      { nombre: "Psicología", carreras: [
        { n: "Psicología", precio: 0 },
      ]},
      { nombre: "Arquitectura", carreras: [
        { n: "Arquitectura", precio: 0 },
        { n: "Diseño Profesional de Interiores", precio: 0 }
      ]},
      { nombre: "Educación", carreras: [
        { n: "Educación Primaria", precio: 0 },
        { n: "Educación Secundaria", precio: 0 }
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
        { n: "Administración y Marketing", precio: 0 },
        { n: "Administración y Negocios Internacionales", precio: 0 },
        { n: "Administración de Empresas", precio: 0 },
        { n: "Contabilidad", precio: 0 },
      ]},
      { nombre: "Ciencias de la Salud", carreras: [
        { n: "Enfermería", precio: 0 },
        { n: "Nutrición", precio: 0 },
        { n: "Psicología", precio: 0 },
        { n: "Tecnología Médica – Terapia Física y Rehabilitación", precio: 0 },
        { n: "Tecnología Médica – Laboratorio Clínico y Anatomía Patológica", precio: 0 }
      ]},
      { nombre: "Derecho y Ciencias Políticas", carreras: [
        { n: "Derecho", precio: 0 }
      ]},
      { nombre: "Ingeniería y Arquitectura", carreras: [
        { n: "Arquitectura", precio: 0 },
        { n: "Ingeniería Civil", precio: 0 },
        { n: "Ingeniería Industrial", precio: 0 },
        { n: "Ingeniería de Sistemas", precio: 0 },
        { n: "Ingeniería Ambiental", precio: 0 },
        { n: "Ingeniería Mecánica Eléctrica", precio: 0 },
        { n: "Ingeniería de Minas", precio: 0 }
      ]},
      { nombre: "Humanidades", carreras: [
        { n: "Ciencias de la Comunicación", precio: 0 },
        { n: "Ciencias del Deporte", precio: 0 },
        { n: "Educación Inicial", precio: 0 },
        { n: "Educación Primaria", precio: 0 },
        { n: "Traducción e Interpretación", precio: 0 },
        { n: "Educación en Idiomas Inglés", precio: 0 }
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
        { n: "Administración", precio: 0 },
        { n: "Administración de Negocios Internacionales", precio: 0 },
        { n: "Marketing", precio: 0 },
        { n: "Gestión de Recursos Humanos", precio: 0 }
      ]},
      { nombre: "Ciencias Contables, Económicas y Financieras", carreras: [
        { n: "Contabilidad y Finanzas", precio: 0 },
        { n: "Economía", precio: 0 }
      ]},
      { nombre: "Ciencias de la Comunicación, Turismo y Psicología", carreras: [
        { n: "Ciencias de la Comunicación", precio: 0 },
        { n: "Turismo y Hotelería", precio: 0 },
        { n: "Psicología", precio: 0 }
      ]},
      { nombre: "Derecho", carreras: [
        { n: "Derecho", precio: 0 }
      ]},
      { nombre: "Ingeniería y Arquitectura", carreras: [
        { n: "Ingeniería Civil", precio: 0 },
        { n: "Ingeniería en Ciencia de Datos", precio: 0 },
        { n: "Ingeniería Industrial", precio: 0 },
        { n: "Ingeniería en Ciberseguridad y Análisis Forenses Digital", precio: 0 },
        { n: "Ingeniería en IA y Róbotica", precio: 0 },
        { n: "Arquitectura", precio: 0 }
      ]},
      { nombre: "Medicina Humana", carreras: [
        { n: "Medicina Humana", precio: 0 }
      ]},
      { nombre: "Odontología", carreras: [
        { n: "Odontología", precio: 0 }
      ]},
      { nombre: "Obstetricia y Enfermería", carreras: [
        { n: "Enfermería", precio: 0 },
        { n: "Obstetricia", precio: 0 }
      ]}
    ]
  }
];
