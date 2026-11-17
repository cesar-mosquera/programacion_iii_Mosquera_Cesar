let asistenciasCatequesis = [30, 50, 70, 40];
let posicion = 2;
let nuevaAsistencia = 100;

for (let i = 0; i < asistenciasCatequesis.length; i++){
    console.log("Posición del registro:", i);
    console.log("Asistencia actual:", asistenciasCatequesis[i]);
    
    if(posicion >= 0 && posicion < asistenciasCatequesis.length){
        asistenciasCatequesis[posicion] = nuevaAsistencia;
    } else {
        console.log("Posición no válida en el registro.");
    }
}
console.log("Asistencias actualizadas:", asistenciasCatequesis);



let feligresesParroquia = [
    {id: 1, nombre: "Juan", edad: 45, sacramentosCompletados: 3},
    {id: 2, nombre: "María", edad: 16, sacramentosCompletados: 2},
    {id: 3, nombre: "César", edad: 27, sacramentosCompletados: 4},
];

for (let feligres of feligresesParroquia){
    console.log("ID del feligrés:", feligres.id);
    console.log("Nombre:", feligres.nombre);
    console.log("Edad:", feligres["edad"]);
    console.log("Sacramentos completados:", feligres["sacramentosCompletados"]);
}



console.log("\n--- Catequistas organizan sus grupos de preparación ---");
let gruposCatequesis = [
    {
        catequista: "Padre Juan",
        asistenciasAlumnos: [30, 50, 60]
    },
    {
        catequista: "Ana",
        asistenciasAlumnos: [20, 30, 30]
    },
    {
        catequista: "Carlos",
        asistenciasAlumnos: [90, 80, 70]
    }
];

for (let grupo of gruposCatequesis){
    let totalAsistenciasGrupo = 0;
    console.log("Catequista responsable: ", grupo.catequista);
    for (let asistencia of grupo.asistenciasAlumnos){
        console.log("Puntaje de asistencia registrado: ", asistencia);
        totalAsistenciasGrupo += asistencia;
    }
    console.log("Suma total de asistencias del grupo de " + grupo.catequista + " es: " + totalAsistenciasGrupo);
}




let arancelesOriginales = [30, 50, 70, 40];
let arancelesAjustados = arancelesOriginales.map(elemento => {
    return elemento * 2; 
});
console.log("\nAranceles ajustados (map):", arancelesAjustados);

let arancelesFiltrados = arancelesOriginales.filter(arancel => arancel >= 50);
console.log("Aranceles mayores o iguales a $50 (filter):", arancelesFiltrados);

let totalRecaudado = arancelesOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);
console.log("Total general recaudado (reduce): $" + totalRecaudado);