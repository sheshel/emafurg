const mongoose = require('mongoose');								//Biblioteca para usar o mongodb no nodejs
const db = require('../config/db');									//Chama arquivo de configuração do server mongodb

mongoose.connect(db.mongoURI, { useNewUrlParser: true }).then(() => {
  console.log("Conectou ao mongo "+db.mongoURI);
})﻿.catch((err) => {
  console.log("Erro ao conectar com o mongo "+db.mongoURI);
});

module.exports = mongoose;
