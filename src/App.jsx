import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from "./MovieCard"; 
import './App.css';
import SearchIcon from './search.svg';
import Footer from './footer';

const API_URL = "http://www.omdbapi.com/?apikey=557d4875";

function App() {

  const [movies, setMovies] = useState();
  const [seacrhIerm, SetSearchTerm] = useState();

  // As soon as components load we need to fetch the data for that we will use useEffect 

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Avengers');
  }, [])
  return (
    <> 
      <div className="app">
        <h1>MovieFix</h1>
        <div className="search">
          <input 
            placeholder='Search for Movies'
            value={seacrhIerm}
            // e is the event
            onChange={(e)=> {SetSearchTerm(e.target.value)}}
          />

          <img 
            src={SearchIcon} 
            alt="search" 
            onClick={() => searchMovies(seacrhIerm)}
          />
        </div>
         
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      </div>

      <div className="myProfile">
      <Footer />
      </div>
    </>
  )
}

export default App
