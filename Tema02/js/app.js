function saludar() {
    alert("Hola, TU NOMBRE Y APELLIDOS");
    console.log("Botón Saludar pulsado correctamente.");
}

function simularError() {
    console.error("Error simulado: este mensaje solo lo ve quien desarrolla.");
}

function queNavegadorSoy() {
    const userAgent = navigator.userAgent;

    alert(userAgent);

    console.log("UserAgent del navegador:", userAgent);
}
