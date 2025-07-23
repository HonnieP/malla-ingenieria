export interface Curso {
  id: string;
  nombre: string;
  semestre: number;
  creditos: number;
  requisitos: string[];
  tipo: "obligatorio" | "optativo";
  estado: "aprobada" | "cursada" | "inscrita" | "reprobada" | "no inscrita";
}

// Datos de la estudiante
export const estudiante = {
  nombre: "Brittany",
  carrera: "Ingeniería en Administración mención Finanzas",
  creditosTotales: 426,
  creditosObligatorios: 390,
  creditosOptativos: 36
};

export const cursos: Curso[] = [
   { id: "1", nombre: "Administración y Modelos de Negocios", semestre: 1, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "2", nombre: "Mercados Financieros", semestre: 1, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "3", nombre: "Contabilidad", semestre: 1, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "4", nombre: "Habilidades Básicas de Comunicación", semestre: 1, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "5", nombre: "Herramientas Tecnológicas", semestre: 1, creditos: 10, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "6", nombre: "Nivelación Matemática", semestre: 1, creditos: 12, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "7", nombre: "Proceso de Portafolio 1", semestre: 1, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "cursada" },
  { id: "8", nombre: "Diagnóstico Empresarial", semestre: 2, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "9", nombre: "Finanzas de Corto Plazo", semestre: 2, creditos: 10, requisitos: ["8"], tipo: "obligatorio", estado: "aprobada" },
  { id: "10", nombre: "Fundamentos de Antropología", semestre: 2, creditos: 4, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "11", nombre: "Habilidades de Comunicación Efectiva", semestre: 2, creditos: 8, requisitos: ["4"], tipo: "obligatorio", estado: "aprobada" },
  { id: "12", nombre: "Álgebra", semestre: 2, creditos: 10, requisitos: ["6"], tipo: "obligatorio", estado: "aprobada" },
  { id: "13", nombre: "Contabilidad para la Gestión Empresarial", semestre: 2, creditos: 10, requisitos: ["3"], tipo: "obligatorio", estado: "aprobada" },
  { id: "14", nombre: "Proceso de Portafolio 2", semestre: 2, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "cursada" },
  { id: "15", nombre: "Análisis Económico", semestre: 3, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "16", nombre: "Finanzas de Largo Plazo", semestre: 3, creditos: 10, requisitos: ["9"], tipo: "obligatorio", estado: "inscrita" },
  { id: "17", nombre: "Control Presupuestario y Costos", semestre: 3, creditos: 10, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "18", nombre: "Inglés Básico I", semestre: 3, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "19", nombre: "Estadística Descriptiva", semestre: 3, creditos: 8, requisitos: ["12"], tipo: "obligatorio", estado: "aprobada" },
  { id: "20", nombre: "Mentalidad Emprendedora", semestre: 3, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "21", nombre: "Doctrina Social de la Iglesia", semestre: 3, creditos: 4, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "22", nombre: "Proceso de Portafolio 3", semestre: 3, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "cursada" },
  { id: "23", nombre: "Procesos Tributarios y Laborales", semestre: 4, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "24", nombre: "Inglés Básico II", semestre: 4, creditos: 8, requisitos: ["18"], tipo: "obligatorio", estado: "aprobada" },
  { id: "25", nombre: "Taller de Financiamiento", semestre: 4, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "26", nombre: "Taller de Inversiones", semestre: 4, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "27", nombre: "Liderazgo Efectivo", semestre: 4, creditos: 8, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "28", nombre: "Estadística Inferencial", semestre: 4, creditos: 8, requisitos: ["19"], tipo: "obligatorio", estado: "reprobada" },
  { id: "29", nombre: "Gestión del negocio en sistemas ERP", semestre: 4, creditos: 8, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "30", nombre: "Ética para el Trabajo", semestre: 4, creditos: 4, requisitos: ["10"], tipo: "obligatorio", estado: "aprobada" },
  { id: "31", nombre: "Proceso de Portafolio 4", semestre: 4, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "cursada" },
  { id: "32", nombre: "Inglés Elemental", semestre: 5, creditos: 16, requisitos: ["24"], tipo: "obligatorio", estado: "inscrita" },
  { id: "33", nombre: "Administración Estratégica", semestre: 5, creditos: 5, requisitos: ["8"], tipo: "obligatorio", estado: "inscrita" },
  { id: "34", nombre: "Gestión de Personas", semestre: 5, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "35", nombre: "Finanzas Corporativas", semestre: 5, creditos: 10, requisitos: [], tipo: "obligatorio", estado: "inscrita" },
  { id: "36", nombre: "Data Empresarial", semestre: 5, creditos: 6, requisitos: [], tipo: "optativo", estado: "inscrita" },
  { id: "37", nombre: "Práctica Laboral", semestre: 5, creditos: 10, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "38", nombre: "Legislación Previsional y S. Social", semestre: 5, creditos: 8, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "39", nombre: "Proceso de Portafolio 5", semestre: 5, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "cursada" },
  { id: "40", nombre: "Inglés Intermedio", semestre: 6, creditos: 16, requisitos: ["32"], tipo: "obligatorio", estado: "no inscrita" },
  { id: "41", nombre: "Control de Gestión y BSC", semestre: 6, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "42", nombre: "Gestión de la Cadena de Suministro", semestre: 6, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "reprobada" },
  { id: "43", nombre: "Economía para la Gestión", semestre: 6, creditos: 8, requisitos: ["15"], tipo: "obligatorio", estado: "aprobada" },
  { id: "44", nombre: "Cálculo Diferencial e Integral", semestre: 6, creditos: 12, requisitos: ["12"], tipo: "obligatorio", estado: "reprobada" },
  { id: "45", nombre: "Suministros y Compras Internacionales", semestre: 6, creditos: 6, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "46", nombre: "Proceso de Portafolio 6", semestre: 6, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "47", nombre: "Economía Circular y Sustentable", semestre: 7, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "48", nombre: "Gestión de calidad", semestre: 7, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "49", nombre: "Gestión Comercial y Marketing", semestre: 7, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "50", nombre: "Formulación y Evaluación de Proyectos", semestre: 7, creditos: 10, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "51", nombre: "ESP Finanzas", semestre: 7, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "52", nombre: "Innovación en Procesos", semestre: 7, creditos: 6, requisitos: ["20"], tipo: "obligatorio", estado: "no inscrita" },
  { id: "53", nombre: "Ética Profesional", semestre: 7, creditos: 4, requisitos: [], tipo: "obligatorio", estado: "inscrita" },
  { id: "54", nombre: "Proceso de Portafolio Final", semestre: 7, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "55", nombre: "Práctica Profesional", semestre: 8, creditos: 20, requisitos: [], tipo: "obligatorio", estado: "no inscrita" },
  { id: "56", nombre: "Portafolio de Título", semestre: 8, creditos: 20, requisitos: [], tipo: "obligatorio", estado: "no inscrita" }
  ];
export function calcularCreditos(cursos: Curso[]) {
  let obligatorios = 0;
  let optativos = 0;

  for (const curso of cursos) {
    if (curso.estado === "aprobada") {
      if (curso.tipo === "obligatorio") {
        obligatorios += curso.creditos;
      } else if (curso.tipo === "optativo") {
        optativos += curso.creditos;
      }
    }
  }

  return {
    creditosAprobadosObligatorios: obligatorios,
    creditosAprobadosOptativos: optativos,
    creditosTotalesAprobados: obligatorios + optativos
  };
}
