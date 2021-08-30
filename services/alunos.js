const alunos = require('../dao/alunosDAO')
const questoes = require('../dao/questoesDAO')
const { v4: uuidv4 } = require('uuid');

exports.saveAlunos = async (req, res) => {
    data = req.body
    data["id"] = uuidv4()
    data["created_at"] = new Date();
    try {
        const returnResposta = await alunos.saveAlunos(data)
        res.status(200).send({
            status: 200,
            message: returnResposta
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err
        })
    }
}

exports.alunosRespostas = async (req, res) => {
    // Pega todos os alunos no banco
    let allAlunos = await alunos.getAlunos()
    // Faz uma lista com todos os ids de alunos
    let allIds = allAlunos.map(aluno => aluno.id)
    // Verifica se o Id Passado na requisição existe no banco, se não existir retorna um erro
    if (!allIds.includes(req.body.id_usuario)) {
        res.status(404).send({
            status: 404,
            message: "Aluno não encontrado!!"
        })
        return;
    }

    let ValueUnitarioQuestao = 0
    let objAluno = {
        nota: 0,
        aprovado: false,
        data_do_teste: null
    }

    // Busca todas as questões do banco de dados
    let allQuestoes = JSON.parse(await questoes.getQuestoes());
    // Faz uma lista com o campo gabarito de cada questão
    let listaGabaritoQuestao = allQuestoes.map(questao => questao.gabarito)

    console.log(listaGabaritoQuestao)
    // Calcula o valor unitário de cada questão 
    ValueUnitarioQuestao = 100 / listaGabaritoQuestao.length
    // Calcula a nota do aluno
    listaGabaritoQuestao.forEach((gabarito, index) => {
        if (gabarito === req.body.respostas[index]) {
            objAluno["nota"] += ValueUnitarioQuestao
        }
    })
    // Detecta se o aluno esta aprovado ou não
    objAluno["aprovado"] = objAluno["nota"] >= 60 ? true : false
    // Seta a data em que as questões do aluno foram informadas
    objAluno["data_do_teste"] = new Date()

    aluno = allAlunos.filter(aluno => aluno.id === req.body.id_usuario)
    objAluno.id = aluno[0].id
    objAluno.nome = aluno[0].nome
    objAluno.email = aluno[0].email
    objAluno.senha = aluno[0].senha
    objAluno.created_at = aluno[0].created_at
    try {
        let respostaDoBanco = await alunos.updateAluno(req.body.id_usuario, objAluno)
        res.status(200).send({
            status: 200,
            message: respostaDoBanco
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error
        })
    }
}

exports.getStatusAluno = async function (req, res) {
    let idRequerido = req.params.id
    let retornar = { }
    // Compara o id Requerido com a variável data
    alunos.getAlunos((data) => {
        let alunos = JSON.parse(data)
        let aluno = alunos.filter(aluno => aluno.id === idRequerido)
        console.log(aluno)
        retornar["nome"] = aluno[0].nome
        retornar["nota"] = aluno[0].nota
        retornar["email"] = aluno[0].email
        retornar["aprovado"] = aluno[0].aprovado
        retornar["data_do_teste"] = aluno[0].data_do_teste
        console.log(retornar)
        res.send(JSON.stringify(retornar))
    })
}