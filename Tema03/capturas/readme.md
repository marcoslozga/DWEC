# Tarea 3: Variables, tipos y conversiones

Nombre: [Tu Nombre y Apellidos]
Curso: 2º Desarrollo de Aplicaciones Web
Asignatura: Desarrollo Web en Entornos Cliente

## Descripción de la tarea

Página web desarrollada como cuaderno de laboratorio para el Tema 3. El objetivo de la práctica es analizar el comportamiento de JavaScript en la declaración de variables con const y let, la comprobación de tipos mediante typeof, las conversiones explícitas, la coerción implícita de tipos en operaciones y el uso de plantillas de cadena.

## Estructura del proyecto

Carpeta tema03:
1. index.html: Página principal maquetada con Bootstrap 5.
2. js/app.js: Archivo JavaScript con las funciones de los cuatro ejercicios.
3. capturas/: Carpeta con las capturas de pantalla de la ejecución en local.
4. README.md: Documentación de la entrega y reflexión teórica.

## Evidencias de ejecución

1. a-pagina.png: Vista general de la página index.html en el navegador con la cabecera y las tarjetas.
2. capturas/b-consola-ej1.png: Muestra en la consola de los seis tipos de datos y sus typeof.
3. capturas/c-consola-ej2.png: Resultados en consola de las ocho conversiones explícitas.
4. capturas/d-consola-ej3.png: Evaluación de operaciones con coerción y comparaciones con operador débil y estricto.
5. capturas/e-consola-ej4.png: Salida del alert con la plantilla de cadena y el error de reasignación de const en la consola.

## Reflexión teórica

Durante la realización de los ejercicios, las conversiones a Boolean me parecieron las más claras porque siguen una regla directa: los valores falsy como 0, cadena vacía, null o undefined devuelven false, y el resto true. Lo que más me llamó la atención fue Number("12abc"), ya que esperaba que extrajera el número como hace parseInt, pero devuelve NaN. También resulta curioso que typeof null devuelva "object" por un error histórico del lenguaje. En cuanto a la coerción, se observa cómo el operador suma prioriza la concatenación cuando hay cadenas de texto, mientras que los demás operadores aritméticos fuerzan la conversión a número. Por estas razones, es fundamental utilizar la comparación estricta === en el desarrollo cliente.

## Fuentes consultadas

1. MDN Web Docs: Guía de gramática, tipos y coerción en JavaScript.
2. Apuntes de la asignatura: Tema 3 (El lenguaje de programación de clientes).