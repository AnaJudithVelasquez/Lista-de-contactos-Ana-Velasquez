const API_URL = "http://localhost:3000/api/contactos";

const btnGuardar = document.getElementById("btnGuardar");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("listaContactos");
const cargando = document.getElementById("cargando");

let contactos = [];
let editando = null;

function esperarRender() {
    return new Promise(resolve => setTimeout(resolve, 50));
}

function esperarMinimo(tiempo) {
    return new Promise(resolve => setTimeout(resolve, tiempo));
}

function mostrarSpinner() {
    cargando.classList.remove("oculto");
}

function ocultarSpinner() {
    cargando.classList.add("oculto");
}

function limpiarFormulario() {
    formulario.reset();
    editando = null;
    btnGuardar.textContent = "Agregar";
    btnGuardar.style.background = "#ff85a2";
}

async function obtenerContactos() {

    try {
        const respuesta = await fetch(API_URL);
        contactos = await respuesta.json();
        mostrarContactos();

    } catch(error) {
        console.log("Error obteniendo contactos:", error);
    }
}

function mostrarContactos() {

    lista.innerHTML = "";

    contactos.forEach((c) => {

        const div = document.createElement("div");
        div.classList.add("contacto");

        const icono = c.genero === "mujer" ? "👩" : "👨";

        div.innerHTML = `
            <span>
                ${icono} ${c.nombre} ${c.apellido} - ${c.ciudad} | 📞 ${c.telefono}
            </span>

            <div class="acciones">
                <button class="editar" onclick="editar(${c.id})">✏️</button>
                <button class="eliminar" onclick="eliminar(${c.id})">🗑️</button>
            </div>
        `;

        lista.appendChild(div);
    });
}

formulario.addEventListener("submit", async function(e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    const genero = document.querySelector("input[name='genero']:checked");

    if (!nombre || !apellido || !telefono || !ciudad || !direccion || !genero) {
        alert("Completa todos los campos");
        return;
    }

    mostrarSpinner();
    await esperarRender();

    const inicio = Date.now();

    const nuevo = {
        nombre,
        apellido,
        telefono,
        ciudad,
        direccion,
        genero: genero.value
    };

    try {

        if (editando === null) {
            await agregarContacto(nuevo);
        } else {
            await actualizarContacto(editando, nuevo);
        }

        limpiarFormulario();
        await obtenerContactos();

    } catch(error) {
        console.log("Error guardando contacto:", error);

    } finally {

        const tiempoTranscurrido = Date.now() - inicio;

        if (tiempoTranscurrido < 400) {
            await esperarMinimo(400 - tiempoTranscurrido);
        }

        ocultarSpinner();
    }
});

async function agregarContacto(contacto) {

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contacto)
    });
}

async function actualizarContacto(id, contacto) {

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contacto)
    });
}

async function eliminar(id) {

    mostrarSpinner();
    await esperarRender();

    const inicio = Date.now();

    try {

        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        await obtenerContactos();

    } catch(error) {
        console.log("Error eliminando contacto:", error);

    } finally {

        const tiempoTranscurrido = Date.now() - inicio;

        if (tiempoTranscurrido < 400) { 
            await esperarMinimo(400 - tiempoTranscurrido);
        }

        ocultarSpinner();
    }
}

function editar(id) {

    const c = contactos.find(contacto => contacto.id === id);

    if (!c) return;

    document.getElementById("nombre").value = c.nombre;
    document.getElementById("apellido").value = c.apellido;
    document.getElementById("telefono").value = c.telefono;
    document.getElementById("ciudad").value = c.ciudad;
    document.getElementById("direccion").value = c.direccion;

    document.querySelector(`input[value=${c.genero}]`).checked = true;

    editando = id;

    btnGuardar.textContent = "Actualizar";
    btnGuardar.style.background = "#4a90e2";
}

obtenerContactos();