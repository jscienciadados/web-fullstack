const nome = 'Joao Souza';
const sobrenome = 'Pereira';
const idade = 51;
const peso = 65;
const altura = 1.70;
let anoNascimento;

// Calcula o IMC
let imc = peso / (altura * altura);
anoNascimento = 2024 - 51;

// Concatena o nome completo
const nomeCompleto = nome + ' ' + sobrenome;

// Cria uma string formatada para exibir os resultados
const resultado = `
Nome: ${nomeCompleto}
Idade: ${idade} anos
Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc.toFixed(2)}
`;

// Exibe o resultado no console
console.log(resultado);
console.log('e nasceu no ano de ', anoNascimento);

// Para exibir o resultado em um elemento HTML com id="resultado":
// document.getElementById('resultado').textContent = resultado;

