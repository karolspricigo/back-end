var bodyParser = require("body-parser");

var knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./database"
  }
});

var express = require("express"),
  app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/contacts", function(req, res) {
  knex
    .select()
    .from("contact")
    .then(function(data) {
      res.send(data);
    });
});

app.post("/contacts",function(req,res){
knex('contact').insert({nome:req.body.nome, sobrenome:req.body.sobrenome, telefone:req.body.telefone, rua:req.body.rua, numero:req.body.numero, bairro:req.body.bairro, cidade:req.body.cidade, estado:req.body.estado, pais:req.body.pais})
.then(function(id){
});

var server = app.listen(3000);
console.log("Servidor Express iniciado na porta %s", server.address().port);
