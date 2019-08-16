// 3. Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find
const morador = require("./data.js");
const encontraUsuario = morador.find(morador =>
    morador.address.city.toLocaleLowerCase() =='monroe');
console.table(`Nome:${encontraUsuario.first_name} ${encontraUsuario.last_name}, Mora em: ${encontraUsuario.address.city}.`);