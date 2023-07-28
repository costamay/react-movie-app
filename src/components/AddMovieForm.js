import React, { useState } from 'react'

function AddMovieForm({addMovie}) {

  const [formData, setFormData] = useState({
    Title : "",
    Year : "",
    imdbID : "",
    Poster: "",
    Type : "movie"

  })

  const handleOnchange =(e) =>{
   const name = e.target.name
   const value = e.target.value
   console.log(name)
   console.log(value)

   setFormData({...formData, [name]: value})
  }

  const handleOnsubmit =(e) =>{
    e.preventDefault()
   
      addMovie(formData)
  }
  return (
    <div className='movieForm'>
      <form onSubmit={handleOnsubmit}>
  <div className="form-group">
    <label htmlfor="exampleFormControlInput1">Title</label>
    <input type="text" className="form-control" id="Title" name='Title' placeholder="Title" onChange={handleOnchange}/>
    <label htmlfor="exampleFormControlInput1">Year</label>
    <input type="text" className="form-control" id="Year" name='Year' placeholder="Enter year released" onChange={handleOnchange}/>
    <label htmlfor="exampleFormControlInput1">imdbID</label>
    <input type="text" className="form-control" id="ImdbID" name='imdbID' placeholder="Enter Image imdbID" onChange={handleOnchange}/>
    <label htmlfor="exampleFormControlInput1">Poster</label>
    <input type="text" className="form-control" id="Poster" name='Poster' placeholder="Enter image link" onChange={handleOnchange}/>
    <input type="submit" className="form-control btn btn-outline-primary" value="Submit" />
  </div>
</form>
    </div>
  )
}

export default AddMovieForm