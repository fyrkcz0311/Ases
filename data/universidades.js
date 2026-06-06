// Banco de datos: Universidades de Chiclayo, sus facultades y carreras.
// Datos referenciales y exhaustivos. Pueden ajustarse según la oferta vigente de cada casa de estudios.
window.UNIVERSIDADES = [
  {
    id: "unprg",
    sigla: "UNPRG",
    nombre: "Univ. Nacional Pedro Ruiz Gallo",
    tipo: "Pública",
    ciudad: "Lambayeque",
    color: "#1f4e8c",
    logo: "img/unprg.png",
    facultades: [
      { nombre: "Agronomía", carreras: ["Agronomía"] },
      { nombre: "Ciencias Biológicas", carreras: ["Ciencias Biológicas", "Biología – Microbiología y Parasitología", "Biología – Pesquería", "Biología – Botánica", "Biología – Zoología"] },
      { nombre: "Ciencias Económicas, Administrativas y Contables", carreras: ["Administración", "Contabilidad", "Economía", "Comercio y Negocios Internacionales"] },
      { nombre: "Ciencias Físicas y Matemáticas", carreras: ["Física", "Matemáticas", "Estadística", "Computación e Informática", "Ingeniería Electrónica"] },
      { nombre: "Ciencias Histórico Sociales y Educación", carreras: ["Educación Inicial", "Educación Primaria", "Educación – Lengua y Literatura", "Educación – Matemática y Computación", "Educación – Ciencias Naturales", "Educación – Ciencias Histórico Sociales y Filosofía", "Educación Física", "Psicología", "Sociología", "Arqueología", "Ciencias de la Comunicación", "Arte – Diseño Gráfico Empresarial"] },
      { nombre: "Derecho y Ciencia Política", carreras: ["Derecho"] },
      { nombre: "Enfermería", carreras: ["Enfermería"] },
      { nombre: "Ingeniería Agrícola", carreras: ["Ingeniería Agrícola"] },
      { nombre: "Ingeniería Civil, de Sistemas y de Arquitectura", carreras: ["Ingeniería Civil", "Ingeniería de Sistemas", "Arquitectura"] },
      { nombre: "Ingeniería Mecánica y Eléctrica", carreras: ["Ingeniería Mecánica y Eléctrica"] },
      { nombre: "Ingeniería Química e Industrias Alimentarias", carreras: ["Ingeniería Química", "Ingeniería en Industrias Alimentarias"] },
      { nombre: "Ingeniería Zootecnia", carreras: ["Ingeniería Zootecnista"] },
      { nombre: "Medicina Humana", carreras: ["Medicina Humana"] },
      { nombre: "Medicina Veterinaria", carreras: ["Medicina Veterinaria"] }
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
      { nombre: "Ciencias Empresariales", carreras: ["Administración de Empresas", "Administración Hotelera y de Servicios Turísticos", "Contabilidad", "Economía"] },
      { nombre: "Derecho", carreras: ["Derecho"] },
      { nombre: "Humanidades", carreras: ["Educación Inicial", "Educación Primaria", "Educación Secundaria – Lengua y Literatura", "Educación Secundaria – Filosofía y Teología", "Educación Secundaria – Idiomas (Inglés)", "Comunicación"] },
      { nombre: "Ingeniería", carreras: ["Ingeniería Civil y Ambiental", "Ingeniería Industrial", "Ingeniería de Sistemas y Computación", "Ingeniería Mecánica Eléctrica", "Arquitectura"] },
      { nombre: "Medicina", carreras: ["Medicina Humana", "Enfermería", "Odontología", "Psicología"] }
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
      { nombre: "Ciencias Empresariales", carreras: ["Administración", "Administración Pública", "Contabilidad", "Economía", "Negocios Internacionales", "Turismo y Negocios"] },
      { nombre: "Derecho y Humanidades", carreras: ["Derecho", "Psicología", "Ciencias de la Comunicación", "Artes & Diseño Gráfico Empresarial", "Educación Inicial"] },
      { nombre: "Ciencias de la Salud", carreras: ["Medicina Humana", "Enfermería", "Estomatología", "Tecnología Médica – Laboratorio Clínico", "Tecnología Médica – Terapia Física y Rehabilitación"] },
      { nombre: "Ingeniería, Arquitectura y Urbanismo", carreras: ["Ingeniería Civil", "Ingeniería Industrial", "Ingeniería de Sistemas", "Ingeniería Económica", "Ingeniería Agroindustrial y Comercio Exterior", "Ingeniería Mecánica Eléctrica", "Arquitectura"] }
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
      { nombre: "Administración y Negocios", carreras: ["Administración de Empresas", "Administración de Negocios Internacionales", "Administración Hotelera y de Turismo", "Administración de Banca y Finanzas", "Contabilidad", "Marketing", "Economía Gerencial"] },
      { nombre: "Ingeniería", carreras: ["Ingeniería Industrial", "Ingeniería de Sistemas e Informática", "Ingeniería de Software", "Ingeniería Civil", "Ingeniería Electrónica", "Ingeniería Mecánica", "Ingeniería Mecatrónica", "Ingeniería de Telecomunicaciones", "Ingeniería de Seguridad Industrial y Minera", "Ingeniería de Minas", "Ingeniería Automotriz", "Ingeniería Aeronáutica"] },
      { nombre: "Derecho y Ciencias Humanas", carreras: ["Derecho", "Psicología", "Ciencias de la Comunicación", "Diseño Digital Publicitario", "Educación y Gestión del Aprendizaje"] },
      { nombre: "Arquitectura", carreras: ["Arquitectura"] }
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
      { nombre: "Ciencias Empresariales", carreras: ["Administración", "Contabilidad", "Marketing y Dirección de Empresas", "Negocios Internacionales", "Administración en Turismo y Hotelería"] },
      { nombre: "Ciencias de la Salud", carreras: ["Medicina", "Enfermería", "Estomatología", "Nutrición", "Psicología", "Tecnología Médica – Terapia Física y Rehabilitación"] },
      { nombre: "Derecho y Humanidades", carreras: ["Derecho", "Ciencias de la Comunicación", "Educación Inicial", "Educación Primaria", "Traducción e Interpretación", "Arte y Diseño Gráfico Empresarial"] },
      { nombre: "Ingeniería y Arquitectura", carreras: ["Ingeniería Civil", "Ingeniería Industrial", "Ingeniería de Sistemas", "Ingeniería Empresarial", "Ingeniería Ambiental", "Ingeniería Mecánica Eléctrica", "Ingeniería de Minas", "Arquitectura"] }
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
      { nombre: "Ciencias Administrativas y Recursos Humanos", carreras: ["Administración", "Administración de Negocios Internacionales", "Marketing", "Gestión de Recursos Humanos"] },
      { nombre: "Ciencias Contables, Económicas y Financieras", carreras: ["Contabilidad y Finanzas", "Economía"] },
      { nombre: "Ciencias de la Comunicación, Turismo y Psicología", carreras: ["Ciencias de la Comunicación", "Turismo y Hotelería", "Psicología"] },
      { nombre: "Derecho", carreras: ["Derecho"] },
      { nombre: "Ingeniería y Arquitectura", carreras: ["Ingeniería Civil", "Ingeniería de Computación y Sistemas", "Ingeniería Industrial", "Ingeniería Electrónica", "Arquitectura"] },
      { nombre: "Medicina Humana", carreras: ["Medicina Humana"] },
      { nombre: "Odontología", carreras: ["Odontología"] },
      { nombre: "Obstetricia y Enfermería", carreras: ["Enfermería", "Obstetricia"] }
    ]
  }
];
