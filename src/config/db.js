//Configurar automaticamente qual server para o banco de dados usar
//Se estiver em produçao usar o server atlas
//Se não usar server local


/*if (process.env.NODE_ENV == "production") {
  module.exports = {mongoURI: ""}
} else {
  module.exports = {mongoURI: "mongodb://localhost/emafurg"}
}*/

module.exports = {mongoURI: "mongodb://emafurg:07s07S96@cluster0-shard-00-00-0rtvb.mongodb.net:27017,cluster0-shard-00-01-0rtvb.mongodb.net:27017,cluster0-shard-00-02-0rtvb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"}