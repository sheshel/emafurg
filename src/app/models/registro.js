const mongoose = require('../../database');

const RegistroSchema = new mongoose.Schema({
  ph: {
    type: String,
    require: true,
  },
  od: {
    type: String,
    require: true,
  },
  tp: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Registro = mongoose.model('Registro', RegistroSchema);

module.exports = Registro;
