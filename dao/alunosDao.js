const fs = require("fs");


exports.saveAlunos = (newData) => new Promise((resolve, reject) => {
  fs.stat('./db/alunos.json', (err, stat) => {
    if (err == null) {
      fs.readFile('./db/alunos.json', (err, data) => {
        if (err) {
          reject(err)
        } else {
          obj = JSON.parse(data);

          obj[obj.length] = newData;

          const json = JSON.stringify(obj);
          fs.writeFile('./db/alunos.json', json, (err) => {
            if (err) {
              reject(err)
            } else {
              resolve("Success!!")
            }
          });
        }
      });
    } else {
      fs.writeFile('./db/alunos.json', "[" + JSON.stringify(newData) + "]", (err) => {
        if (err) {
          reject(err)
        } else {
          resolve("Success!!")
        }
      });
    }
  });
})


exports.updateAluno = (id, newData) => new Promise((resolve, reject) => {
  fs.stat('./db/alunos.json', (err, stat) => {
    if (err == null) {
      fs.readFile('./db/alunos.json', function readFileCallback(err, data) {
        if (err) {
          reject("Erro!!")
        } else {
          obj = JSON.parse(data);
          for (let i = 0; i < obj.length; i++) {
            if (obj[i].id == id) {
              obj[i] = newData;
            }
          }

          var json = JSON.stringify(obj);
          fs.writeFile('./db/alunos.json', json, 'utf8', (err) => {
            if (err) {
              reject(err)
            } else {
              resolve("Success!!")
            }
          });
        }
      });
    } else {
      reject("Erro!!")
    }
  });
})




exports.getAlunos = () => new Promise((resolve, reject) => {
  fs.readFile("./db/alunos.json", "utf8", function (err, data) {
    if (err) {
      reject(err)
    }
    resolve(JSON.parse(data));
  });
})
