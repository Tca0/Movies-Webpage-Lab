const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd10a51d4c6msh2e12226d50bbd24p1c99d2jsne457d5c4bd27',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};
console.log('hello')
const moviesData = async () => {
    fetch('https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt4154796', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
moviesData()