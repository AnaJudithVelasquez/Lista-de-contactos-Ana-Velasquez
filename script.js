const btnGuardar = document.getElementById("btnGuardar");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("listaContactos");
const cargando = document.getElementById("cargando");

let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
let editando = null;

function mostrarContactos() {
    lista.innerHTML = "";

    contactos.forEach((c, index) => {
        const div = document.createElement("div");
        div.classList.add("contacto");

        const icono = c.genero === "mujer" ? "👩" : "👨";

        div.innerHTML = `
            <span>
                ${icono} ${c.nombre} ${c.apellido} - ${c.ciudad} | 📞 ${c.telefono}
            </span>

            <div class="acciones">
                <button class="editar" onclick="editar(${index})">✏️</button>
                <button class="eliminar" onclick="eliminar(${index})">🗑️</button>
            </div>
        `;

        lista.appendChild(div);
    });
}

function guardar() {
    localStorage.setItem("contactos", JSON.stringify(contactos));
}

formulario.addEventListener("submit", function(e) {
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

    cargando.classList.remove("oculto");

    setTimeout(() => {

        const nuevo = {
            nombre,
            apellido,
            telefono,
            ciudad,
            direccion,
            genero: genero.value
        };

        if (editando === null) {
            contactos.push(nuevo);
        } else {
            contactos[editando] = nuevo;
            editando = null;
        }

        guardar();
        mostrarContactos();
        formulario.reset();

        btnGuardar.textContent = "Agregar";
        btnGuardar.style.background = "#ff85a2";

        cargando.classList.add("oculto");

    }, 800);
});

function eliminar(index) {
    contactos.splice(index, 1);
    guardar();
    mostrarContactos();
}

function editar(index) {
    const c = contactos[index];

    document.getElementById("nombre").value = c.nombre;
    document.getElementById("apellido").value = c.apellido;
    document.getElementById("telefono").value = c.telefono;
    document.getElementById("ciudad").value = c.ciudad;
    document.getElementById("direccion").value = c.direccion;

    document.querySelector(`input[value=${c.genero}]`).checked = true;

    editando = index;

    btnGuardar.textContent = "Actualizar";
    btnGuardar.style.background = "#4a90e2";
}

mostrarContactos();