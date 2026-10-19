function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  const edad = 20;
  const nombre = "Marcos";
  const esEstudiante = true;
  const coche = null;
  let telefono;
  const poblacionMundial = 8000000000n;

  let asignatura;
  asignatura = "DWEC";

  console.log("edad =", edad, "→", typeof edad);
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("esEstudiante =", esEstudiante, "→", typeof esEstudiante);
  console.log("coche =", coche, "→", typeof coche);
  console.log("telefono =", telefono, "→", typeof telefono);
  console.log("poblacionMundial =", poblacionMundial, "→", typeof poblacionMundial);
  console.log("asignatura =", asignatura, "→", typeof asignatura);
}

function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  console.log("String(123) =", String(123), typeof String(123));
  console.log('Number("123") =', Number("123"), typeof Number("123"));
  console.log('Number("12abc") =', Number("12abc"), typeof Number("12abc"));
  console.log('Number("") =', Number(""), typeof Number(""));
  console.log("Number(true) =", Number(true), typeof Number(true));
  console.log("Boolean(0) =", Boolean(0), typeof Boolean(0));
  console.log('Boolean("texto") =', Boolean("texto"), typeof Boolean("texto"));
  console.log('Boolean("") =', Boolean(""), typeof Boolean(""));
}

function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  console.log('"5" - 2 =', "5" - 2);
  console.log('"5" + 2 =', "5" + 2);
  console.log('"10" * "2" =', "10" * "2");
  console.log("true + 1 =", true + 1);
  console.log('"Hola" + 5 =', "Hola" + 5);
  console.log('"20" / "4" =', "20" / "4");

  console.log('5 == "5" →', 5 == "5");
  console.log('5 === "5" →', 5 === "5");
  console.log("0 == false →", 0 == false);
  console.log("0 === false →", 0 === false);
  console.log("null == undefined →", null == undefined);
  console.log("null === undefined →", null === undefined);
}

function ejercicio4() {
  console.log("--- Ejercicio 4 · Plantillas de cadena ---");

  const nombre = "Marcos";
  const ciclo = "DAW";
  const curso = "2026/2027";
  const aficion = "Programación";
  let horasEstudio = 6;
  horasEstudio += 2;

  const plantilla = `Me llamo ${nombre}, estudio ${ciclo} (${curso}), me gusta la ${aficion} y he estudiado ${horasEstudio}h.`;
  alert(plantilla);
  console.log("Template string:", plantilla);

  const concatenado = "Me llamo " + nombre + ", estudio " + ciclo + " (" + curso + "), me gusta la " + aficion + " y he estudiado " + horasEstudio + "h.";
  console.log("Concatenación +:", concatenado);

  console.log("¿Son estrictamente iguales?:", plantilla === concatenado);
}