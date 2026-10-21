/*
  Tarea 4 · DWEC · [Nombre y apellidos]
  Calculadora y bucles.
  Las funciones de ayudas.js leen las casillas y escriben los resultados.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;

// Ejercicio 1 · Calculadora
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Sumar: faltan números");
    return;
  }
  const resultado = n1 + n2;
  mostrar(`${n1} + ${n2} = ${resultado}`);
  console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Restar: faltan números");
    return;
  }
  const resultado = n1 - n2;
  mostrar(`${n1} - ${n2} = ${resultado}`);
  console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Multiplicar: faltan números");
    return;
  }
  const resultado = n1 * n2;
  mostrar(`${n1} × ${n2} = ${resultado}`);
  console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Dividir: faltan números");
    return;
  }
  if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.log("Dividir: el segundo número es 0");
    return;
  }
  const resultado = n1 / n2;
  mostrar(`${n1} / ${n2} = ${resultado}`);
  console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Potencia: faltan números");
    return;
  }
  const resultado = n1 ** n2;
  mostrar(`${n1} ** ${n2} = ${resultado}`);
  console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.log("Módulo: faltan números");
    return;
  }
  if (n2 === 0) {
    mostrar("No se puede calcular el módulo con divisor 0.", "danger");
    console.log("Módulo: el segundo número es 0");
    return;
  }
  const resultado = n1 % n2;
  mostrar(`${n1} % ${n2} = ${resultado}`);
  console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
}

// Ejercicio 2 · Comparaciones
function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números para compararlos.", "danger");
    console.log("Comparar: faltan números");
    return;
  }
  if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
  } else if (n2 > n1) {
    mostrar(`${n2} es mayor que ${n1}.`);
  } else {
    mostrar(`Los dos números son iguales: ${n1}.`);
  }
  console.log(`Comparar: ${n1} y ${n2}`);
}

function parOImpar() {
  const n1 = leerNumero("numero1");
  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1 para comprobarlo.", "danger");
    console.log("Par o impar: falta el número 1");
    return;
  }
  if (n1 % 1 !== 0) {
    mostrar(`${n1} tiene decimales; no es par ni impar.`, "warning");
    console.log(`Par o impar: ${n1} tiene decimales`);
    return;
  }
  const resultado = n1 % 2 === 0 ? "par" : "impar";
  mostrar(`${n1} es ${resultado}.`);
  console.log(`Par o impar: ${n1} es ${resultado}`);
}

// Comprueba el valor que indica cuántas veces se repite el bucle.
function validarRepeticiones(veces) {
  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`Escribe un número entero de repeticiones, como máximo ${MAXIMO_REPETICIONES}.`, "danger");
    return false;
  }
  return true;
}

function mostrarTotal(contador) {
  const palabra = contador === 1 ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${palabra}`);
}

// Ejercicio 3 · Bucles con texto
function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  if (!validarRepeticiones(veces)) {
    console.log("Bucle for: dato de repeticiones no válido");
    return;
  }
  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }
  mostrarTotal(contador);
  console.log(`Bucle for: ${contador} repeticiones`);
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  if (!validarRepeticiones(veces)) {
    console.log("Bucle while: dato de repeticiones no válido");
    return;
  }
  let contador = 0;
  while (contador < veces) {
    contador++;
    anadirLinea(`while · repetición ${contador} de ${veces}`);
  }
  mostrarTotal(contador);
  console.log(`Bucle while: ${contador} repeticiones`);
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  if (!validarRepeticiones(veces)) {
    console.log("Bucle do...while: dato de repeticiones no válido");
    return;
  }
  let contador = 0;
  do {
    contador++;
    anadirLinea(`do…while · repetición ${contador} de ${veces}`);
  } while (contador < veces);
  mostrarTotal(contador);
  console.log(`Bucle do...while: ${contador} repeticiones`);
}

// Ejercicio 4 · Bucles con badges
function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  if (!validarRepeticiones(veces)) {
    console.log("Badges for: dato de repeticiones no válido");
    return;
  }
  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    const color = i % 2 === 0 ? "warning" : "primary";
    anadirBadge(i, color);
    contador++;
  }
  mostrarTotal(contador);
  console.log(`Badges for: ${contador} repeticiones`);
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  if (!validarRepeticiones(veces)) {
    console.log("Badges while: dato de repeticiones no válido");
    return;
  }
  let contador = 0;
  while (contador < veces) {
    contador++;
    const color = contador % 2 === 0 ? "warning" : "primary";
    anadirBadge(contador, color);
  }
  mostrarTotal(contador);
  console.log(`Badges while: ${contador} repeticiones`);
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  if (!validarRepeticiones(veces)) {
    console.log("Badges do...while: dato de repeticiones no válido");
    return;
  }
  let contador = 0;
  do {
    contador++;
    const color = contador % 2 === 0 ? "warning" : "primary";
    anadirBadge(contador, color);
  } while (contador < veces);
  mostrarTotal(contador);
  console.log(`Badges do...while: ${contador} repeticiones`);
}
