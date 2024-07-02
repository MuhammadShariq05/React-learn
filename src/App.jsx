import React from 'react'
import { useEffect } from 'react'
import './App.css';
import SeacrhIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=557d4875";

function App() {
  // As soon as components load we need to fetch the data for that we will use useEffect 

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}$s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('superman');
  }, [])
  return (
    <> 
      <div>
        <h1>App</h1>
      </div>
    </>
  )
}

export default App
