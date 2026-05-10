# 💙 Lista de Contactos - Ana Velasquez 611

Este proyecto consiste en una aplicación web para gestionar contactos utilizando JavaScript Vanilla, conectada a una API REST creada con Node.js y Express, y almacenando la información en una base de datos MySQL.

---

# 📌 ¿Qué hace la aplicación?

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
* Género (Hombre o Mujer)

---

# 🛠️ Tecnologías utilizadas

## Frontend

* HTML
* CSS
* JavaScript Vanilla

## Backend

* Node.js
* Express.js
* Cors

## Base de Datos

* MySQL

---

# ⚙️ Dependencias instaladas

Para instalar las dependencias del proyecto se usaron los siguientes comandos:

* npm install express cors mysql2

Dependencia de desarrollo:

* npm install chalk --save-dev

# ▶️ ¿Cómo ejecutar el proyecto?

1. Clonar o descargar el repositorio

Abrir la carpeta del proyecto en Visual Studio Code.

2. Instalar Node.js

Descargar Node.js desde la página oficial:

https://nodejs.org

Instalar la versión LTS.

Verificar instalación:

* node -v
* npm -v

# 🗄️ Configuración de MySQL

## 4. Crear la base de datos

Abrir MySQL Workbench y ejecutar el siguiente script SQL:

CREATE DATABASE lista_contactos;

USE lista_contactos;

CREATE TABLE contactos (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100),
apellido VARCHAR(100),
telefono VARCHAR(50),
ciudad VARCHAR(100),
direccion VARCHAR(200),
genero VARCHAR(20)
);


## 5. Configurar conexión MySQL

En el archivo `server.js` modificar la contraseña según la contraseña personal de MySQL:

const db = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "TU_CONTRASEÑA",
database: "lista_contactos"
});


---

# 🚀 Ejecutar el servidor

En la terminal ejecutar:

node server.js


Si todo funciona correctamente aparecerá:
MySQL conectado
Servidor corriendo en puerto 3000


---

# 🌐 Abrir el proyecto

Abrir en el navegador:
http://localhost:3000


---

# 💡 ¿Cómo funciona?

La aplicación usa una API REST hecha con Express para conectar el frontend con la base de datos MySQL.

Cuando el usuario agrega, edita o elimina un contacto, JavaScript envía peticiones usando `fetch()` a la API.

El servidor recibe esos datos y hace consultas en MySQL para guardar, actualizar o eliminar la información.

Después, los contactos se actualizan automáticamente y se muestran en la pantalla.

---

# 🧠 ¿Qué aprendí?

En esta actividad aprendí:

* A crear una API REST básica con Express  
* A conectar Node.js con MySQL  
* A conectar frontend y backend  
* A trabajar con bases de datos reales  
* A utilizar async/await en JavaScript  
* A manejar rutas y peticiones HTTP  

---

# ⚠️ Dificultades

Lo que más se me dificultó fue:

* Comprender la conexión entre frontend, backend y MySQL  
* Configurar correctamente Node.js y npm  
* Entender cómo funcionan las rutas API  
* Manejar errores de conexión con MySQL  

---

# ✨ Conclusión

Esta actividad me ayudó a entender cómo funciona una aplicación web completa conectando frontend, backend y base de datos.

También comprendí la diferencia entre guardar información en LocalStorage y almacenarla realmente en una base de datos MySQL utilizando una API REST creada con Express.

