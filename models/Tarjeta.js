const mongoose = require('mongoose');

const tarjetaSchema = new mongoose.Schema({
  image: String,
  title: String,
  text: String,
  link_git: String,
});

const Tarjeta = mongoose.model('Tarjeta', tarjetaSchema);

module.exports = Tarjeta;
