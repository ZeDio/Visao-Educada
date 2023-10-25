// mongodb://localhost:27017/  ou  mongodb://127.0.0.1:27017/
// npm init -y
// npm i mongoose

const mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/VisaoEducada',
 {useNewUrlParser : true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS : 20000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error : '))

db.once('open', function(){
    console.log("Estamos conectados ao banco");
})

const usuarioSchema = new mongoose.Schema({
	email: String,
	senha: String,
	nome: String,
	endereco: String,
	bairro: String,
	complemento: String,
 	numero: Number,
	cep: String,
	uf: String
});

const usuario = mongoose.model('usuario',pessoaSchema)

const jose = new usuario({
    email: "jose.diogo100407@gmail.com",
	senha: "123456",
	nome: "José Diogo",
	endereco: "R. Helena Zerrener",
	bairro: "Liberdade",
	complemento: "Ap.1214",
 	numero: "39",
	cep: "02012-020",
	uf: SP  
});

marcos.save()