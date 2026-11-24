const feligreses = document.getElementById("feligreses");
const arancel = document.getElementById("arancel");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function () {
    if (feligreses.value.trim() === "" || arancel.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidad = Number(feligreses.value);
    const cuotaPorRegistro = Number(arancel.value);

    if (!Number.isFinite(cantidad) || !Number.isFinite(cuotaPorRegistro)) {
        resultado.textContent = "Ingrese valores validos";
        return;
    }

    const total = cantidad * cuotaPorRegistro;
    resultado.textContent = "Total recaudado: $" + total;
});