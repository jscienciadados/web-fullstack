
// Gerando um numero randomico
let computerNumber
let userNumbers = []
let attemps = 0
let maxguess = 10

function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value )
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attemps < maxguess) {

        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
            document.getElementById('inputBox').value = ''
            attemps++
            document.getElementById('attempts').innerHTML = attemps
    
        }
        else  if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too low'
            document.getElementById('inputBox').value = ''
            attemps++
            document.getElementById('attempts').innerHTML = attemps
            
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulation!!'
            attemps++
            document.getElementById('attempts').innerHTML = attemps
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            
    
        }

    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose!! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }

    
}
