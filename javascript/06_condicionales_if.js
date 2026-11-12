const prompt = require("prompt-sync")({sigint: true});
console.log("Condicional If");
let energia = Number(prompt("Rick, ¿cuánta energía tienes?"));
if(energia > 0) {
    console.log("Tienes energía para abrir el portal");
}

console.log("Condicional If-Else Dos caminos");
let combustible = Number(prompt("Rick, ¿cuánto combustible tienes?"));
if(combustible > 0) {
    console.log("Tienes combustible para abrir el portal");
} else {
    console.log("No tienes combustible para abrir el portal");
}

console.log("Condicional If-Else If-Else Múltiples caminos");
let dimension = prompt("Rick, ¿a qué dimensión quieres ir?");
if(dimension === "C-137") {
    console.log("Bienvenido a la dimensión C-137");
} else if(dimension === "C-500") {
    console.log("Bienvenido a la dimensión C-500");
} else if(dimension === "C-300") {
    console.log("Bienvenido a la dimensión C-300");
} else {
    console.log("No conozco esa dimensión");
}

console.log("Condicional If anidado");
let energia2 = 50;
let combustible2 = 400;

if(energia2 > 0) {
    if(combustible2 > 0) {
        console.log("Tienes energía y combustible para abrir el portal");
    } else {
        console.log("Tienes energía pero no tienes combustible para abrir el portal");
    }
} else {
    console.log("No tienes energía para abrir el portal");
}

console.log("Condicional If con Operadores Lógicos");
let energia3 = 50;
let combustible3 = 400;

if(energia3 > 0 && combustible3 > 0) {
    console.log("Tienes energía y combustible para abrir el portal");
} else if(energia3 > 0 || combustible3 > 0) {
    console.log("Tienes energía o combustible para abrir el portal");
} else {
    console.log("No tienes energía ni combustible para abrir el portal");
}
console.log("Control de viajes interdimensionales");
let energia4 = Number(prompt("Rick, ¿cuánta energía tienes?"));
let combustible4 = Number(prompt("Rick, ¿cuánto combustible tienes?"));
let rick_disponible = "si"
let summer_disponible = "no"
let nave_averiada = "no"

if (combustible4>=50 &&
    energia4>=50 && 
    (rick_disponible === "si" || 
    summer_disponible === "si") && 
    !(nave_averiada === "no")) {
        console.log("Puedes viajar a la dimensión deseada");
} else {
    if(combustible4<50) {
        console.log("No tienes suficiente combustible para viajar");
    }
    if(energia4<50) {
        console.log("No tienes suficiente energía para viajar");
    }
    if(rick_disponible === "no") {
        console.log("Rick no está disponible para viajar");
    }
    if(summer_disponible === "no") {
        console.log("Summer no está disponible para viajar");
    }
    if(nave_averiada === "si") {
        console.log("La nave está averiada y no puede viajar");
    }
    if(rick_disponible === "no" && summer_disponible === "no") {
        console.log("Ninguno de los dos está disponible para viajar");
    }
}
console.log("Mision interdimensional");
let cristalesObjetivos=200
let cristalesRecolectados=150
let combustibleConsumido=850
let mortyHerido="si"    
let naveAveriada="no"
let bonificacion=0
let porcentajeCumplimiento=(cristalesRecolectados/cristalesObjetivos)*100
let combustibleRestante=combustibleInicial-combustibleConsumido

if(porcentajeCumplimiento >= 90){
    console.log("Misión exitosa, has cumplido con el objetivo de recolección de cristales");
} else if(porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90){
    console.log("Misión parcialmente exitosa, has cumplido con parte del objetivo de recolección de cristales");
} else if( porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70){
    console.log("Mision Regular, has cumplido con menos de la mitad del objetivo de recolección de cristales");
} else {
    console.log("Misión fallida, no has cumplido con el objetivo de recolección de cristales");
}

console.log("Evaluacion de bonificacion por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200){
    bonificacion = 1000
    console.log("Bonificación por desempeño excelente: " + bonificacion);
} else {
    console.log("No se otorga bonificación por desempeño");
}

console.log("Regreso seguro a la dimensión C-137");
if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimensión C-137");
} else if (mortyHerido === "si" && naveAveriada === "no") {
    console.log("Regreso a la dimensión C-137 con Morty herido");
} else if (mortyHerido === "no" && naveAveriada === "si") {
    console.log("Regreso a la dimensión C-137 con la nave averiada");
} else {
    console.log("Regreso a la dimensión C-137 con Morty herido y la nave averiada");
}

console.log("Resumen de la misión");
console.log("Cristales objetivos: " + cristalesObjetivos);
console.log("Cristales recolectados: " + cristalesRecolectados);
console.log("Porcentaje de cumplimiento: " + porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial: " + combustibleInicial);
console.log("Combustible consumido: " + combustibleConsumido);
console.log("Combustible restante: " + combustibleRestante);
console.log("Bonificación por desempeño: " + bonificacion);
console.log("Morty herido: " + mortyHerido);
console.log("Nave averiada: " + naveAveriada);