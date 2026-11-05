/* Tarea 6 · Marcos Lozano Gálvez · Objetos y arrays */

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// Presentación de arrays en los resultados.
// ============================================================

function comoTexto(lista) {
  console.log("comoTexto");
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Marcos",
  apellidos: "Lozano Gálvez",
  edad: 20,
  curso: "2.º DAW",
  presentarse: function () {
    console.log("presentarse", this);
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  console.log("verFicha");
  const salida = document.querySelector("#salida1");
  salida.textContent = "";
  const lista = document.createElement("ul");
  lista.classList.add("list-group");
  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");
    elemento.textContent = clave + ": " + estudiante[clave];
    lista.append(elemento);
  });
  const frase = document.createElement("p");
  frase.classList.add("mt-2");
  frase.textContent = estudiante.presentarse();
  salida.append(lista, frase);
  console.log(estudiante);
}

function cumplirAnios() {
  console.log("cumplirAnios");
  estudiante.edad += 1;
  verFicha();
}

function quitarCurso() {
  console.log("quitarCurso");
  delete estudiante.curso;
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// Añadir y quitar elementos, manteniendo el contador.
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  console.log("mostrarColores");
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  console.log("avisar2");
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  console.log("anadirColor");
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  console.log("quitarUltimo");
  if (colores.length === 0) {
    mostrarColores();
    avisar2("No quedan colores para quitar.");
    return;
  }
  const eliminado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Color eliminado:", eliminado);
}

function quitarPrimero() {
  console.log("quitarPrimero");
  if (colores.length === 0) {
    mostrarColores();
    avisar2("No quedan colores para quitar.");
    return;
  }
  const eliminado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Color eliminado:", eliminado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Catálogo inicial: nombre, precio y categoría.
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Pintar en la tabla los productos recibidos.
function pintarProductos(lista) {
  console.log("pintarProductos");
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  console.log("mostrarProductos");
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = productos.length + " productos en el catálogo.";
}

function ordenarPorPrecio() {
  console.log("ordenarPorPrecio");
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Productos ordenados de menor a mayor precio.";
}

function filtrarCaros() {
  console.log("filtrarCaros");
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = caros.length + " productos de más de 50 €.";
}

function buscarProducto() {
  console.log("buscarProducto");
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");
  if (texto === "") {
    pintarProductos([]);
    mensaje.textContent = "Escribe el nombre de un producto.";
    return;
  }
  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });
  if (encontrado === undefined) {
    pintarProductos([]);
    mensaje.textContent = "Sin coincidencias: find devuelve undefined.";
  } else {
    pintarProductos([encontrado]);
    mensaje.textContent = "Primer resultado: " + encontrado.nombre;
  }
  console.log("Resultado de find:", encontrado);
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Marcos",
  notas: [],
  anadirNota: function (nota) {
    console.log("alumno.anadirNota", nota);
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function () {
    console.log("alumno.media", this.notas);
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (total, nota) {
      return total + nota;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  console.log("mostrarNotas");
  const salida = document.querySelector("#notas");
  salida.textContent = "";
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1", "mb-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    salida.append(badge);
  });
  const media = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }
}

function anadirNota() {
  console.log("anadirNota");
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  if (casilla.value.trim() === "") {
    error.textContent = "Escribe una nota antes de añadirla.";
    error.classList.remove("d-none");
    return;
  }
  const nota = Number(casilla.value);
  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }
  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}

function borrarNotas() {
  console.log("borrarNotas");
  alumno.notas = [];
  document.querySelector("#error4").classList.add("d-none");
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  console.log("verDobles");
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });
  pintarLineas("#salida5", ["Dobles: " + comoTexto(dobles), "Original: " + comoTexto(numeros)]);
}

function verPares() {
  console.log("verPares");
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  pintarLineas("#salida5", ["Pares: " + comoTexto(pares), "Original: " + comoTexto(numeros)]);
}

function verSuma() {
  console.log("verSuma");
  const suma = numeros.reduce(function (total, numero) {
    return total + numero;
  }, 0);
  pintarLineas("#salida5", ["Suma: " + suma, "Original: " + comoTexto(numeros)]);
}

function verCadena() {
  console.log("verCadena");
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  const dobles = pares.map(function (numero) {
    return numero * 2;
  });
  const suma = dobles.reduce(function (total, numero) {
    return total + numero;
  }, 0);
  pintarLineas("#salida5", ["1. Pares: " + comoTexto(pares), "2. Dobles: " + comoTexto(dobles), "3. Suma: " + suma, "Original: " + comoTexto(numeros)]);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  console.log("mostrarCiudades");
  const salida = document.querySelector("#ciudades");
  salida.textContent = "";
  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-secondary", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    salida.append(badge);
  });
}

function verSlice() {
  console.log("verSlice");
  const parte = ciudades.slice(2, 5);
  pintarLineas("#salida6", ["slice devuelve: " + comoTexto(parte), "El array sigue teniendo " + ciudades.length + " ciudades."]);
}

function hacerSplice() {
  console.log("hacerSplice");
  if (ciudades.length < 3) {
    pintarLineas("#salida6", ["Quedan menos de tres ciudades. Pulsa Restaurar."]);
    return;
  }
  const eliminadas = ciudades.splice(2, 2);
  pintarLineas("#salida6", ["splice ha quitado: " + comoTexto(eliminadas), "Quedan " + ciudades.length + " ciudades."]);
  mostrarCiudades();
}

function restaurarCiudades() {
  console.log("restaurarCiudades");
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  pintarLineas("#salida6", ["Restauradas las " + ciudades.length + " ciudades originales."]);
}

function buscarCiudad() {
  console.log("buscarCiudad");
  const texto = document.querySelector("#buscarCiudad").value.trim();
  if (texto === "") {
    pintarLineas("#salida6", ["Escribe un nombre de ciudad."]);
    return;
  }
  pintarLineas("#salida6", ["Búsqueda exacta: " + texto, "includes: " + ciudades.includes(texto), "indexOf: " + ciudades.indexOf(texto)]);
}

mostrarCiudades();

// Cada resultado ocupa su propia línea y se crea con métodos del DOM.
function pintarLineas(selector, lineas) {
  console.log("pintarLineas", selector, lineas);
  const salida = document.querySelector(selector);
  salida.textContent = "";
  lineas.forEach(function (texto) {
    const linea = document.createElement("p");
    linea.classList.add("mb-1");
    linea.textContent = texto;
    salida.append(linea);
  });
}

