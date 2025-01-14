const numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

texto.innerHTML = '';
numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero}é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>${numero}é NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} arredondado para cime: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>${numero} arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

