// Formas de criação de  funções
function saudacao(nome) {
    return `Bom dia ${nome}!!`;
}

const variavel = saudacao('Ester');
console.log(variavel);

function somar(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(somar(-3, 5));

// função anonima
const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(16));

// Aero function
const multiplicar = (x, y) =>   x * y;


console.log(multiplicar(8,15));