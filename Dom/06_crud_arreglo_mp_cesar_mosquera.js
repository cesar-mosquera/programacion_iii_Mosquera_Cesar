let sacramentos = [
    {
        id:1,
        nombre:"Juan perez",
        sacramento:"Bautizo",
        fecha:"05/10/2026",
        estado:"Pendiente"
    },
    {
        id:2,
        nombre:"Ana Lopez",
        sacramento:"Matrimonio",
        fecha:"12/12/2026",
        estado:"Pendiente"
    }
]

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const sacramento = document.getElementById("sacramento");
const fecha = document.getElementById("fecha");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

console.log("mostrarSacramentos");
function mostrarSacramentos() {
    contenedor.replaceChildren();
    cantidad.textContent = "Cantidad: " + sacramentos.length;
    sacramentos.forEach(function(item) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = item.nombre;
        const parrafoSacramento = document.createElement("p");
        parrafoSacramento.textContent = "Sacramento: " + item.sacramento;
        const parrafoFecha = document.createElement("p");
        parrafoFecha.textContent = "Fecha: " + item.fecha;
        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + item.estado;
        const acciones = document.createElement("div");
        acciones.classList.add("acciones");
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function() {
            editarSacramento(item.id);
        });
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function() {
            eliminarSacramento(item.id);
        });
        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoSacramento, parrafoFecha, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

let idEditando = null;
function editarSacramento(id) {
    const registro = sacramentos.find(function(s) {
        return s.id === id;
    });
    nombre.value = registro.nombre;
    sacramento.value = registro.sacramento;
    fecha.value = registro.fecha;
    estado.value = registro.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus();
}

mostrarSacramentos();

let siguienteId = 3;
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombreSacramento = nombre.value.trim();
    const tipoSacramento = sacramento.value;
    const fechaSacramento = fecha.value;
    const estadoSacramento = estado.value;
    if (idEditando === null) {
        const nuevoSacramento = {
            id: siguienteId,
            nombre: nombreSacramento,
            sacramento: tipoSacramento,
            fecha: fechaSacramento,
            estado: estadoSacramento
        };
        siguienteId++;
        sacramentos.push(nuevoSacramento);
    } else {
        const registro = sacramentos.find(function(s) {
            return s.id === idEditando;
        });
        registro.nombre = nombreSacramento;
        registro.sacramento = tipoSacramento;
        registro.fecha = fechaSacramento;
        registro.estado = estadoSacramento;
    }

    limpiarFormulario();
    mostrarSacramentos();
});

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function() {
    limpiarFormulario();
});

function eliminarSacramento(id) {
    const registro = sacramentos.find(function(s) {
        return s.id === id;
    });
    const confirmar = confirm("¿Eliminar a " + registro.nombre + "?");
    if (!confirmar) {
        return;
    }
    sacramentos = sacramentos.filter(function(s) {
        return s.id !== id;
    });
    mostrarSacramentos();
}