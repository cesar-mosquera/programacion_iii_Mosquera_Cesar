console.log("Control de Sacramentos: Funciones en JavaScript");

function abrirLibroParroquial(){
    console.log("Libro parroquial abierto. ¡Listos para registrar los sacramentos!");
}

abrirLibroParroquial();


function registrarFiel(nombre) {
    console.log("El feligrés " + nombre + " está registrado en la parroquia.");
}
registrarFiel("Carlos");
registrarFiel("Sofía");


function recargarCertificados(certificadosActuales, nuevosCertificados){
    let totalCertificados = certificadosActuales + nuevosCertificados;
    if (totalCertificados > 100) {
        totalCertificados = 100; // Límite máximo de stock
    }
    console.log("Inventario de certificados actualizado. Cantidad total: " + totalCertificados);
    return totalCertificados;
}

let stockCertificados = 50;
stockCertificados = recargarCertificados(stockCertificados, 30);
stockCertificados = recargarCertificados(stockCertificados, 40);


console.log("Calcular aranceles o descuentos parroquiales");
function calcularDescuentoArancel(arancel, descuento){
    let arancelFinal = arancel - (arancel * (descuento / 100));
    return arancelFinal;
}
let arancelOriginal = 100;
let porcentajeDescuento = 20;
let arancelConDescuento = calcularDescuentoArancel(arancelOriginal, porcentajeDescuento);
console.log("Arancel original: $" + arancelOriginal + " | Arancel con descuento: $" + arancelConDescuento);

function evaluarRequisitosCatequesis(asistencia, evaluacionesAprobadas, totalEvaluaciones){
    let porcentajeAprobacion = (evaluacionesAprobadas / totalEvaluaciones) * 100;
    if (asistencia < 75) {
        console.log("Advertencia: Asistencia baja al catecismo. Nivel actual: " + asistencia + "%");
    }
}


let donacionesMisa = [10, 15, 20, 30, 10];
function calcularTotalDonaciones(donaciones){
    let total = 0;
    for (let i = 0; i < donaciones.length; i++){
        total += donaciones[i]; // Corregido para que sume los valores
    }
    return total;
}
console.log("Total acumulado de donaciones: $" + calcularTotalDonaciones(donacionesMisa));


let edadesBautizo = [20, 30, 54, 60, 85];
function contarAdultosBautizo(edades){
    let totalAdultos = 0;
    for (let edad of edades) {
        if (edad >= 50) {
            totalAdultos++;
        }
    }
    return totalAdultos;
}
console.log("Total de adultos mayores a 50 años registrados: " + contarAdultosBautizo(edadesBautizo));