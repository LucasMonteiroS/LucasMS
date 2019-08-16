// 4. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos
const idade = require("./data.js");
const tidad = idade.map(idade => `${idade.age * 2}`);
const idadeFiltrada = tidad.filter(
	idad => idad <= 50);
console.table(idadeFiltrada);