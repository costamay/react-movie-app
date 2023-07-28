import React from 'react'
import { useParams } from 'react-router-dom'

function ShowMovie({movies}) {
    
    const params = useParams()
    
    const movie = movies.find(movie => movie.id === parseInt(params.id))
    console.log(movie)

  return (
    <div className='movie-details'>
        <div className='movie-image'>
            <img src={movie.Poster}/>
        </div>
        <div className='movie-info'>
        <div className='movie-title btn btn-danger'>
            Title: {movie.Title}
        </div>
        <div className='movie-year btn btn-primary'>
           Year: {movie.Year}
        </div>
        </div>

    </div>
  )
}

export default ShowMovie