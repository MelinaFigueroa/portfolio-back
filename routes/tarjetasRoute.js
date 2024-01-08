const express = require('express');
const router = express.Router();
const Tarjeta = require('../models/Tarjeta');


// Ruta para obtener los datos de las tarjetas desde MongoDB
router.get('/api/cardData/mongodb', async (req, res) => {
  try {
    const tarjetas = await Tarjeta.find();
    res.json(tarjetas);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
