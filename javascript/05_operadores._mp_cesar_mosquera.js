console.log("operadores aritméticos (Registro de Sacramentos)");
let bautizosMes = 10;
let confirmacionesMes = 5;

console.log("Suma (Total sacramentos): " + (bautizosMes + confirmacionesMes));
console.log("Resta (Diferencia): " + (bautizosMes - confirmacionesMes));
console.log("Multiplicación: " + (bautizosMes * confirmacionesMes));
console.log("División (Proporción): " + (bautizosMes / confirmacionesMes));
console.log("Módulo: " + (bautizosMes % confirmacionesMes));

console.log("operadores de asignación (Actualización de Actas)");
let totalActas = 20;
totalActas += 5; // totalActas = totalActas + 5 (Nuevos registros)
console.log("Asignación suma: " + totalActas);
totalActas -= 3; // totalActas = totalActas - 3 (Actas anuladas)
console.log("Asignación resta: " + totalActas);
totalActas *= 2; // totalActas = totalActas * 2 (Copias impresas)
console.log("Asignación multiplicación: " + totalActas);
totalActas /= 4; // totalActas = totalActas / 4 (Distribución por capillas)
console.log("Asignación división: " + totalActas);
totalActas %= 3; // totalActas = totalActas % 3
console.log("Asignación módulo: " + totalActas);

console.log("operadores de comparación (Edades para Confirmación)");
let edadFeligres = 15;
let edadRequerida = 10;

console.log("Igualdad: " + (edadFeligres == edadRequerida));
console.log("Desigualdad: " + (edadFeligres != edadRequerida));
console.log("Mayor que: " + (edadFeligres > edadRequerida));
console.log("Menor que: " + (edadFeligres < edadRequerida));
console.log("Mayor o igual que: " + (edadFeligres >= edadRequerida));
console.log("Menor o igual que: " + (edadFeligres <= edadRequerida));

console.log("operadores lógicos (Requisitos para Matrimonio)");
let partidaBautismo = true;
let charlaPrematrimonial = false;

console.log("AND lógico (Tiene ambos): " + (partidaBautismo && charlaPrematrimonial));
console.log("OR lógico (Tiene al menos uno): " + (partidaBautismo || charlaPrematrimonial));
console.log("NOT lógico (Invierte el valor de partida): " + (!partidaBautismo));

console.log("operadores de incremento y decremento (Número de Folio en Libro)");
let numeroFolio = 5;

console.log("Incremento: " + (++numeroFolio)); // Pre-incremento
console.log("Decremento: " + (--numeroFolio)); // Pre-decremento
console.log("Incremento: " + (numeroFolio++)); // Post-incremento
console.log("Decremento: " + (numeroFolio--)); // Post-decremento

console.log("Valor final del folio: " + numeroFolio);

console.log("operadores de concatenación (Nombres en Certificado)");
let nombreObispo = "Monseñor";
let apellidoObispo = "Pérez";

console.log("Concatenación: " + (nombreObispo + " " + apellidoObispo));

console.log("operadores de comparación estricta (Verificación de Códigos de Parroquia)");
let codigoNum = 10;
let codigoStr = "10";

console.log("Igualdad estricta: " + (codigoNum === codigoStr));
console.log("Desigualdad estricta: " + (codigoNum !== codigoStr));

console.log("operadores ternarios (Estado del Sacramento)");
let edadCatequista = 20;
let estadoSacramento = (edadCatequista > 15) ? "Apto para Confirmación" : "Debe esperar";
console.log("Resultado del operador ternario: " + estadoSacramento);

console.log("Tabla de multiplicación del 5 (Estipendios por grupos de 5)");
console.log(`5 x 1 = ${5 * 1}`);
console.log(`5 x 2 = ${5 * 2}`);
console.log(`5 x 3 = ${5 * 3}`);
console.log(`5 x 4 = ${5 * 4}`);
console.log(`5 x 5 = ${5 * 5}`);
console.log(`5 x 6 = ${5 * 6}`);
console.log(`5 x 7 = ${5 * 7}`);
console.log(`5 x 8 = ${5 * 8}`);
console.log(`5 x 9 = ${5 * 9}`);
console.log(`5 x 10 = ${5 * 10}`);

console.log("Tabla de división del 5 (Distribución de Hostias por capilla)");
console.log(`5 ÷ 5 = ${5 / 5}`);
console.log(`10 ÷ 5 = ${10 / 5}`);
console.log(`15 ÷ 5 = ${15 / 5}`);
console.log(`20 ÷ 5 = ${20 / 5}`);
console.log(`25 ÷ 5 = ${25 / 5}`);
console.log(`30 ÷ 5 = ${30 / 5}`);
console.log(`35 ÷ 5 = ${35 / 5}`);
console.log(`40 ÷ 5 = ${40 / 5}`);
console.log(`45 ÷ 5 = ${45 / 5}`);
console.log(`50 ÷ 5 = ${50 / 5}`);