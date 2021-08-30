// server.js
const express = require('express');
const alunos = require('./services/alunos');
const questoes = require('./services/questoes');

const app = express();
const port = 8080;

// Configurações da API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// Route post alunos
app.post('/alunos', (req, res) => { alunos.saveAlunos(req, res) });

// Route get /questões
app.get('/questoes', (req, res) => { questoes.getQuestoes(req, res) });

// Route get /alunos/respostas
app.post('/alunos/respostas', (req, res) => { alunos.alunosRespostas(req, res) });

// status do Aluno
app.get('/alunos/:id/status', (req, res) => { alunos.getStatusAluno(req, res) });

// start the server
app.listen(port, () => {
  console.log('app started in port 8080');
});