// for learning purpose
const config = {
    "key" : "c141c119f41092ced005f1781331e40a",
    "url" : "https://api.themoviedb.org/3"
}

export const getMovies = async () => {
    const response = await fetch(`${config.url}/movie/popular?api_key=${config.key}`)
    const data = await response.json()
    return data.results
}


export const searchMovies = async (query) => {
    const response = await fetch(`${config.url}/search/movie?api_key=${config.key}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}