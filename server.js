var express = require('express');
var bp = require('body-parser');
var app = express();
var port = 8080;
var db = require('./servicos/dbconect')

// Configurações da API
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// start the server
app.listen(port, () => {
	console.log('app started in port 8080');
});

// Route post alunos
app.post('/alunos', (req, res) => {
	console.log(req.body.nome);
	res.send(req.body.nome);
});

// Route get /alunos/respostas
app.get('/alunos/respostas', (req, res) => {
	res.send(db.respostas());
});
// route our app
app.get('/', (req, res) => {
	res.send(`
    {
        "message": "Hello Word"
    }
    `);
});