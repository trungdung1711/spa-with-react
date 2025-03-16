import '../css/MovieCard.css'


function MovieCard({movie}) {

    function onFavourite() {
        alert('Clicked')
    }

    return (
        <div className="movie-card">
            
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}>
                </img>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavourite}>
                        😍
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>
                    {movie.title}
                </h3>
                <p>
                    {movie.release_date}
                </p>
            </div>

        </div>
    )
}


export default MovieCard