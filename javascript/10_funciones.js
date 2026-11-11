console.log("Rick y Morty: Funciones en JavaScript");


function abrirPortal(){
    console.log("Portal abierto. !Vamos a otra dimensiòn!")
}

abrirPortal();


function pilotoNave(nombre) {
    console.log("El piloto"+nombre+"està a bordo de la nave");
}
pilotoNave("Rick");
pilotoNave("Morty");



function recargarPistola(energiaActual, recarga){
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Pistola de portales recargada.Nivel de energìa"+energiaTotal+"%");
    return energiaTotal;
}

let energiaPistola=50;
energiaPistola = recargaRPistola(energiaPistola,30);
energiaPistola = recargarPistola(energiaPistola,40);


console.log("Calcular descuentos interdimensionales");
function calcularDescuento(precio,descuento){
    let precioFinal = precio - (precio*(descuento / 100));
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal,porcentajeDescuento);
console.log("Precio original:" + precioOriginal + "Precio con descuento:" + precioConDescuento);






function evaluarCombustibleExamen(combustible, correctas, totalPreguntas){
    let porcentajeCorrectas = (correctas/totalPeguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible najo. Nivel actual:" + combustible + "%");
    }
}









let cristales = [10,15,20,30,10];
function calcularCristales(cristales){
    let total = 0;

    for (let i=0;i<cristales.length;i++){

    }
    return total;
}
console.log(calcularTotal(cristales));




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
