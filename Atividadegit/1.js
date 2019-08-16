// 1. Crie uma variável que contenha todas as idades (age) dos usuário - map
const idade = require("./data.js");
const tidad = idade.map(idade => `${idade.age}`);
console.table(tidad);