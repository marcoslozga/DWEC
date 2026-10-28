/* Tarea 5 · Marcos Lozano Gálvez · Manipular el DOM */

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  const primero = document.getElementById("primero");
  const segundo = document.querySelector(".segundo");
  const parrafos = document.querySelectorAll("#contenido p");
  if (primero !== null) {
    primero.textContent = "Texto modificado por JavaScript";
  }
  if (segundo !== null) {
    segundo.classList.add("bg-warning-subtle");
  }
  if (parrafos.length >= 3) {
    parrafos[2].classList.add("text-danger");
  }
  console.log("Cambios aplicados a los párrafos disponibles");
}

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const parrafo = document.createElement("p");
  parrafo.textContent = "Párrafo nuevo " + (contenido.children.length + 1);
  contenido.append(parrafo);
  document.querySelector("#aviso2").classList.add("d-none");
  console.log("Párrafo añadido:", parrafo.textContent);
}

function eliminarUltimo() {
  const ultimo = document.querySelector("#contenido").lastElementChild;
  const aviso = document.querySelector("#aviso2");
  if (ultimo === null) {
    aviso.classList.remove("d-none");
    console.log("No quedan párrafos que eliminar");
  } else {
    ultimo.remove();
    aviso.classList.add("d-none");
    console.log("Último párrafo eliminado");
  }
}

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");
  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }
  console.log("Resaltado activado en", parrafos.length, "párrafos");
}

// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  // TODO: lee lo escrito en #nuevoTexto con value y quítale los espacios de los extremos con trim().
  // TODO: si está vacío, muestra el error #error4 (quítale "d-none") y no cambies nada.
  // TODO: si no, pon ese texto en el primer párrafo de #contenido con textContent y oculta el error.
}

function cambiarConHtml() {
  // TODO: lo mismo que cambiarTexto(), pero con innerHTML.
  //       Prueba las dos con <b>hola</b> y explica en el README qué diferencia ves y por qué es peligroso.
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  // TODO: lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
  // TODO: si no, crea un <li class="list-group-item"> con dos elementos dentro:
  //         · un <input> de tipo "checkbox" con la clase "form-check-input",
  //         · un <span> con el texto de la tarea (textContent).
  //       Cuelga el <li> de #listaTareas y vacía la casilla (value = "").
  // TODO: actualiza #totalTareas con el número de <li> que hay en la lista.
}

function borrarCompletadas() {
  // TODO: selecciona las casillas marcadas: document.querySelectorAll("#listaTareas input:checked").
  // TODO: si no hay ninguna, avisa en #error5. Si hay, recórrelas con for…of y borra el <li> de cada una
  //       (el <li> es el padre de la casilla: parentElement).
  // TODO: actualiza #totalTareas.
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
