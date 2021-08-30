<h1 align="center">Desafio CNI Back-end</h1>

<!-- TABLE OF CONTENTS -->
<details >
  <summary>Indice</summary>
  <ol>
   <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li>
      <a href="#rodar-Projeto">Rodar Projeto</a>
      <ul>
        <li><a href="#Pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#executar-projeto">Executar projeto</a></li>
      </ul>
    </li>
    <li><a href="#utilização">Utilização</a>
    </li>
        <li>
      <a href="#desafio-proposto">Desafio Proposto</a>   
    </li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

### Tecnologias utilizadas

- [Node](https://nodejs.org/en/)
- [Insomnia Rest](https://insomnia.rest/)

<!-- GETTING STARTED -->

## Rodar Projeto

O projeto foi feito utilizando node, express e JSON funcionando como banco de dados.

### Pré-requisitos

Para rodar este projeto deve ser instalado o Node, com o node devidamente instalado, podemos rodar o projeto

- [Node](https://nodejs.org/en/)

### Executar projeto

1. Clone o repositório
   ```shell
   git clone https://github.com/eduardolimabsi/testecni
   ```
2. Entre na pasta
   ```shell
   cd testecni
   ```
3. Instale as dependências

   ```shell
   npm install
   ```

4. Rode o projeto node

   ```shell
   npm run start
   ```

## Utilização

Após o projeto rodando aceitara requisições na porta 8080 local.

- POST http://localhost:8080/alunos

Nesta rota é inserido um novo aluno no banco que gera automaticamente o id e o created_at de cada aluno

body da requisição

```json
{
  "nome": "teste",
  "email": "teste@teste.com",
  "senha": "123456"
}
```

resposta da requisição

```json
{
  "status": 200,
  "message": "Success!!"
}
```

- GET http://localhost:8080/questoes

Esta rota retorna a lista de questões que esta no banco

Resposta da Requisição

```json
[
  {
    "id": 1,
    "questao": "A agilidade nasce:",
    "alternativas": [
      "no contexto das empresas de hardware.",
      "no contexto governamental.",
      "por acaso graças ao jogo de futebol.",
      "com o objetivo de melhorar os processos de trabalho."
    ],
    "gabarito": "d"
  },...
]
```

- POST http://localhost:8080/alunos/respostas

Esta rota recebe no body as resposta de cada aluno.

```json
{
  "id_usuario": "b65ab6a9-2597-4cd8-8c72-b8cea902e250",
  "senha": "123456",
  "respostas": ["d", "b", "d", "c", "b", "c", "a", "b", "a", "a"]
}
```

Resposta da requisição

```json
{
  "status": 200,
  "message": "Success!!"
}
```

- GET http://localhost:8080/alunos/:id/status

Rota busca por id as informações do aluno.

Resposta da requisição

```json
{
  "nome": "teste",
  "nota": 0,
  "email": "teste@teste.com",
  "aprovado": false,
  "data_do_teste": null
}
```

## Desafio proposto

https://sugared-cupcake-9ef.notion.site/Teste-Desenvolvedor-Back-end-7e71a0dba2324fa09e561719fd71c176

## Contato

Eduardo Lima - [Linkedin](https://www.linkedin.com/in/eduardolimabsi/) - eduardolimabsi@hotmail.com

Github: [https://github.com/eduardolimabsi](https://github.com/eduardolimabsi)
