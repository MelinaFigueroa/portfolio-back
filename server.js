const express = require('express');
const app = express();
const contactoRoutes = require('./routes/contactoRoute');

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Añade esta opción para proporcionar las credenciales
  auth: {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD
  }
});


// Middleware para analizar solicitudes JSON
app.use(express.json());

// Middleware para analizar solicitudes de formularios
app.use(express.urlencoded({ extended: true }));

// Configurar rutas
app.use('/contacto', contactoRoutes);

// Puerto dinámico para la implementación en Netlify
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
