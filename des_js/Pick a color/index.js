

const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Cyan', 'black']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// No click 
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] // Aplicando o background do body
    color.textContent = colors[randomColor]

})


//Gerando numeros randomicos
function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}