let asistenciasCatequesis = [20, 30, 54, 60, 85];
function calcularCatequizadosAprobados(asistencias){
    let totalAprobados = 0;
    for (let asistencia of asistencias) {
        if (asistencia >= 50) { 
            totalAprobados++;
        }
    }
    return totalAprobados;
}
console.log("Total de catequizados aprobados: " + calcularCatequizadosAprobados(asistenciasCatequesis));



let nombreParroquia = "San Judas Tadeo";
let anioFundacion = 1950;
let diocesis = "Arquidiócesis Central";
let presupuesto = 5000;
let enRestauracion = false;

let parroquia = {
    nombre: "San Judas Tadeo",
    anio: 1950,
    diocesis: "Arquidiócesis Central",
    presupuesto: 5000,
    enRestauracion: false,
};

console.log("--- Información de la Parroquia ---");
console.log("Nombre de la Parroquia: " + parroquia.nombre);
console.log("Año de fundación: " + parroquia.anio);
console.log("Diócesis: " + parroquia.diocesis);
console.log("Presupuesto actual: $" + parroquia.presupuesto);
console.log("Estado de la infraestructura: " + (parroquia.enRestauracion ? "En Restauración" : "Óptimo"));



console.log("\n--- Agregar propiedades a la Parroquia ---");
parroquia.patrono = "San Judas Tadeo Apóstol";
console.log("Santo Patrono: " + parroquia.patrono);

parroquia["capacidadTemplo"] = 350;
console.log("Capacidad de feligreses en el templo: " + parroquia["capacidadTemplo"]);



console.log("\n--- Actualizar propiedades de la Parroquia ---");
parroquia.presupuesto = 4200; // Se gastó en mantenimiento
console.log("Nuevo presupuesto disponible: $" + parroquia.presupuesto);

parroquia["enRestauracion"] = true;
console.log("Nuevo estado de la infraestructura: " + (parroquia.enRestauracion ? "En Restauración" : "Óptimo"));

delete parroquia.capacidadTemplo;
console.log("Propiedad 'capacidadTemplo' eliminada.");
console.log("Objeto parroquia actualizado:", parroquia);



console.log("\n--- Recorrer propiedades de la Parroquia con for...in ---");
for (let propiedad in parroquia){
    console.log(propiedad + ": " + parroquia[propiedad]);
}



let inventarioParroquia = {
    copones: 3,
    biblias: 25,
    mantelesAltar: 5,    
};

function calcularTotalInventario(objetos){
    let totalObjetos = 0;
    for (let propiedad in objetos){
        totalObjetos++; 
    }
    return totalObjetos;
}

console.log("\nTotal de categorías de objetos en el inventario parroquial: " + calcularTotalInventario(inventarioParroquia));