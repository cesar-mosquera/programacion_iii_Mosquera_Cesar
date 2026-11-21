const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Aviso actualizado desde el archivo parroquial";
saludo.innerHTML = "<h1>Registro con innerHTML</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
<h1>FELIGRES REGISTRADO</h1>
<p>Sacramento: Bautismo</p>
<p>Estado: Confirmado</p>
<p>Libro: Tomo 01</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function () {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = nombre.value;
});