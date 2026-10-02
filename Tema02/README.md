Tarea 2 - Navegadores, motores y primera página interactiva

Alumno: Marcos Lozano Gálvez
Módulo: Desarrollo Web Entornos Cliente (DWEC)
Tema: 2. Lenguajes y herramientas de programación en clientes web

1. Qué he realizado

En esta tarea he creado un pequeño sitio web formado por dos páginas:

index.html: información sobre navegadores y sus motores.

interaccion.html: página con tres botones que utilizan JavaScript.

Las dos páginas utilizan Bootstrap, tienen la etiqueta viewport y comparten la misma barra de navegación con mi nombre y enlaces entre las dos páginas.

La estructura utiliza .container, .row y .col-* para que la página se adapte a diferentes tamaños de pantalla.

2. Navegadores y motores

He comparado Chrome, Firefox, Safari, Edge y Opera.

Los navegadores no utilizan todos el mismo motor de renderizado. Chrome, Edge y Opera utilizan Blink y son navegadores basados en Chromium. Firefox utiliza Gecko y Safari utiliza WebKit. Para JavaScript, Chrome, Edge y Opera utilizan V8, Firefox utiliza SpiderMonkey y Safari utiliza JavaScriptCore.

Compartir motor hace que algunos navegadores tengan un comportamiento parecido, pero también existen diferencias entre motores. Por eso, al desarrollar una web, es importante probarla en más de un navegador y comprobar también el funcionamiento en móvil.

3. Ejemplo de compatibilidad

He consultado la característica Popover API en Can I Use.

La compatibilidad cambia según el navegador y la versión. Por ejemplo, según la consulta realizada, Firefox empieza a tener soporte desde la versión 125, mientras que Chrome y Edge lo tienen desde versiones posteriores de sus correspondientes rangos indicados por Can I Use.

Fecha de consulta: 2 de octubre de 2026.

4. Reflexión

Si un cliente me encargara una página web, primero la probaría en Chrome y Firefox porque utilizan motores de renderizado diferentes. También comprobaría la página en Safari cuando fuera posible y la probaría desde un móvil. De esta forma podría detectar problemas de compatibilidad y de adaptación a pantallas pequeñas.

5. Interacción con JavaScript

En interaccion.html he añadido tres botones:

Saludar: muestra un alert() con mi nombre y deja una traza en la consola.

Simular un error: escribe un mensaje mediante console.error() sin mostrar ninguna ventana.

¿Qué navegador soy?: muestra navigator.userAgent mediante alert() y también lo escribe en la consola.

Todo el JavaScript está en el archivo externo js/app.js.

6. Quién hace qué

En el botón Saludar, HTML se encarga de crear el botón y de indicar qué función se ejecuta al pulsarlo.

Bootstrap se encarga principalmente de la apariencia y de la maquetación mediante sus clases.

JavaScript se encarga de ejecutar la función, mostrar el alert() y escribir el mensaje en la consola.

7. Comparación de los userAgent

Al probar la página en Chrome y Firefox, los dos userAgent contienen algunas palabras que pueden parecer extrañas, como Mozilla, AppleWebKit o Safari.

Estas cadenas aparecen por motivos históricos y de compatibilidad. Por eso no siempre significa que el navegador que estamos utilizando sea realmente Mozilla o Safari. En la cadena se pueden reconocer también partes específicas como Chrome o Firefox.

8. Capturas

En la carpeta capturas/ se incluyen las evidencias realizadas en mi equipo:

01-index-ordenador.png: index.html abierto en el ordenador.

En la primera captura se observa index html con mi nombre y todo bien puesto

02-interaccion-movil.png: interaccion.html en modo dispositivo móvil.

En la segunda se observa que hemos abierto el interaccion.html en el modo dispositivo movil

03-consola-botones.png: consola con las trazas de los tres botones.

Se observa como funcionan los botones 

04a-useragent-chrome.png: alert del userAgent en Chrome.

04b-useragent-firefox.png: alert del userAgent en Firefox.

05-vscode-live-server.png: VS Code con la carpeta del proyecto y Live Server funcionando.

9. Fuentes consultadas

MDN - Rendering engine

MDN - JavaScript technologies overview

MDN - Browser detection using the user agent string

Can I Use - Popover API

10. Uso de IA

He utilizado ChatGPT como ayuda para entender los requisitos de la tarea, organizar los archivos y revisar la redacción y el código. Después he revisado y adaptado el trabajo en mi propio proyecto para poder entender cómo funciona y explicarlo en la defensa. Tambien he usado IA para parte de las plantillas html.