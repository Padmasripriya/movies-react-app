import React, {useState, useRef, useEffect} from 'react'
import { Movie } from './Movie'
import { Filter } from '../Filter'

//Array - Movies
/*const movies = [
    {
        name: "spiderman"
    },
    {
        name: "ironman"
    },
    {
        name: "superman"
    },
    {
        name: "batman"
    }
]*/

const API_URL = 
"https://api.themoviedb.org/3/discover/movie?api_key="

const CONFIG_URL = 
"https://api.themoviedb.org/3/configuration?api_key="

//Lifecycle of React Component - UseEffect Hook
export function MoviesList() {
    const [ filter, setFilter ] = useState("")
    const [ movies, setMovies ] = useState([]) //returns an array
    const [ config, setConfig ] = useState({}) //returns an object

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API)
            const movies = await res.json()
            setMovies(movies.results)
            //console.log(movies)
        }
        catch(e){
            console.error(e)
        }
    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL + process.env.REACT_APP_MOVIE_API)
            const config = await res.json()
            setConfig(config)
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getConfig()
        getMovies()
    },[])

    return(
        <div>
            <Filter setFilter={setFilter} filter={filter}/> 
            <ul className="movies-list">
                { movies.filter( ( movie ) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase())
                )
                        .map( ( movie ) => 
                           <Movie key={movie.id} config={config} movie={movie}/> 
                        )}
            </ul>
        </div>
    )
}

//Map is used to loop through the elements in an array (map is the JS method)
//list should have the key which is the movie name itself to fix the warning messages (like an id)
/*export function MoviesList() {
    return(
        <div>
            <ul>
                { movies.map( ( movie ) => {
                     return(
                        <li key={movie.name}>{movie.name}</li>
                     )
                   }   
                )}
            </ul>
        </div>
    )

    Filter:
    <ul>
    { movies.filter( ( movie ) => {
        return movie.name.toLowerCase().includes(filter.toLowerCase())
        }
        )
        .map( ( movie ) => {
            return(
                <li key={movie.name}>{movie.name}</li>
            )
        }   
    )}
    </ul>
}

//Filtering (this is also JS method)
//We can remove return and to flower braces
export function MoviesList() {
    const [ filter, setFilter ] = useState("")
    return(
        <div>
            <label>
                Filter:
                <input onChange={ (e) => setFilter(e.target.value)} value={filter}/>
            </label>
            <ul>
                { movies.filter( ( movie ) =>
                    movie.name.toLowerCase().includes(filter.toLowerCase())
                )
                        .map( ( movie ) => 
                           <li key={movie.name}>{movie.name}</li> 
                        )}
            </ul>
        </div>
    )
}

//Filter and Movie are component. The values are passed from parent to individual components
//preventDefault method is used to stop re-redering the page on form submits
//Refs is the react hook used to display the DOM information
export function MoviesList() {
    const [ filter, setFilter ] = useState("")
    const ref = useRef(null)
    return(
        <div>
            <form onSubmit={ (e) =>
               { e.preventDefault() 
                 console.log(ref.current.value)
               }
            }>
                <input ref={ref}/>
                <button>Submit</button>
            </form>
            <Filter setFilter={setFilter} filter={filter}/> 
            <ul>
                { movies.filter( ( movie ) =>
                    movie.name.toLowerCase().includes(filter.toLowerCase())
                )
                        .map( ( movie ) => 
                           <Movie key={movie.name} movie={movie}/> 
                        )}
            </ul>
        </div>

         /*useEffect(() => {
        console.log("Hit Effect");
    },[]) //useEffect only run when the page first loads*/

     /*useEffect(() => {
        console.log("Hit Effect");
    },[filter])
    )
}


*/