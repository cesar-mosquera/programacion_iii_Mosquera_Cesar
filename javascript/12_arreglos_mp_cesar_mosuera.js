let feligreses = ["Juan", "María", "Pedro", "Lucía", "Carlos", "Mosquera"];

console.log("Elemento 0 (Primer feligrés):", feligreses[0]);
console.log("Elemento 2:", feligreses[2]);
console.log("Elemento 5:", feligreses[5]);
console.log("Elemento 4:", feligreses[4]);

console.log("Tamaño del arreglo de feligreses:", feligreses.length);
console.log("Feligreses registrados:", feligreses);


console.log("\nIncluir un feligrés al final con push()");
feligreses.push("Gonzalez");
console.log("Feligreses actualizados:", feligreses);


console.log("\nIncluir un feligrés al inicio con unshift()");
feligreses.unshift("Javi");
console.log("Feligreses actualizados:", feligreses);


console.log("\nModificar un elemento del arreglo");
feligreses[0] = "Julio"; 
console.log("Feligreses actualizados:", feligreses);


console.log("\nEliminar el último elemento del arreglo con pop()");
feligreses.pop(); 
console.log("Feligreses actualizados:", feligreses);

console.log("\nEliminar el primer elemento del arreglo con shift()");
feligreses.shift();
console.log("Feligreses finales:", feligreses);