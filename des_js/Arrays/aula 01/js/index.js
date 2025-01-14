// Arrays
let num = [7, 8, 9]

letters = ['a', 'b', 'c', 'd', 'e']

all = num.concat(letters)
half = all.splice(3,5)

// adcionando ao final do array
num.push(12, 15, 17)

// adcionando o no inicio
num.unshift(2025)

//adicionando ao meio
num.splice(1, 0, 1, 2, 3, 4, 5, 6)

// localizando itens no array
console.log(num.indexOf(8))

console.log(num.includes(0))

// remove na ultima posição
num.pop()

// remove no inicio
num.shift()

num.splice(2,1)

// zerando um array
// num = []

// num.length = 0

//splice
// num.spliace(0, num.length)


document.getElementById('result').innerHTML = num

document.getElementById('teste').innerHTML = half