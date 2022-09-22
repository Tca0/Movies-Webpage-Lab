const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd10a51d4c6msh2e12226d50bbd24p1c99d2jsne457d5c4bd27',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};
console.log('hello')
const moviesData = async () => {
    fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(response => {
        console.log(response, typeof response, Object.keys(response))
        console.log(response.Search)
        const movies = response.Search;
        movies.forEach(movie => {
            console.log(movie.Title)
            // creating a div container to each movie
            const movieCard = document.createElement('div')
            movieCard.classList.add('movieCard-container')
            // append div to the main body
            document.querySelector('main').appendChild(movieCard)


            // creating header tag and attaching it to the header of card
            const movieTitle = document.createElement('h2');
            movieTitle.textContent = movie.Title;
            movieCard.appendChild(movieTitle)
            // creating released year  and attaching it to the header
            const releasedYear = document.createElement('h3')
            releasedYear.textContent = 'released year: '+ movie.Year
            movieCard.appendChild(releasedYear)

            // creating image tag and attaching it after the header
            const movieImage = document.createElement('img');
            movieImage.src = movie.Poster
            movieCard.appendChild(movieImage)
            
        });
    })
	.catch(err => console.error(err));
}
moviesData()