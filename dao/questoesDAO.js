var fs = require("fs");

exports.getQuestoes = () => new Promise((resolve, reject) => {
  fs.readFile("./db/questoes.json", "utf8", function (err, data) {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
})