import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import { MoviesList } from './MoviesList'

const BASE_URL = 
"https://api.themoviedb.org/3/movie/"

const API_KEY = "?api_key="

const IMAGE_URL = "https://image.tmdb.org/t/p/"

const BACKDROP_SIZE = "original"

const POSTER_SIZE = "w300"

export function MovieDetail() {
    const { moviesListId } = useParams()
    const [movie, setMovie] = useState({})
    
    const getMovie = async () => {
        try {
            const res = await fetch(BASE_URL + moviesListId + API_KEY + process.env.REACT_APP_MOVIE_API)
            const newMovie = await res.json()
            setMovie(newMovie)
        }
        catch(e){
            console.error(e)
        }
    }

    //render movie information when there is change in id
    useEffect(()=> {
        getMovie()
    }, [moviesListId])

    if(!movie.title) return null;

    return (
        <section className='section movieList'>
            <img 
            className="backdrop" 
            src = {IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path} 
            alt={movie.title + " Backdrop"} 
            />
            <div class="detail-details">
            <img 
            className="details-poster" 
            src = {IMAGE_URL + POSTER_SIZE + movie.poster_path} 
            alt={movie.title + " Poster"} 
            />
            <div className="details-poster">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <ul>
                {movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>
                )}
            </ul>
            <Link to='/moviesList'>back to movies list</Link>
            </div> 
            </div>  
        </section>
    )
}

export default MovieDetail;