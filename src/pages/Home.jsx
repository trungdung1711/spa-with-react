import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css'
import { getMovies, searchMovies } from "../services/api";

function Home() {

    // default value in useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const movies = await getMovies()
                setMovies(movies)
            } catch (err) {
                window.console.log(err)
                setError('Failed to load movie')
            } finally {
                setLoading(false)
            }
        }
        loadMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        // alert(searchQuery)
        if (!searchQuery.trim()) return

        if (loading) return

        setLoading(true)

        try {
            const result = await searchMovies(searchQuery)
            setMovies(result)
            setError(null)
        } catch (err) {
            window.console.log(err)
            setError("Failed to search movies")
        } finally {
            setLoading(false)
        }
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

            {
                error && <div className="error-message">Failed to load movies</div>
            }

            {
                loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className='movie-grid'>
                        {
                            movies.filter(
                                (movie) => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
                            ).map(
                                (movie) => (
                                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                                )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}


export default Home