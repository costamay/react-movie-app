import React from 'react'
import { Link } from 'react-router-dom'

function Movie({movie}) {
  return (
    <div className='col-md-4'>
                <div className="card">
                <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
                <div className="card-body">
                <h4 className="card-title text-center">{movie.Title}</h4>
                <Link to={`movies/${movie.id}`} className="btn btn-outline-primary text-center">View more</Link>
                </div>
                </div>
    </div>

  )
}

export default Movie