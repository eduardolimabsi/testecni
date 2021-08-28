
var jsonData
var fs = require("fs");
fs.readFile("./db/respostas.json", "utf8", function (err, data) {
	if (err) {
		return console.log("Erro ao ler arquivo");
	}

	jsonData = JSON.parse(data); // faz o parse para json

	/**
	 Se precisar em array use:
	 jsonData = Object.keys(jsonData);
	/ */
});
exports.respostas = function () {
    return jsonData;
};