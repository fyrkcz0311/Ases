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
  },
{
  id: "unmsm",
  sigla: "UNMSM",
  nombre: "Univ. Nacional Mayor de San Marcos",
  tipo: "Pública",
  ciudad: "Lima",
  color: "#8b1e2d",
  logo: "img/unmsm.png",
  facultades: [
    {
      nombre: "Ciencias Biológicas",
      carreras: [
        { n: "Ciencias Biológicas", precio: 3800 },
        { n: "Genética y Biotecnología", precio: 3800 },
        { n: "Microbiología y Parasitología", precio: 3800 }
      ]
    },
    {
      nombre: "Ciencias Físicas",
      carreras: [
        { n: "Física", precio: 4000 },
        { n: "Ingeniería Mecánica de Fluidos", precio: 4000 }
      ]
    },
    {
      nombre: "Ciencias Matemáticas",
      carreras: [
        { n: "Investigación Operativa", precio: 4000 },
        { n: "Matemática", precio: 4000 },
        { n: "Computación Científica", precio: 4000 },
        { n: "Estadística", precio: 4000 }
      ]
    },
    {
      nombre: "Farmacia y Bioquímica",
      carreras: [
        { n: "Farmacia y Bioquímica", precio: 3800 },
        { n: "Ciencia de los Alimentos", precio: 3800 },
        { n: "Toxicología", precio: 3800 }
      ]
    },
    {
      nombre: "Medicina",
      carreras: [
        { n: "Medicina Humana", precio: 4000 },
        { n: "Enfermería", precio: 3800 },
        { n: "Tecnología Médica", precio: 3800 },
        { n: "Obstetricia", precio: 3800 },
        { n: "Nutrición", precio: 3800 }
      ]
    },
    {
      nombre: "Medicina Veterinaria",
      carreras: [
        { n: "Medicina Veterinaria", precio: 3800 }
      ]
    },
    {
      nombre: "Odontología",
      carreras: [
        { n: "Odontología", precio: 3800 }
      ]
    },
    {
      nombre: "Psicología",
      carreras: [
        { n: "Psicología", precio: 3000 },
        { n: "Psicología Organizacional y de la Gestión Humana", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Administrativas",
      carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Administración de Negocios Internacionales", precio: 3000 },
        { n: "Administración de Turismo", precio: 3000 },
        { n: "Administración de la Gastronomía", precio: 3000 },
        { n: "Administración Marítima y Portuaria", precio: 3000 },
        { n: "Marketing", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Contables",
      carreras: [
        { n: "Contabilidad", precio: 3000 },
        { n: "Gestión Tributaria", precio: 3000 },
        { n: "Auditoría Empresarial y del Sector Público", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Económicas",
      carreras: [
        { n: "Economía", precio: 3000 },
        { n: "Economía Internacional", precio: 3000 },
        { n: "Economía Pública", precio: 3000 }
      ]
    },
    {
      nombre: "Educación",
      carreras: [
        { n: "Educación", precio: 3000 },
        { n: "Educación Física", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Sociales",
      carreras: [
        { n: "Antropología", precio: 3000 },
        { n: "Arqueología", precio: 3000 },
        { n: "Geografía", precio: 3000 },
        { n: "Historia", precio: 3000 },
        { n: "Sociología", precio: 3000 },
        { n: "Trabajo Social", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho y Ciencia Política",
      carreras: [
        { n: "Derecho", precio: 3800 },
        { n: "Ciencia Política", precio: 3800 }
      ]
    },
    {
      nombre: "Letras y Ciencias Humanas",
      carreras: [
        { n: "Arte", precio: 3000 },
        { n: "Bibliotecología y Ciencias de la Información", precio: 3000 },
        { n: "Conservación y Restauración", precio: 3000 },
        { n: "Comunicación Social", precio: 3000 },
        { n: "Filosofía", precio: 3000 },
        { n: "Lingüística", precio: 3000 },
        { n: "Literatura", precio: 3000 },
        { n: "Danza", precio: 3000 }
      ]
    },
    {
      nombre: "Ingeniería de Sistemas e Informática",
      carreras: [
        { n: "Ingeniería de Sistemas", precio: 4000 },
        { n: "Ingeniería de Software", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Electrónica y Eléctrica",
      carreras: [
        { n: "Ingeniería Biomédica", precio: 4000 },
        { n: "Ingeniería Electrónica", precio: 4000 },
        { n: "Ingeniería Eléctrica", precio: 4000 },
        { n: "Ingeniería de Telecomunicaciones", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Geológica, Minera, Metalúrgica y Geográfica",
      carreras: [
        { n: "Ingeniería Geográfica", precio: 4000 },
        { n: "Ingeniería Geológica", precio: 4000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería Metalúrgica", precio: 4000 },
        { n: "Ingeniería de Minas", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Industrial",
      carreras: [
        { n: "Ingeniería Textil y Confecciones", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Seguridad y Salud en el Trabajo", precio: 4000 }
      ]
    },
    {
      nombre: "Química e Ingeniería Química",
      carreras: [
        { n: "Química", precio: 4000 },
        { n: "Ingeniería Química", precio: 4000 },
        { n: "Ingeniería Agroindustrial", precio: 4000 },
        { n: "Ingeniería del Agua y Tecnologías de Tratamiento", precio: 4000 }
      ]
    }
  ]
},
{
  id: "pucp",
  sigla: "PUCP",
  nombre: "Pontificia Univ. Católica del Perú",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#003f7d",
  logo: "img/pucp.png",
  facultades: [
    {
      nombre: "Arquitectura y Urbanismo",
      carreras: [
        { n: "Arquitectura", precio: 5000 }
      ]
    },
    {
      nombre: "Arte y Diseño",
      carreras: [
        { n: "Arte, Moda y Diseño Textil", precio: 3000 },
        { n: "Diseño Gráfico", precio: 3000 },
        { n: "Diseño Industrial", precio: 3000 },
        { n: "Educación Artística", precio: 3000 },
        { n: "Escultura", precio: 3000 },
        { n: "Grabado", precio: 3000 },
        { n: "Pintura", precio: 3000 }
      ]
    },
    {
      nombre: "Artes Escénicas",
      carreras: [
        { n: "Creación y Producción Escénica", precio: 3000 },
        { n: "Danza", precio: 3000 },
        { n: "Música", precio: 3000 },
        { n: "Teatro", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Contables",
      carreras: [
        { n: "Contabilidad", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias e Ingeniería",
      carreras: [
        { n: "Estadística", precio: 4000 },
        { n: "Física", precio: 4000 },
        { n: "Matemáticas", precio: 4000 },
        { n: "Química", precio: 4000 },
        { n: "Ingeniería Ambiental y Sostenible", precio: 4000 },
        { n: "Ingeniería Biomédica PUCP", precio: 4000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería de las Telecomunicaciones", precio: 4000 },
        { n: "Ingeniería de Minas", precio: 4000 },
        { n: "Ingeniería Electrónica", precio: 4000 },
        { n: "Ingeniería Geológica", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería Informática", precio: 4000 },
        { n: "Ingeniería Mecánica", precio: 4000 },
        { n: "Ingeniería Mecatrónica", precio: 4000 },
        { n: "Ingeniería Química", precio: 4000 }
      ]
    },
    {
      nombre: "Ciencias y Artes de la Comunicación",
      carreras: [
        { n: "Comunicación Audiovisual", precio: 3000 },
        { n: "Comunicación para el Desarrollo", precio: 3000 },
        { n: "Periodismo", precio: 3000 },
        { n: "Publicidad", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Sociales",
      carreras: [
        { n: "Antropología", precio: 3000 },
        { n: "Ciencia Política y Gobierno", precio: 3000 },
        { n: "Economía", precio: 3000 },
        { n: "Finanzas", precio: 3000 },
        { n: "Relaciones Internacionales", precio: 3000 },
        { n: "Sociología", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        { n: "Derecho", precio: 3800 }
      ]
    },
    {
      nombre: "Educación",
      carreras: [
        { n: "Educación Inicial", precio: 3000 },
        { n: "Educación Primaria", precio: 3000 },
        { n: "Educación Secundaria", precio: 3000 }
      ]
    },
    {
      nombre: "Gastronomía, Hotelería y Turismo",
      carreras: [
        { n: "Gastronomía", precio: 3000 },
        { n: "Hotelería", precio: 3000 },
        { n: "Turismo", precio: 3000 }
      ]
    },
    {
      nombre: "Gestión y Alta Dirección",
      carreras: [
        { n: "Gestión", precio: 3000 }
      ]
    },
    {
      nombre: "Letras y Ciencias Humanas",
      carreras: [
        { n: "Arqueología", precio: 3000 },
        { n: "Ciencias de la Información", precio: 3000 },
        { n: "Filosofía", precio: 3000 },
        { n: "Geografía y Medio Ambiente", precio: 3000 },
        { n: "Historia", precio: 3000 },
        { n: "Humanidades", precio: 3000 },
        { n: "Lingüística y Literatura", precio: 3000 }
      ]
    },
    {
      nombre: "Psicología",
      carreras: [
        { n: "Psicología", precio: 3000 }
      ]
    }
  ]
},
{
  id: "upch",
  sigla: "UPCH",
  nombre: "Univ. Peruana Cayetano Heredia",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#007a5e",
  logo: "img/upch.png",
  facultades: [
    {
      nombre: "Ciencias e Ingeniería",
      carreras: [
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería Biomédica", precio: 4000 },
        { n: "Ingeniería Informática", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Farmacia y Bioquímica", precio: 3800 },
        { n: "Química", precio: 4000 },
        { n: "Nutrición", precio: 3800 },
        { n: "Biología", precio: 3800 }
      ]
    },
    {
      nombre: "Educación",
      carreras: [
        { n: "Educación", precio: 3000 },
        { n: "Educación Inicial", precio: 3000 },
        { n: "Educación Primaria", precio: 3000 }
      ]
    },
    {
      nombre: "Enfermería",
      carreras: [
        { n: "Enfermería", precio: 3800 }
      ]
    },
    {
      nombre: "Estomatología",
      carreras: [
        { n: "Estomatología", precio: 3800 }
      ]
    },
    {
      nombre: "Medicina",
      carreras: [
        { n: "Medicina", precio: 4000 },
        { n: "Tecnología Médica", precio: 3800 }
      ]
    },
    {
      nombre: "Medicina Veterinaria y Zootecnia",
      carreras: [
        { n: "Medicina Veterinaria y Zootecnia", precio: 3800 }
      ]
    },
    {
      nombre: "Psicología",
      carreras: [
        { n: "Psicología", precio: 3000 }
      ]
    },
    {
      nombre: "Salud Pública y Administración",
      carreras: [
        { n: "Administración en Salud", precio: 3000 },
        { n: "Salud Pública y Salud Global", precio: 3800 }
      ]
    }
  ]
},
{
  id: "uni",
  sigla: "UNI",
  nombre: "Univ. Nacional de Ingeniería",
  tipo: "Pública",
  ciudad: "Lima",
  color: "#8b0000",
  logo: "img/uni.png",
  facultades: [
    {
      nombre: "Arquitectura, Urbanismo y Artes",
      carreras: [
        { n: "Arquitectura", precio: 5000 },
        { n: "Urbanismo", precio: 5000 }
      ]
    },
    {
      nombre: "Ingeniería Civil",
      carreras: [
        { n: "Ingeniería Civil", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Química y Textil",
      carreras: [
        { n: "Ingeniería Química", precio: 4000 },
        { n: "Ingeniería Textil", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería de Petróleo, Gas Natural y Petroquímica",
      carreras: [
        { n: "Ingeniería de Petróleo y Gas Natural", precio: 4000 },
        { n: "Ingeniería Petroquímica", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Económica, Estadística y Ciencias Sociales",
      carreras: [
        { n: "Ingeniería Económica", precio: 4000 },
        { n: "Ingeniería Estadística", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Industrial y Sistemas",
      carreras: [
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Sistemas", precio: 4000 },
        { n: "Ingeniería de Software", precio: 4000 },
        { n: "Ingeniería de Inteligencia Artificial", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Ambiental",
      carreras: [
        { n: "Ingeniería Sanitaria", precio: 4000 },
        { n: "Ingeniería de Higiene y Seguridad Industrial", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Geológica, Minera y Metalúrgica",
      carreras: [
        { n: "Ingeniería Geológica", precio: 4000 },
        { n: "Ingeniería Metalúrgica", precio: 4000 },
        { n: "Ingeniería de Minas", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Eléctrica y Electrónica",
      carreras: [
        { n: "Ingeniería Eléctrica", precio: 4000 },
        { n: "Ingeniería Electrónica", precio: 4000 },
        { n: "Ingeniería de Telecomunicaciones", precio: 4000 },
        { n: "Ingeniería de Ciberseguridad", precio: 4000 },
        { n: "Ingeniería Biomédica", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Mecánica",
      carreras: [
        { n: "Ingeniería Mecánica", precio: 4000 },
        { n: "Ingeniería Mecánica y Eléctrica", precio: 4000 },
        { n: "Ingeniería Naval", precio: 4000 },
        { n: "Ingeniería Mecatrónica", precio: 4000 },
        { n: "Ingeniería Aeroespacial", precio: 4000 }
      ]
    },
    {
      nombre: "Ciencias",
      carreras: [
        { n: "Física", precio: 4000 },
        { n: "Matemáticas", precio: 4000 },
        { n: "Química", precio: 4000 },
        { n: "Ingeniería Física", precio: 4000 },
        { n: "Ciencia de la Computación", precio: 4000 }
      ]
    }
  ]
},
{
  id: "ulima",
  sigla: "ULIMA",
  nombre: "Univ. de Lima",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#ff6a00",
  logo: "img/ulima.png",
  facultades: [
    {
      nombre: "Arquitectura",
      carreras: [
        { n: "Arquitectura", precio: 5000 }
      ]
    },
    {
      nombre: "Ciencias Empresariales y Económicas",
      carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Contabilidad y Finanzas", precio: 3000 },
        { n: "Economía", precio: 3000 },
        { n: "Marketing", precio: 3000 },
        { n: "Negocios Internacionales", precio: 3000 }
      ]
    },
    {
      nombre: "Comunicación",
      carreras: [
        { n: "Comunicación", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        { n: "Derecho", precio: 3800 }
      ]
    },
    {
      nombre: "Ingeniería",
      carreras: [
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Sistemas", precio: 4000 },
        { n: "Ingeniería Mecatrónica", precio: 4000 }
      ]
    },
    {
      nombre: "Psicología",
      carreras: [
        { n: "Psicología", precio: 3000 }
      ]
    }
  ]
},
{
  id: "up",
  sigla: "UP",
  nombre: "Univ. del Pacífico",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#7b001c",
  logo: "img/up.png",
  facultades: [
    {
      nombre: "Ciencias Empresariales",
      carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Contabilidad", precio: 3000 },
        { n: "Marketing", precio: 3000 },
        { n: "Negocios Internacionales", precio: 3000 }
      ]
    },
    {
      nombre: "Economía y Finanzas",
      carreras: [
        { n: "Economía", precio: 3000 },
        { n: "Finanzas", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        { n: "Derecho", precio: 3800 }
      ]
    },
    {
      nombre: "Ingeniería",
      carreras: [
        { n: "Ingeniería Empresarial", precio: 4000 },
        { n: "Ingeniería de la Información", precio: 4000 },
        { n: "Ingeniería en Innovación y Diseño", precio: 4000 }
      ]
    },
    {
      nombre: "Humanidades",
      carreras: [
        { n: "Humanidades Digitales", precio: 3000 },
        { n: "Política, Filosofía y Economía", precio: 3000 }
      ]
    }
  ]
},
{
  id: "unalm",
  sigla: "UNALM",
  nombre: "Univ. Nacional Agraria La Molina",
  tipo: "Pública",
  ciudad: "Lima",
  color: "#2f6b2f",
  logo: "img/unalm.png",
  facultades: [
    {
      nombre: "Agronomía",
      carreras: [
        { n: "Agronomía", precio: 4000 }
      ]
    },
    {
      nombre: "Ciencias",
      carreras: [
        { n: "Biología", precio: 3800 },
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Ingeniería Meteorológica y Gestión de Riesgos Climáticos", precio: 4000 }
      ]
    },
    {
      nombre: "Ciencias Forestales",
      carreras: [
        { n: "Ingeniería Forestal", precio: 4000 }
      ]
    },
    {
      nombre: "Economía y Planificación",
      carreras: [
        { n: "Economía", precio: 3000 },
        { n: "Estadística Informática", precio: 4000 },
        { n: "Ingeniería en Gestión Empresarial", precio: 4000 }
      ]
    },
    {
      nombre: "Industrias Alimentarias",
      carreras: [
        { n: "Industrias Alimentarias", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Agrícola",
      carreras: [
        { n: "Ingeniería Agrícola", precio: 4000 }
      ]
    },
    {
      nombre: "Pesquería",
      carreras: [
        { n: "Pesquería", precio: 4000 }
      ]
    },
    {
      nombre: "Zootecnia",
      carreras: [
        { n: "Zootecnia", precio: 4000 }
      ]
    }
  ]
},
{
  id: "unfv",
  sigla: "UNFV",
  nombre: "Univ. Nacional Federico Villarreal",
  tipo: "Pública",
  ciudad: "Lima",
  color: "#003b73",
  logo: "img/unfv.png",
  facultades: [
    {
      nombre: "Administración",
      carreras: [
        { n: "Administración de Empresas", precio: 3000 },
        { n: "Administración Pública", precio: 3000 },
        { n: "Administración de Turismo", precio: 3000 },
        { n: "Marketing", precio: 3000 },
        { n: "Negocios Internacionales", precio: 3000 }
      ]
    },
    {
      nombre: "Arquitectura y Urbanismo",
      carreras: [
        { n: "Arquitectura", precio: 5000 }
      ]
    },
    {
      nombre: "Ciencias Económicas",
      carreras: [
        { n: "Economía", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Financieras y Contables",
      carreras: [
        { n: "Contabilidad", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Naturales y Matemática",
      carreras: [
        { n: "Biología", precio: 3800 },
        { n: "Estadística", precio: 4000 },
        { n: "Física", precio: 4000 },
        { n: "Matemática", precio: 4000 },
        { n: "Química", precio: 4000 }
      ]
    },
    {
      nombre: "Ciencias Sociales",
      carreras: [
        { n: "Ciencias de la Comunicación", precio: 3000 },
        { n: "Sociología", precio: 3000 },
        { n: "Trabajo Social", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho y Ciencia Política",
      carreras: [
        { n: "Derecho", precio: 3800 },
        { n: "Ciencia Política", precio: 3800 }
      ]
    },
    {
      nombre: "Educación",
      carreras: [
        { n: "Educación Inicial", precio: 3000 },
        { n: "Educación Primaria", precio: 3000 },
        { n: "Educación Secundaria", precio: 3000 },
        { n: "Educación Física", precio: 3000 }
      ]
    },
    {
      nombre: "Humanidades",
      carreras: [
        { n: "Antropología", precio: 3000 },
        { n: "Arqueología", precio: 3000 },
        { n: "Filosofía", precio: 3000 },
        { n: "Historia", precio: 3000 },
        { n: "Lingüística", precio: 3000 },
        { n: "Literatura", precio: 3000 }
      ]
    },
    {
      nombre: "Ingeniería Civil",
      carreras: [
        { n: "Ingeniería Civil", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Electrónica e Informática",
      carreras: [
        { n: "Ingeniería Electrónica", precio: 4000 },
        { n: "Ingeniería Informática", precio: 4000 },
        { n: "Ingeniería Mecatrónica", precio: 4000 },
        { n: "Ingeniería de Telecomunicaciones", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Geográfica, Ambiental y Ecoturismo",
      carreras: [
        { n: "Ingeniería Geográfica", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Ingeniería en Ecoturismo", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería Industrial y de Sistemas",
      carreras: [
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Sistemas", precio: 4000 }
      ]
    },
    {
      nombre: "Medicina Hipólito Unanue",
      carreras: [
        { n: "Medicina", precio: 4000 },
        { n: "Enfermería", precio: 3800 },
        { n: "Nutrición", precio: 3800 },
        { n: "Obstetricia", precio: 3800 }
      ]
    },
    {
      nombre: "Oceanografía, Pesquería, Ciencias Alimentarias y Acuicultura",
      carreras: [
        { n: "Oceanografía", precio: 4000 },
        { n: "Ingeniería Pesquera", precio: 4000 },
        { n: "Ingeniería Alimentaria", precio: 4000 },
        { n: "Ingeniería en Acuicultura", precio: 4000 }
      ]
    },
    {
      nombre: "Odontología",
      carreras: [
        { n: "Odontología", precio: 3800 }
      ]
    },
    {
      nombre: "Psicología",
      carreras: [
        { n: "Psicología", precio: 3000 }
      ]
    },
    {
      nombre: "Tecnología Médica",
      carreras: [
        { n: "Laboratorio y Anatomía Patológica", precio: 3800 },
        { n: "Optometría", precio: 3800 },
        { n: "Radiología", precio: 3800 },
        { n: "Terapia Física y Rehabilitación", precio: 3800 },
        { n: "Terapia de Lenguaje", precio: 3800 }
      ]
    }
  ]
},
{
  id: "utec",
  sigla: "UTEC",
  nombre: "Univ. de Ingeniería y Tecnología",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#00a3a3",
  logo: "img/utec.png",
  facultades: [
    {
      nombre: "Ciencias Básicas",
      carreras: [
        { n: "Física", precio: 4000 }
      ]
    },
    {
      nombre: "Computación",
      carreras: [
        { n: "Ciberseguridad", precio: 4000 },
        { n: "Ciencia de Datos e Inteligencia Artificial", precio: 4000 },
        { n: "Ciencias de la Computación", precio: 4000 },
        { n: "Sistemas de Información", precio: 4000 }
      ]
    },
    {
      nombre: "Ingeniería",
      carreras: [
        { n: "Bioingeniería", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería de la Energía", precio: 4000 },
        { n: "Ingeniería Electrónica", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería Mecánica", precio: 4000 },
        { n: "Ingeniería Mecatrónica", precio: 4000 },
        { n: "Ingeniería Química", precio: 4000 }
      ]
    },
    {
      nombre: "Negocios",
      carreras: [
        { n: "Administración y Negocios Digitales", precio: 3000 },
        { n: "Business Analytics", precio: 3000 }
      ]
    }
  ]
},
{
  id: "usil",
  sigla: "USIL",
  nombre: "Univ. San Ignacio de Loyola",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#004b8d",
  logo: "img/usil.png",
  facultades: [
    {
      nombre: "Administración Hotelera, Turismo y Gastronomía",
      carreras: [
        { n: "Administración Hotelera", precio: 3000 },
        { n: "Administración en Turismo", precio: 3000 },
        { n: "Arte Culinario", precio: 3000 },
        { n: "Gastronomía y Gestión de Restaurantes", precio: 3000 }
      ]
    },
    {
      nombre: "Arquitectura",
      carreras: [
        { n: "Arquitectura, Urbanismo y Territorio", precio: 5000 }
      ]
    },
    {
      nombre: "Artes y Humanidades",
      carreras: [
        { n: "Arte y Diseño Empresarial", precio: 3000 },
        { n: "Música", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias de la Salud",
      carreras: [
        { n: "Medicina Humana", precio: 4000 },
        { n: "Nutrición y Dietética", precio: 3800 },
        { n: "Psicología", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Empresariales",
      carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Administración y Emprendimiento", precio: 3000 },
        { n: "Economía", precio: 3000 },
        { n: "Economía y Finanzas", precio: 3000 },
        { n: "International Business", precio: 3000 },
        { n: "Marketing", precio: 3000 }
      ]
    },
    {
      nombre: "Comunicación",
      carreras: [
        { n: "Comunicaciones", precio: 3000 },
        { n: "Comunicación y Publicidad", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        { n: "Derecho", precio: 3800 }
      ]
    },
    {
      nombre: "Educación",
      carreras: [
        { n: "Educación Inicial", precio: 3000 },
        { n: "Educación Primaria", precio: 3000 }
      ]
    },
    {
      nombre: "Ingeniería e Inteligencia Artificial",
      carreras: [
        { n: "Ingeniería Agroindustrial y Negocios Internacionales", precio: 4000 },
        { n: "Ingeniería Ambiental", precio: 4000 },
        { n: "Ingeniería Biomédica", precio: 4000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería Empresarial", precio: 4000 },
        { n: "Ingeniería en Ciberseguridad", precio: 4000 },
        { n: "Ingeniería en Industrias Alimentarias", precio: 4000 },
        { n: "Ingeniería Industrial y Comercial", precio: 4000 },
        { n: "Ingeniería Mecatrónica", precio: 4000 },
        { n: "Ingeniería de Sistemas de Información", precio: 4000 },
        { n: "Ingeniería de Software", precio: 4000 },
        { n: "Ciencia de Datos e Inteligencia Artificial", precio: 4000 }
      ]
    }
  ]
},
{
  id: "urp",
  sigla: "URP",
  nombre: "Univ. Ricardo Palma",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#006b3f",
  logo: "img/urp.png",
  facultades: [
    {
      nombre: "Arquitectura y Urbanismo",
      carreras: [
        { n: "Arquitectura", precio: 5000 }
      ]
    },
    {
      nombre: "Ciencias Biológicas",
      carreras: [
        { n: "Biología", precio: 3800 },
        { n: "Medicina Veterinaria", precio: 3800 }
      ]
    },
    {
      nombre: "Ciencias Económicas y Empresariales",
      carreras: [
        { n: "Administración y Gerencia", precio: 3000 },
        { n: "Administración de Negocios Globales", precio: 3000 },
        { n: "Contabilidad y Finanzas", precio: 3000 },
        { n: "Economía", precio: 3000 },
        { n: "Marketing Global y Administración Comercial", precio: 3000 },
        { n: "Turismo, Hotelería y Gastronomía", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho y Ciencia Política",
      carreras: [
        { n: "Derecho", precio: 3800 }
      ]
    },
    {
      nombre: "Humanidades y Lenguas Modernas",
      carreras: [
        { n: "Traducción e Interpretación", precio: 3000 }
      ]
    },
    {
      nombre: "Ingeniería",
      carreras: [
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería Electrónica", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería Informática", precio: 4000 },
        { n: "Ingeniería Mecatrónica", precio: 4000 }
      ]
    },
    {
      nombre: "Medicina Humana",
      carreras: [
        { n: "Medicina Humana", precio: 4000 }
      ]
    },
    {
      nombre: "Psicología",
      carreras: [
        { n: "Psicología", precio: 3000 }
      ]
    }
  ]
},
{
  id: "usmp-lima",
  sigla: "USMP",
  nombre: "Univ. de San Martín de Porres",
  tipo: "Privada",
  ciudad: "Lima",
  color: "#13294b",
  logo: "img/usmp.png",
  facultades: [
    {
      nombre: "Ciencias Administrativas y Recursos Humanos",
      carreras: [
        { n: "Administración", precio: 3000 },
        { n: "Administración de Negocios Internacionales", precio: 3000 },
        { n: "Gestión de Recursos Humanos", precio: 3000 },
        { n: "Marketing", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias Contables, Económicas y Financieras",
      carreras: [
        { n: "Contabilidad y Finanzas", precio: 3000 },
        { n: "Economía", precio: 3000 }
      ]
    },
    {
      nombre: "Ciencias de la Comunicación, Turismo y Psicología",
      carreras: [
        { n: "Ciencias de la Comunicación", precio: 3000 },
        { n: "Turismo y Hotelería", precio: 3000 },
        { n: "Psicología", precio: 3000 }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        { n: "Derecho", precio: 3800 }
      ]
    },
    {
      nombre: "Ingeniería y Arquitectura",
      carreras: [
        { n: "Arquitectura", precio: 5000 },
        { n: "Ingeniería Civil", precio: 4000 },
        { n: "Ingeniería Industrial", precio: 4000 },
        { n: "Ingeniería de Computación y Sistemas", precio: 4000 },
        { n: "Ciencias Aeronáuticas", precio: 4000 },
        { n: "Ingeniería en Ciencias de Datos", precio: 4000 },
        { n: "Ingeniería en Ciberseguridad y Análisis Forense Digital", precio: 4000 },
        { n: "Ingeniería en Inteligencia Artificial y Robótica", precio: 4000 }
      ]
    },
    {
      nombre: "Medicina Humana",
      carreras: [
        { n: "Medicina Humana", precio: 4000 }
      ]
    },
    {
      nombre: "Obstetricia y Enfermería",
      carreras: [
        { n: "Obstetricia", precio: 3800 },
        { n: "Enfermería", precio: 3800 }
      ]
    },
    {
      nombre: "Odontología",
      carreras: [
        { n: "Odontología", precio: 3800 }
      ]
    },
    {
      nombre: "Instituto de Arte",
      carreras: [
        { n: "Educación, Dirección e Interpretación Musical", precio: 3000 }
      ]
    }
  ]
}
];

