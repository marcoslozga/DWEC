/* Tarea 5 · Marcos Lozano Galvez · Manipular el DOM */

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

// Ejercicio 4: comparar texto literal y HTML.
function cambiarTexto() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido p");
  if (texto === "") {
    error.textContent = "El campo está vacío.";
    error.classList.remove("d-none");
    console.log("Cambiar texto: campo vacío");
  } else if (primero === null) {
    error.textContent = "Añade un párrafo antes de cambiar el texto.";
    error.classList.remove("d-none");
    console.log("Cambiar texto: no hay párrafos");
  } else {
    primero.textContent = texto;
    error.classList.add("d-none");
    console.log("Texto cambiado con textContent");
  }
}

function cambiarConHtml() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido p");
  if (texto === "") {
    error.textContent = "El campo está vacío.";
    error.classList.remove("d-none");
    console.log("Probar HTML: campo vacío");
  } else if (primero === null) {
    error.textContent = "Añade un párrafo antes de cambiar el texto.";
    error.classList.remove("d-none");
    console.log("Probar HTML: no hay párrafos");
  } else {
    // Solo se usa aquí para la comparación que pide el ejercicio.
    primero.innerHTML = texto;
    error.classList.add("d-none");
    console.log("Texto cambiado con innerHTML: prueba del ejercicio 4");
  }
}

// Ejercicio 5: lista de tareas creada con nodos.
function anadirTarea() {
  const entrada = document.querySelector("#tareaInput");
  const texto = entrada.value.trim();
  const error = document.querySelector("#error5");
  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
    console.log("Añadir tarea: campo vacío");
  } else {
    const tarea = document.createElement("li");
    tarea.classList.add("list-group-item");
    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.classList.add("form-check-input", "me-2");
    const descripcion = document.createElement("span");
    descripcion.textContent = texto;
    tarea.append(casilla, descripcion);
    document.querySelector("#listaTareas").append(tarea);
    entrada.value = "";
    error.classList.add("d-none");
    console.log("Tarea añadida:", texto);
  }
  document.querySelector("#totalTareas").textContent = document.querySelectorAll("#listaTareas li").length;
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");
  if (marcadas.length === 0) {
    error.textContent = "No hay tareas marcadas para borrar.";
    error.classList.remove("d-none");
  } else {
    for (const casilla of marcadas) {
      casilla.parentElement.remove();
    }
    error.classList.add("d-none");
  }
  document.querySelector("#totalTareas").textContent = document.querySelectorAll("#listaTareas li").length;
  console.log("Tareas completadas borradas:", marcadas.length);
}

// Ejercicio 6: datos del navegador y puntos de corte de Bootstrap.
function verDatosVentana() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;
  let punto;
  if (ancho < 576) {
    punto = "xs";
  } else if (ancho < 768) {
    punto = "sm";
  } else if (ancho < 992) {
    punto = "md";
  } else if (ancho < 1200) {
    punto = "lg";
  } else if (ancho < 1400) {
    punto = "xl";
  } else {
    punto = "xxl";
  }
  document.querySelector("#datoPunto").textContent = punto;
  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;
  console.log("Datos de ventana:", ancho, alto, "punto de corte:", punto);
}
