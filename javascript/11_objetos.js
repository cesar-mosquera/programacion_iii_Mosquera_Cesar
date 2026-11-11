let cristalesMisiones=[20,30,54,60,85];
function calcularMisiones(misiones){
    let totalMisionesExitosas = 0;
    for (let mision of misiones) {
        if (mision >= 50) {
            totalMisionesExitosas++;
        }
    }
    return totalMisionesExitosas;
}
console.log(calcularMisiones(cristalesMisiones));



let nombre="Rick";
let edad=70;
let planeta ="Tierra C-137";
let energia = 100;
let averiada = false;


let nave={
    nombre:"Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averiada: false,
}
console.log("Informacion de la nave de Rick");
console.log("Nombre del Piloto:" + nave.nombre);
console.log("Edad del Piloto:" + nave.edad);
console.log("Planeta de origen:" + nave.planeta);
console.log("Nivel de energia:" + nave.energia + "%");
console.log("Estado de la nave:" + (nave.averiada ? "Averiada" : "Operativa"));


console.log("Agregar propiedades a la nave de Rick");
nave.modelo = "Nave Espacial X-2000";
console.log("Modelo de la nave:" + nave.modelo);
nave["capacidad pasajeros"]= 5;
console.log("Capacidad de pasajeros:" + nave["capacidadpasajeros"]);


console.log("Actualizar propiedades de la nave de Rick");
nave.energia = 80;
console.log("Nuevo nivel de energia:" + nave.energia + "%");
nave["averiada"] = true;
cosole.log("nuevo estado de la nave:" +(nave.averiada ? "Averiada" : "Operativa"));
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidad de pasajeros' eliminada");
console.log("nave de Rick", nave);



console.log("Recorrer propiedades de la nave de Rick con for...in");
for (let propiedad in nave){
    console.log(propiedad + ":" + nave[propiedad]);
}





let objetos={
    pistolas:"rg",
    naves: 5,
    orbes: 12,    
}

function calculartotalObjetos(objetos){
    let totalObjetos=0;
    for (let propiedad in objetos){
        totalObjetos++;
    }
    return totalObjetos;

}
console.log("Total de objetos en el inventario de Rick:" + calculartotalObjetos(objetos));
