# Tarea 5 · Manipular el DOM

**Autor:** Marcos Lozano Galvez · DWEC · 2.º DAW · Curso 2026-27

Se completa la plantilla del profesor con seis ejercicios de DOM y BOM, manteniendo Bootstrap y `defer`.

## Instalación y pruebas

Abre `tema05/index.html` en el navegador o usa Go Live. Bootstrap necesita conexión. Abre F12 para ver los mensajes.

## Capturas

### a) Página inicial

<img src="capturas/a-pagina.png" alt="Página inicial con el nombre y tres párrafos" width="600">

Aparecen el nombre y los tres párrafos originales.

### b) Ejercicios 1 y 2

<img src="capturas/b-ej1-ej2.png" alt="Cambios aplicados y dos párrafos nuevos" width="600">

Se cambia el primero por ID, se resalta el segundo por clase y se colorea el tercero por posición. Se añaden los párrafos 4 y 5.

### c) Resaltado

<img src="capturas/c-ej3-resaltado.png" alt="Párrafo nuevo 4 resaltado" width="600">

El párrafo 4 queda gris al entrar el ratón. Los creados después necesitan pulsar otra vez: `querySelectorAll` devuelve una lista estática y los eventos solo se asignan a los párrafos encontrados.

### d) Prueba de HTML

<img src="capturas/d-ej4-innerhtml.png" alt="hola interpretado como negrita" width="600">

Con `textContent` aparece literalmente `<b>hola</b>`; con `innerHTML`, hola en negrita.

### e) Tareas

<img src="capturas/e-ej5-lista.png" alt="Tres tareas y una marcada" width="600">

Hay tres tareas, una marcada. Al borrarla, el contador pasa a dos.

### f) Tamaño móvil

<img src="capturas/f-ej6-movil.png" alt="Ventana de 390 píxeles y punto xs" width="300">

La ventana simulada mide 390 × 844 y corresponde a xs; con 1366 píxeles corresponde a xl.

## Reflexión

`textContent` introduce texto literal.<br>
`innerHTML` interpreta etiquetas y crea elementos.<br>
Por eso `<b>hola</b>` solo produce negrita con el segundo.<br>
Interpretar entradas ajenas permite inyectar HTML o comportamientos peligrosos.<br>
Las tareas utilizan `textContent` para evitarlo.<br>
`innerHTML` se limita a la demostración del ejercicio.

## Fuentes

- [Plantilla del profesor](https://github.com/DRodero/DWEC_2627/tree/main/tema05_plantilla).
- MDN: [textContent](https://developer.mozilla.org/es/docs/Web/API/Node/textContent), [innerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) y [querySelectorAll](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll).

## Uso de IA

ChatGPT/Codex ha completado el código, redactado este README y ejecutado pruebas y capturas automatizadas en el equipo. La revisión y explicación personal del alumno quedan pendientes antes de entregar.
