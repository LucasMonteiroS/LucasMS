// 2. Crie uma variáveis que tenha apenas os usuários do sexo feminino e com mais de 18 anos - reduce
const mulher = require("./data.js");
const MulherFiltrada = mulher.reduce(function(mulherfinal, mulheratual) 
{const mulherFiltra = mulheratual.age >= 18 && mulheratual.gender.includes("Female") ? 'mulheresFilt':'noFilt';
mulherfinal[mulherFiltra].push(`Nome:${mulheratual.first_name}, Idade:${mulheratual.age}.`);
return mulherfinal;
},{mulheresFilt:[], noFilt:[]});
console.table(MulherFiltrada.mulheresFilt);