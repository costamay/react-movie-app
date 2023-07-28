import React from 'react'
import Movie from './Movie'

function MovieList({movies}) {
    const displayMovies = movies.map(movie => <Movie key={movie.id} movie={movie}/>)
  return (
    <div>
        <div className='row'>
            {displayMovies} 
        </div>
        
    </div>
  )
}

export default MovieList