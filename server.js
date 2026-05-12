const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const db = mysql.createConnection({
   host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.log("Error conexión MySQL");
    } else {
        console.log("MySQL conectado");
    }
});

app.get("/api/contactos", (req, res) => {
    db.query("SELECT * FROM contactos", (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.post("/api/contactos", (req, res) => {

    const { nombre, apellido, telefono, ciudad, direccion, genero } = req.body;

    const sql = `
        INSERT INTO contactos
        (nombre, apellido, telefono, ciudad, direccion, genero)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nombre, apellido, telefono, ciudad, direccion, genero],
        (err, result) => {

            if (err) {
                res.status(500).send(err);
            } else {

                res.json({
                    id: result.insertId,
                    ...req.body
                });
            }
        }
    );
});

app.delete("/api/contactos/:id", (req, res) => {

    db.query(
        "DELETE FROM contactos WHERE id = ?",
        [req.params.id],
        (err) => {

            if (err) {
                res.status(500).send(err);
            } else {
                res.json({ mensaje: "Contacto eliminado" });
            }
        }
    );
});

app.put("/api/contactos/:id", (req, res) => {

    const { nombre, apellido, telefono, ciudad, direccion, genero } = req.body;

    const sql = `
        UPDATE contactos
        SET nombre=?, apellido=?, telefono=?, ciudad=?, direccion=?, genero=?
        WHERE id=?
    `;

    db.query(
        sql,
        [
            nombre,
            apellido,
            telefono,
            ciudad,
            direccion,
            genero,
            req.params.id
        ],
        (err) => {

            if (err) {
                res.status(500).send(err);
            } else {
                res.json({ mensaje: "Actualizado" });
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});