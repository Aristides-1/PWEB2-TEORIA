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

// Ruta de búsqueda de películas
app.get("/api/movies", (req, res) => {
  const title = req.query.title;
  db.all(
    `SELECT MovieID AS id, Title AS title, Year AS year FROM Movie WHERE Title LIKE ? LIMIT 10`, //Correccion de base de datos
    [`%${title}%`],
    (err, rows) => {
      if (err) {
        console.error("Error en la consulta:", err.message);
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});