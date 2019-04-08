//Configurar automaticamente qual server para o banco de dados usar
//Se estiver em produçao usar o server atlas
//Se não usar server local


if (process.env.NODE_ENV == "production") {
  module.exports = {mongoURI: ""}
} else {
  module.exports = {mongoURI: "mongodb://localhost/emafurg"}
}
