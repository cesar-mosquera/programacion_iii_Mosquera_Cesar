const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent = "Modulo activo: 100%";
dimension.textContent = "Sede: Parroquia Central";
portal.textContent = "Estado: habilitado";

const personaje = document.querySelector(".personaje");
personaje.textContent = "Sacramento principal: Bautismo";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando expediente";

const universo = document.querySelector("#universo");
universo.textContent = "Preparando libro parroquial";

const estadoMorty = document.querySelector("#morty .estado");
estadoMorty.textContent = "Documentacion verificada";

const planetas = document.querySelectorAll(".planetas");
console.log(planetas);
console.log(planetas.length);

console.log(planetas[0].textContent);
console.log(planetas[1].textContent);
console.log(planetas[2].textContent);
console.log(planetas[3].textContent);
console.log(planetas[4].textContent);
console.log(planetas[5].textContent);

console.log("recorrer otra vez con for");
for (let i = 0; i < planetas.length; i++) {
    console.log(planetas[i].textContent);
}

console.log("con forEach");
planetas.forEach(function (planeta) {
    console.log(planeta.textContent);
});

console.log("con for of");
for (let planeta of planetas) {
    console.log(planeta.textContent);
}