const express = require('express');
const app = express();
const contactoRoutes = require('./routes/contactoRoute');

require('dotenv').config();

const mongoose = require('mongoose');

// Usar la cadena de conexión desde las variables de entorno
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Middleware para analizar solicitudes de formularios
app.use(express.urlencoded({ extended: true }));

// Configurar rutas
app.use('/contacto', contactoRoutes);

// Puerto dinámico para la implementación en Netlify
const PORT = process.env.PORT || 4001;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
