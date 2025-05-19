🎬 PELICULAS TAQUILLERAS DEL SIGLO XX

Aplicación web sencilla que permite buscar películas desde una base de datos `SQLite` local (`imdb.db`). 
Utiliza Node.js + Express en el backend, HTML + JavaScript en el frontend, y AJAX con JSON para la comunicación cliente-servidor.

📁 Estructura del Proyecto

PELICULAS TAQUILLERAS
├── backend/
│ ├── server.js # Servidor con Express + conexión SQLite
│ ├── imdb.db # Base de datos local con tablas Movie, Actor, Casting
│ └── package.json # Dependencias y scripts de Node.js
├── frontend/
│ └── public/
│ ├── index.html # Interfaz web
│ ├── main.js # Lógica AJAX del cliente
│ └── styles.css # Estilos CSS opcionales
└── README.md # Documentación del proyecto

⚙️ Requisitos

Programas en uso:
- [Node.js](https://nodejs.org/)
- [Git Bash](https://gitforwindows.org/) (en Windows)

🚀 Instalación y ejecución
1. Clona el repositorio o navega a tu proyecto

2. Instala las dependencias
cd backend
npm install
3. Ejecuta el servidor
npm start

4. Servidor corriendo en http://localhost:3000
