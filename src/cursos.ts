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

// Lista de cursos (completa según el archivo)
export const cursos: Curso[] = [
  { id: "1", nombre: "Administración y Modelos de Negocios", semestre: 1, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "2", nombre: "Mercados Financieros", semestre: 1, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "3", nombre: "Contabilidad", semestre: 1, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "4", nombre: "Habilidades Básicas de Comunicación", semestre: 1, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "5", nombre: "Herramientas Tecnológicas", semestre: 1, creditos: 10, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "6", nombre: "Nivelación Matemática", semestre: 1, creditos: 12, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "7", nombre: "Diagnóstico Empresarial", semestre: 2, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "8", nombre: "Finanzas de Corto Plazo", semestre: 2, creditos: 10, requisitos: ["7"], tipo: "obligatorio", estado: "aprobada" },
  { id: "9", nombre: "Fundamentos de Antropología", semestre: 2, creditos: 4, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "10", nombre: "Habilidades de Comunicación Efectiva", semestre: 2, creditos: 8, requisitos: ["4"], tipo: "obligatorio", estado: "aprobada" },
  { id: "11", nombre: "Álgebra", semestre: 2, creditos: 10, requisitos: ["6"], tipo: "obligatorio", estado: "aprobada" },
  { id: "12", nombre: "Contabilidad para la Gestión Empresarial", semestre: 2, creditos: 10, requisitos: ["3"], tipo: "obligatorio", estado: "aprobada" },
  { id: "13", nombre: "Análisis Económico", semestre: 3, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "14", nombre: "Control Presupuestario y Costos", semestre: 3, creditos: 10, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "15", nombre: "Inglés Básico I", semestre: 3, creditos: 8, requisitos: [], tipo: "obligatorio", estado: "aprobada" },
  { id: "16", nombre: "Estadística Descriptiva", semestre: 3, creditos: 8, requisitos: ["11"], tipo: "obligatorio", estado: "aprobada" },
  { id: "17", nombre: "Mentalidad Emprendedora", semestre: 3, creditos: 6, requisitos: [], tipo: "obligatorio", estado: "aprobada" },

  // Cursos Optativos
  { id: "101", nombre: "Doctrina Social de la Iglesia", semestre: 3, creditos: 4, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "102", nombre: "Liderazgo Efectivo", semestre: 4, creditos: 8, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "103", nombre: "Gestión del negocio en sistemas ERP", semestre: 4, creditos: 8, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "104", nombre: "Suministros y Compras Internacionales", semestre: 6, creditos: 6, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "105", nombre: "Legislación Previsional y S. Social", semestre: 5, creditos: 8, requisitos: [], tipo: "optativo", estado: "aprobada" },
  { id: "106", nombre: "Data Empresarial", semestre: 5, creditos: 6, requisitos: [], tipo: "optativo", estado: "inscrita" }
];

// Función para calcular los créditos aprobados
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

// Ejemplo de uso
const resultado = calcularCreditos(cursos);
console.log(`Estudiante: ${estudiante.nombre}`);
console.log(`Carrera: ${estudiante.carrera}`);
console.log(`Créditos obligatorios aprobados: ${resultado.creditosAprobadosObligatorios}/${estudiante.creditosObligatorios}`);
console.log(`Créditos optativos aprobados: ${resultado.creditosAprobadosOptativos}/${estudiante.creditosOptativos}`);
console.log(`Créditos totales aprobados: ${resultado.creditosTotalesAprobados}/${estudiante.creditosTotales}`);
