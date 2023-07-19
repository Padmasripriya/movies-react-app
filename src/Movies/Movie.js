import React, {useEffect} from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export function Movie( {movie, config} ) {

    return (
        <li>
            <Link to={`/moviesList/${movie.id}`}>
            {config.images?.base_url && (
                <img src={config.images.base_url + "w300" + movie.poster_path} alt={movie.title + " Poster"}/>
            )}
            </Link>    
        </li>    
    )
}

Movie.prototype = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        psoter_path: PropTypes.string.isRequired,
    }).isRequired,
    config: PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        }),
    }),
}


/* useEffect(() => {
        console.log(movie.name)
    },[])*/