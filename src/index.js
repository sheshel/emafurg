const express = require('express'); 					//Biblioteca do nodeJS
const bodyParser = require('body-parser'); 				//Biblioteca do nodeJS
require('dotenv').config(); 							// P/ Trabalhar com variaveis de ambiente

const app = express();									//Cria o app

app.use(bodyParser.json());								//Configura para usar json
app.use(bodyParser.urlencoded({ extend: false }));		//Configura para usar urlencode


const PORT = process.env.PORT || 8089;					//Usar a porta 8089 em localhost ou a padrao definida no server
app.listen(PORT,() => {
  console.log("Servidor Rodando");
});
