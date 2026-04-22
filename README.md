# 💙 Lista de Contactos - Ana Velasquez 611

Este proyecto consiste en una aplicación web sencilla donde se pueden gestionar contactos utilizando **JavaScript Vanilla**, manipulando el DOM y almacenando la información en el navegador con **LocalStorage**.

---

## 📌 ¿Qué hace la aplicación?

La aplicación permite:

* ➕ Agregar contactos
* 👀 Visualizar contactos guardados
* ✏️ Editar contactos
* 🗑️ Eliminar contactos

Cada contacto contiene:

* Nombre
* Apellido
* Teléfono
* Ciudad
* Dirección
* Tambien puede elegirse el género (Femenino o Masculino)

---

## 🛠️ Tecnologías usadas

* HTML
* CSS
* JavaScript (Vanilla)
* LocalStorage

---

## ▶️ ¿Cómo ejecutar el proyecto?

1. Descargar o clonar el repositorio
2. Abrir la carpeta del proyecto
3. Abrir el archivo `index.html` en cualquier navegador (Google Chrome, Edge, etc.)

También se puede abrir con clic derecho → **Abrir con navegador**

No es necesario instalar nada adicional.

---

### 💡 ¿Cómo funciona?

Básicamente, cuando uno llena el formulario y le da al botón, los datos se guardan en una lista dentro del código. Esa información también se guarda en el LocalStorage del navegador, entonces si uno recarga la página, los contactos siguen ahí.

Cuando uno le da en editar, los datos vuelven a aparecer en el formulario para poder cambiarlos, y luego se actualizan. Si le das eliminar, simplemente se borra el contacto de la lista.

También se muestra un pequeño mensaje de "Cargando..." como simulación del proceso de guardado de la información.

---

## 🧠 ¿Qué aprendí?

En esta actividad aprendí:

* A manejar eventos en JavaScript con `addEventListener`
* A manipular el DOM para mostrar información dinámicamente
* A usar LocalStorage para guardar datos en el navegador
* A validar formularios antes de enviar información
* A trabajar con arreglos y objetos en JavaScript
* A mejorar la parte visual con CSS

---

## ⚠️ Dificultades

Lo que más se me dificultó fue:

* Entender cómo editar un contacto sin crear uno nuevo
* Manejar el índice del arreglo para actualizar correctamente
* Trabajar con LocalStorage al momento convertir datos con JSON
* Hacer que el botón cambiara entre “Agregar” y “Actualizar”

---

## ✨ Conclusión

Esta actividad me ayudó a entender cómo funciona JavaScript en el navegador sin necesidad de usar frameworks, y cómo se pueden crear aplicaciones interactivas utilizando solo HTML, CSS y JavaScript.

También entendí que el LocalStorage es independiente por navegador, por lo que los datos no se comparten entre Chrome y Edge.

---