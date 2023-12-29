const mongoose = require('mongoose');

// Define el esquema del modelo
const contactoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// Crea y exporta el modelo
const Contacto = mongoose.model('Contacto', contactoSchema);
module.exports = Contacto;
