console.log("Ciclo for (Revisión de folios)");
for (let i = 1; i < 5; i++) {
    console.log("Iteración número: " + i);
}

console.log("Cuenta regresiva inicio de la ceremonia");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " minutos para el inicio");
}

console.log("Cuenta regresiva inicio de la ceremonia con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Inicio de la Eucaristía");
    } else {
        console.log("Faltan " + i + " minutos para el inicio");
    }
}

console.log("Nivel de preparación de Cesar Mosquera");
let preparacion = 50;
for (let i = 0; i <= 100; i+=10) {
    if(preparacion >= i) {
       
    }
    console.log("Nivel de preparación: " + i + "%");
}

const certificadosPorMes = 10;
let totalEmitidos = 0;
for (let mes = 1; mes <= 5; mes++) {
    totalEmitidos += certificadosPorMes;
    console.log("Mes " + mes);
    console.log("Total emitidos hasta ahora: " + totalEmitidos + " certificados");
}
console.log("Total emitidos: " + totalEmitidos + " certificados");

console.log("Promedio de Sacramentos Registrados");
let totalSacramentos = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let sacramentos = dia * 5 + 5;
    totalSacramentos += sacramentos;
    console.log("Día " + dia + ": " + sacramentos + " sacramentos registrados.");
}
console.log("Total de sacramentos registrados: " + totalSacramentos);
console.log("Promedio de sacramentos por día: " + (totalSacramentos / dias).toFixed(2));

console.log("Actas Parroquiales (Con y sin errores)");
let correctas = 0;
let conErrores = 0;

for (let acta = 1; acta <= 10; acta++) {
    if (acta % 2 === 0) {
        console.log("Acta " + acta + " tiene errores.");
        conErrores++;
    } else {
        console.log("Acta " + acta + " está correcta.");
        correctas++;
    }
}

console.log("Total de actas correctas: " + correctas);
console.log("Total de actas con errores: " + conErrores);

console.log("Registro de Asistentes a Catequesis");
let asistentes = [35, 60, 45, 80, 70, 90, 55];
let totalAsistentes = 0;
let gruposExitosos = 0;

for (let i = 0; i < asistentes.length; i++) {
    totalAsistentes += asistentes[i];
    console.log("Grupo " + (i + 1) + ": " + asistentes[i] + " asistentes registrados.");
    if (asistentes[i] >= 50) {
        gruposExitosos++;
    } else {
        console.log("Grupo " + (i + 1) + " no fue exitoso, asistieron menos de 50 personas.");
    }
}

console.log("Total de asistentes registrados: " + totalAsistentes);
console.log("Número de grupos exitosos: " + gruposExitosos);
for (let asistencia of asistentes) {
    if (asistencia < 50) {
        console.log("Se registraron menos de 50 asistentes en un grupo.");
    }
}

console.log("Recorrer Personal Parroquial con for ... of");
const personal = ["Cesar Mosquera", "Párroco", "Catequista", "Secretaria", "Monaguillo"];
for (let miembro of personal) {
    console.log("Personal: " + miembro);
}

let iglesia = {
    nombre: "Iglesia ",
    hostias: 1000,
    capacidad: 500,
    equipo: ["Cesar Mosquera", "Párroco", "Secretaria"]
};

console.log("Recorrer Propiedades de la Iglesia con for ... in");
for (let propiedad in iglesia) {
    console.log(propiedad + ": " + iglesia[propiedad]);
    if (propiedad === "equipo") {
        console.log("Equipo de la iglesia:");
        for (let miembro of iglesia[propiedad]) {
            console.log("- " + miembro);
        }
    }
}

for (let miembro of iglesia["equipo"]) {
    console.log("- " + miembro);
}

let catequesis = [
    { nombre: "Grupo Bautismo", registrados: 90, meta: 100, responsable: "Cesar Mosquera" },
    { nombre: "Grupo Comunión", registrados: 80, meta: 100, responsable: "Catequista Ana" },
    { nombre: "Grupo Confirmación", registrados: 95, meta: 100, responsable: "Párroco Luis" }
];

let exitosas = 0;
for (let grupo of catequesis) {
    let porcentaje = (grupo.registrados / grupo.meta) * 100;
    console.log(grupo.nombre
        + " completado por "
        + grupo.responsable
        + " con un " + porcentaje.toFixed(2) + "% de asistencia."
    );
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(grupo.nombre + " no fue exitoso, asistieron menos del 90% de los inscritos.");
    }
}

console.log("Número de grupos de catequesis exitosos: " + exitosas);

console.log("Uso de break y continue en un ciclo for (Búsqueda de folios)");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el folio 5, se detiene la búsqueda.");
        break;
    }
    console.log("Folio revisado: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Folio anulado encontrado: " + i + ", se omite este folio.");
        continue;
    }
    console.log("Folio válido: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontró el folio 7, se detiene la búsqueda.");
        break;
    }
    if (i % 2 === 0) {
        console.log("Folio anulado encontrado: " + i + ", se omite este folio.");
        continue;
    }
    console.log("Folio válido: " + i);
}