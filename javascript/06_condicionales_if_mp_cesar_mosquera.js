const prompt = require("prompt-sync")({sigint: true});

console.log("Condicional If");
let edad = Number(prompt("Feligrés, ¿cuántos años tienes?"));
if(edad > 0) {
    console.log("Tienes la edad para registrarte en la parroquia");
}

console.log("Condicional If-Else Dos caminos");
let charlas = Number(prompt("Feligrés, ¿cuántas charlas de preparación tienes?"));
if(charlas > 0) {
    console.log("Tienes las charlas requeridas para recibir el sacramento");
} else {
    console.log("No tienes las charlas requeridas para recibir el sacramento");
}

console.log("Condicional If-Else If-Else Múltiples caminos");
let sacramento = prompt("Feligrés, ¿qué sacramento deseas recibir?");
if(sacramento === "Bautismo") {
    console.log("Bienvenido a la preparación para el Bautismo");
} else if(sacramento === "Comunión") {
    console.log("Bienvenido a la preparación para la Primera Comunión");
} else if(sacramento === "Confirmación") {
    console.log("Bienvenido a la preparación para la Confirmación");
} else {
    console.log("No tenemos registro de ese sacramento");
}

console.log("Condicional If anidado");
let edad2 = 50;
let charlas2 = 400;

if(edad2 > 0) {
    if(charlas2 > 0) {
        console.log("Tienes edad y charlas suficientes para recibir el sacramento");
    } else {
        console.log("Tienes la edad pero no tienes las charlas para recibir el sacramento");
    }
} else {
    console.log("No tienes la edad requerida para recibir el sacramento");
}

console.log("Condicional If con Operadores Lógicos");
let edad3 = 50;
let charlas3 = 400;

if(edad3 > 0 && charlas3 > 0) {
    console.log("Tienes edad y charlas para recibir el sacramento");
} else if(edad3 > 0 || charlas3 > 0) {
    console.log("Tienes edad o charlas cumplidas para el proceso");
} else {
    console.log("No tienes ni edad ni charlas para recibir el sacramento");
}

console.log("Control de requisitos sacramentales");
let edad4 = Number(prompt("Feligrés, ¿cuántos años tienes?"));
let charlas4 = Number(prompt("Feligrés, ¿cuántas charlas tienes aprobadas?"));
let padrino_disponible = "si";
let madrina_disponible = "no";
let documentacion_incompleta = "no";

if (charlas4>=50 &&
    edad4>=50 && 
    (padrino_disponible === "si" || 
    madrina_disponible === "si") && 
    !(documentacion_incompleta === "no")) {
        console.log("Puedes proceder con la ceremonia del sacramento");
} else {
    if(charlas4<50) {
        console.log("No tienes suficientes charlas para la ceremonia");
    }
    if(edad4<50) {
        console.log("No tienes suficiente edad para la ceremonia");
    }
    if(padrino_disponible === "no") {
        console.log("El padrino no está disponible para la ceremonia");
    }
    if(madrina_disponible === "no") {
        console.log("La madrina no está disponible para la ceremonia");
    }
    if(documentacion_incompleta === "si") {
        console.log("La documentación está incompleta y no puedes proceder");
    }
    if(padrino_disponible === "no" && madrina_disponible === "no") {
        console.log("Ninguno de los padrinos está disponible para la ceremonia");
    }
}

console.log("Evaluación del Ciclo de Catequesis");
let temasObjetivos=200;
let temasAprobados=150;
let horasIniciales=1000; // Equivalente a combustibleInicial
let horasConsumidas=850;
let feligresEnfermo="si";
let partidaAveriada="no";
let mencionHonorifica=0;
let porcentajeCumplimiento=(temasAprobados/temasObjetivos)*100;
let horasRestantes=horasIniciales-horasConsumidas;

if(porcentajeCumplimiento >= 90){
    console.log("Catequesis exitosa, has cumplido con el objetivo de temas aprobados");
} else if(porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90){
    console.log("Catequesis parcialmente exitosa, has cumplido con gran parte del objetivo de temas");
} else if( porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70){
    console.log("Catequesis regular, has cumplido con menos de la mitad del objetivo de temas");
} else {
    console.log("Catequesis fallida, no has cumplido con el objetivo de temas aprobados");
}

console.log("Evaluación de mención honorífica por desempeño");
if (porcentajeCumplimiento >= 90 && horasRestantes >= 200){
    mencionHonorifica = 1000;
    console.log("Mención honorífica por excelencia pastoral: " + mencionHonorifica);
} else {
    console.log("No se otorga mención honorífica por desempeño");
}

console.log("Asentamiento seguro en el Libro Parroquial");
if (feligresEnfermo === "no" && partidaAveriada === "no") {
    console.log("Asentamiento seguro en el Libro Parroquial");
} else if (feligresEnfermo === "si" && partidaAveriada === "no") {
    console.log("Asentamiento en el Libro Parroquial con feligrés enfermo (por poder)");
} else if (feligresEnfermo === "no" && partidaAveriada === "si") {
    console.log("Asentamiento en el Libro Parroquial con partida deteriorada/observación");
} else {
    console.log("Asentamiento en el Libro Parroquial con feligrés enfermo y partida deteriorada");
}

console.log("Resumen del Proceso Sacramental");
console.log("Temas objetivos: " + temasObjetivos);
console.log("Temas aprobados: " + temasAprobados);
console.log("Porcentaje de cumplimiento: " + porcentajeCumplimiento.toFixed(2) + "%");
console.log("Horas Iniciales (Cupo): " + horasIniciales);
console.log("Horas consumidas: " + horasConsumidas);
console.log("Horas restantes: " + horasRestantes);
console.log("Mención honorífica: " + mencionHonorifica);
console.log("Feligrés enfermo: " + feligresEnfermo);
console.log("Partida averiada: " + partidaAveriada);