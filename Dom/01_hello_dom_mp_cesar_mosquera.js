console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Sistema de Control de Sacramentos";

const estado = document.getElementById("estado");
const botonActivar = document.getElementById("boton-activar");

botonActivar.addEventListener("click", function () {
    console.log("Ejecutando click...");
    estado.textContent = "MODULO ACTIVO";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de activacion del modulo terminado");
});

const mensaje = document.getElementById("mensaje");
const botonListo = document.getElementById("listo");

botonListo.addEventListener("click", function () {
    estado.textContent = "CONFIRMACION LISTA";
    mensaje.textContent = "Registro verificado en el sistema";
    alert("Feligres listo para el registro");
});

let totalRegistros = 0;
const contador = document.getElementById("contador");
const nuevoRegistro = document.getElementById("nuevo-registro");

nuevoRegistro.addEventListener("click", function () {
    totalRegistros += 1;
    contador.textContent = totalRegistros;
});