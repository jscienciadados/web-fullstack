// trabalhando com strings arrays

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

// Arow function

console.log(movies.find(movie => movie.movieName === 'Dejavu'));


// console.log(movies.find(function(movie) {
//     return movie.movieName == 'The Matrix'
// }))