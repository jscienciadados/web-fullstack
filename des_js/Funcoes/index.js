// Hosting -> move as funções para cima para serem executadas antes
// Function Declaration
// Argments

function movie() {
    document.getElementById('result').innerHTML = 'The Matrix'
}

movie()

// Function Expression
const car = function() {
    document.getElementById('car').innerHTML = 'Audi Q3 Hatch Bath'
    
}

car()

function price() {
    let total = 0
    for (let value of arguments)
        total += value
    return total
}

document.getElementById('rs').innerHTML = price(10, 14, 7, 12)

function carLoan(loan, rate = 2.5, years = 5) {
    return loan * rate / 100 * years + loan
}
document.getElementById('ls').innerHTML = carLoan(20000)
