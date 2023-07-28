import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2"; 
import About from './About';
import AddMovieForm from './AddMovieForm';
import './App.css';
import MovieContent from './MovieContent';
import Navbar from './Navbar';
import ShowMovie from './ShowMovie';

function App() {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  useEffect(() =>{
      fetch("http://localhost:4000/movies")
      .then(res => res.json())
      .then(movies => setMovies(movies))
  }, [])

  const addMovie =(movie) =>{
    fetch("http://localhost:4000/movies",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(movie)
    })
    .then(res => res.json())
    .then(data => {
      Swal.fire({  
        title: 'Success',  
        type: 'success',  
        text: 'Movie added successfully.',  
      }); 
      setMovies(prev => [...prev, data])
      navigate('/')
    })
  }

  return (
    <div className="container">
      <h1 className='text-primary text-center'>Movie Shop</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieContent movies={movies}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/add" element={<AddMovieForm addMovie={addMovie}/>}/>
        <Route path="/movies/:id" element={<ShowMovie movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
