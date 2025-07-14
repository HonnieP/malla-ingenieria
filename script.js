const ramos = [
  // Solo una muestra por espacio. Puedes seguir agregando todos.
  { id: "adm", nombre: "Administración", periodo: "I", requisitos: [] },
  { id: "merc", nombre: "Mercados Financieros", periodo: "I", requisitos: [] },
  { id: "cont", nombre: "Contabilidad", periodo: "I", requisitos: [] },
  { id: "habcom", nombre: "Hab. Comunicación", periodo: "I", requisitos: [] },
  { id: "herr", nombre: "Herramientas Tecnológicas", periodo: "I", requisitos: [] },
  { id: "nivmat", nombre: "Nivelación Matemática", periodo: "I", requisitos: [] },
  { id: "algebra", nombre: "Álgebra", periodo: "II", requisitos: ["nivmat"] },
  { id: "estad-desc", nombre: "Estadística Desc.", periodo: "III", requisitos: ["algebra"] },
  { id: "estad-inf", nombre: "Estadística Inf.", periodo: "IV", requisitos: ["estad-desc"] },
  { id: "eco", nombre: "Análisis Económico", periodo: "III", requisitos: [] },
  { id: "eco-gest", nombre: "Economía Gestión", periodo: "VI", requisitos: ["eco"] },
  { id: "mentalidad", nombre: "Mentalidad Empr.", periodo: "III", requisitos: [] },
  { id: "innov", nombre: "Innovación", periodo: "VII", requisitos: ["mentalidad"] },
  { id: "diag", nombre: "Diagnóstico Empres.", periodo: "II", requisitos: [] },
  { id: "estrategia", nombre: "Adm. Estratégica", periodo: "V", requisitos: ["diag"] },
  { id: "ing1", nombre: "Inglés Básico I", periodo: "III", requisitos: [] },
  { id: "ing2", nombre: "Inglés Básico II", periodo: "IV", requisitos: ["ing1"] },
  { id: "ing-elem", nombre: "Inglés Elemental", periodo: "V", requisitos: ["ing2"] },
  { id: "ing-int", nombre: "Inglés Intermedio", periodo: "VI", requisitos: ["ing-elem"] },
  { id: "pprof", nombre: "Práctica Profesional", periodo: "VIII", requisitos: ["adm", "merc", "cont", "diag", "eco", "estrategia"] }
];

const estado = {};
ramos.forEach(r => estado[r.id] = false);

function puedeDesbloquear(ramo) {
  return ramo.requisitos.every(r => estado[r]);
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  // Agrupar por periodo
  const periodos = {};
  ramos.forEach(r => {
    if (!periodos[r.periodo]) periodos[r.periodo] = [];
    periodos[r.periodo].push(r);
  });

  // Crear columnas por periodo
  for (const [periodo, ramosPeriodo] of Object.entries(periodos)) {
    const div = document.createElement("div");
    div.className = "periodo";
    div.innerHTML = `<h2>Periodo ${periodo}</h2>`;

    ramosPeriodo.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;

      const habilitado = puedeDesbloquear(ramo);
      if (estado[ramo.id]) divRamo.classList.add("aprobado");
      else if (habilitado) divRamo.classList.add("habilitado");

      if (habilitado) {
        divRamo.addEventListener("click", () => {
          estado[ramo.id] = !estado[ramo.id];
          renderMalla();
        });
      }

      div.appendChild(divRamo);
    });

    contenedor.appendChild(div);
  }
}

renderMalla();
