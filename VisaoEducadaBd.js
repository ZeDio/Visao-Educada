//instalando programas
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//configurando o roteamento para teste no postman
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = 3000;

//configurando o acesso ao mongodb
mongoose.connect('mongodb://127.0.0.1:27017/VisaoEducada',
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS : 20000
});

//cadastro do usuario
const CadastroSchema = new mongoose.Schema({
	email : {type : String, required : true},
	senha : {type : String, required : true},
    nome : {type : String},
    endereco : { type : String},
	bairro : { type : String},
	complemento : { type : String},
    numero : {type : Number},
    cep : {type : String, required : true},
    uf : {type : String, required : true}
});
const Cadastro = mongoose.model("Cadastro", CadastroSchema);

//configurando os roteamentos
app.post("/cadastro", async(req, res)=>{
	const email = req.body.email;
	const senha = req.body.senha;
    const nome = req.body.nome;
    const endereco = req.body.endereco;
	const bairro = req.body.bairro;
    const complemento = req.body.complemento;
	const numero = req.body.numero;
    const cep  = req.body.cep;
    const uf = req.body.uf

    //testando se todos os campos foram prenchidos
    if(email == null || senha == null || nome == null || endereco == null || bairro == null || complemento == null || numero == null || cep == null || uf == null){
        return res.status(400).json({error: "Preencha todos os dados.."})
    }

    //teste se o email da existe
    const emailExistente = await Cadastro.findOne({email:email})
    if(emailExistente){
        return res.status(400).json({error : "O e-mail cadastrado já existe!!"})
    }

    //mandando para o banco
    const Cadastrado = new Cadastro({
        email : email,
		senha : senha,
		nome : nome,
		endereco : endereco,
		bairro : bairro,
		complemento : complemento,
		numero : numero,
		cep : cep,
		uf : uf
    })

    try{
        const newCadastro = await Cadastrado.save();
        res.json({error : null, msg : "Cadastro ok", cadastradoId : newCadastro._id});
    } catch(error){
        res.status(400).json({error});
    }
});

//rota para o get de cadastro
app.get("/cadastro", async(req, res)=>{
    res.sendFile(__dirname +"/Pgs/cadastro.html");
})

//rota para o get de login
app.get("/login", async(req, res)=>{
    res.sendFile(__dirname +"/Pgs/login.html");
})

//rota para o get de login
app.get("/contato", async(req, res)=>{
    res.sendFile(__dirname +"/Pgs/contato.html");
})

//rota para o get de login
app.get("/sobre", async(req, res)=>{
    res.sendFile(__dirname +"/Pgs/sobre.html");
})

//rota raiz - inw
app.get("/", async(req, res)=>{
    res.sendFile(__dirname +"/index.html");
})

//configurando a porta
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})