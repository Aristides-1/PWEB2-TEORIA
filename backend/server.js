const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde frontend/public
app.use(express.static(path.join(__dirname, "../frontend/public")));

// Conexión a la base de datos
const db = new sqlite3.Database(path.join(__dirname, "imdb.db"), (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    console.log("Conectado a la base de datos SQLite.");
  }
});
