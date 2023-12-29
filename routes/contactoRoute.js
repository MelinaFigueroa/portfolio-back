const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');

// Corrige la importación del modelo, usa una letra minúscula
const Contacto = require('../models/Contacto');

router.post('/guardar', async (req, res) => {
  // Obtén los datos del formulario desde req.body
  const { nombre, apellido, email, mensaje } = req.body;

  // Crea una instancia del modelo Contacto con los datos del formulario
  const nuevoContacto = new Contacto({
    nombre,
    apellido,
    email,
    mensaje,
  });

  try {
    // Guarda el nuevo contacto en la base de datos
    await nuevoContacto.save();
    res.status(201).json({ mensaje: 'Formulario de contacto guardado con éxito' });
  } catch (error) {
    console.error('Error al guardar el formulario de contacto:', error);
    res.status(500).json({ mensaje: 'Error al guardar el formulario de contacto' });
  }
});

module.exports = router;
