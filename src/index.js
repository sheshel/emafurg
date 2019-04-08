//Iniciar um projeto nodejs 	$npm init -y
//Instalar o express			$npm add express
//Instalar o body-parser		$npm add body-parser

const express = require('express'); 					//Biblioteca do nodeJS
const bodyParser = require('body-parser'); 				//Biblioteca do nodeJS
require('dotenv').config(); 							// P/ Trabalhar com variaveis de ambiente

const app = express();									//Cria o app

app.use(bodyParser.json());								//Configura para usar json
app.use(bodyParser.urlencoded({ extend: false }));		//Configura para usar urlencode

require('./app/controllers/EmaController')(app);		//Usar o controler

const PORT = process.env.PORT || 8089;					//Usar a porta 8089 em localhost ou a padrao definida no server
app.listen(PORT,() => {
  console.log("Servidor Rodando");
});
