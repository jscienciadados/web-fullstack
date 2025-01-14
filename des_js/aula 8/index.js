// Criação de Obejtos
// const pessoa1 = {
//     nome: 'Alice',
//     sobrenome: 'Alves',
//     idade: 22

// };
// console.log(pessoa1.nome, '', pessoa1.sobrenome)

function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
};

const pessoa1 = criarPessoa('Esther', 'Maria', 19);
console.log(pessoa1.nome, pessoa1.idade);
const pessoa2 = criarPessoa('Rayane', 'Gouveia', 27);
console.log(pessoa2.nome, pessoa2.idade);