const sacramentoImg = document.getElementById("sacramento-img");
const cambiar = document.getElementById("cambiar");
const verLibro = document.getElementById("verLibro");
const libroInfo = document.getElementById("libro-info");

cambiar.addEventListener("click", function () {
    if (sacramentoImg.getAttribute("title") === "bautismo") {
        sacramentoImg.setAttribute("src", "confirmacion.webp");
        sacramentoImg.setAttribute("alt", "Sacramento de Confirmacion");
        sacramentoImg.setAttribute("title", "confirmacion");
        sacramentoImg.dataset.libro = "Libro 02";
    } else {
        sacramentoImg.setAttribute("src", "bautismo.webp");
        sacramentoImg.setAttribute("alt", "Sacramento de Bautismo");
        sacramentoImg.setAttribute("title", "bautismo");
        sacramentoImg.dataset.libro = "Libro 01";
    }
});

verLibro.addEventListener("click", function () {
    libroInfo.textContent = "Libro: " + sacramentoImg.dataset.libro;
});

const estadoRegistro = document.getElementById("estado-registro");
const activarRegistro = document.getElementById("activarRegistro");

activarRegistro.addEventListener("click", function () {
    if (estadoRegistro.textContent === "Registro inactivo") {
        estadoRegistro.style.backgroundColor = "green";
        estadoRegistro.style.color = "white";
        estadoRegistro.textContent = "Registro activo";
    } else {
        estadoRegistro.style.backgroundColor = "red";
        estadoRegistro.style.color = "white";
        estadoRegistro.textContent = "Registro inactivo";
    }
});