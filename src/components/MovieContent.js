import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'

function MovieContent({movies}) {
   
  

  return (
    <div>
        <MovieList movies={movies}/>
    </div>
  )
}

export default MovieContent