import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState('')

    const movies = [
        {
            id: '1',
            title : 'Harry Potter',
            release_date: '4/15/2025'
        },

        {
            id: '2',
            title : 'Sabrina: The teenage witch',
            release_date: '9/4/2029'
        },

        {
            id: '3',
            title : 'Dekaranger: 30 years after',
            release_date: '1/17/2034'
        },

        {
            id: '4',
            title : '日本語のポッドキャスト',
            release_date: '1/17/2025'
        },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };

    return (
        <div className="home">


            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}>
                </input>

                <button type="submit" className="search-button">
                    Get on
                </button>
            </form>


            <div className='movie-grid'>
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}></MovieCard>)}
            </div>


        </div>
    );
}


export default Home