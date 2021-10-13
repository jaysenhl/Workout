let fecha = document.getElementById("fecha");
let nombreEjercicio = document.getElementById("ejerciciosSelect");
let equipo = document.getElementById("equipoSelect");
let peso = document.getElementById("pesoSelect");
let sets = document.getElementById("setSelect");
let repeticiones = document.getElementById("repSelect");
let listcontainer = document.getElementById("listcontainer");
let botonAnadir = document.getElementById("anadirBtn");
let botonComenzar = document.getElementById("comenzarBtn");
let listaDeEjercicios = [];

let pesoSelect = document.getElementById("pesoSelect");
document.onload = (() => {
    for (let i = 0; i <= 100; i = i + 0.5) {
        pesoSelect.innerHTML += `<option>${i}</option>`;
    }
})();

let setSelect = document.getElementById("setSelect");
document.onload = (() => {
    for (let i = 0; i <= 100; i++) {
        setSelect.innerHTML += `<option>${i}</option>`;
    }
})();

let repSelect = document.getElementById("repSelect");
document.onload = (() => {
    for (let i = 0; i <= 100; i++) {
        repSelect.innerHTML += `<option>${i}</option>`;
    }
})();

let Ejercicios = {
    fecha: "",
    nombre: "",
    equipo: "",
    peso: "",
    sets: "",
    repeticiones: "",
};

function CrearEjercicio() {
    let ejercicio = Object.create(Ejercicios);
    ejercicio.fecha = fecha.value;
    ejercicio.nombre = nombreEjercicio.value;
    ejercicio.equipo = equipo.value;
    ejercicio.peso = peso.value;
    ejercicio.sets = sets.value;
    ejercicio.repeticiones = repeticiones.value;
    listaDeEjercicios.push(ejercicio);
    return ejercicio;
}

function CrearItem(x) {
    let html = `<li><span class="item">${x}</span><button id="botonborrar" class="btn btn-info" onclick="BorrarItem(this)">Eliminar</button></li>`;
    listcontainer.insertAdjacentHTML("beforeend", html);
}

function BorrarItem(x) {
    x.parentElement.remove();
    TogleComenzarBtn();
}

botonComenzar.hidden = true;
function TogleComenzarBtn() {
    let nodes = document.getElementsByClassName("item").length;
    nodes === 0 ? (botonComenzar.hidden = true) : (botonComenzar.hidden = false);
}

botonAnadir.addEventListener("click", () => {
    /*
    if (
        fecha.value === "" ||
        nombreEjercicio.value === "" ||
        equipo.value === "" ||
        sets.value === "" ||
        repeticiones.value === ""
    ) {
        Swal.fire("No Puedes dejar Opciones en blanco");
        return;
    }
    */

    let ejercicio = CrearEjercicio();
    CrearItem(ejercicio.nombre);

    TogleComenzarBtn();

    nombreEjercicio.value = "";
    equipo.value = "";
    sets.value = 0;
    repeticiones.value = 0;

    console.log(listaDeEjercicios);
});
