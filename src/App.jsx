import { useEffect, useState } from 'react'
import './App.css'
import Movie from './Movie'
import styled from 'styled-components'
import Movies from './Movies'

// const api_key = "901db35f3efa4901b6d101202222801"
// const query = "http://api.weatherapi.com/v1/forecast.json?key=901db35f3efa4901b6d101202222801&q=Paris&days=4&aqi=yes"

// movie database
// http://www.omdbapi.com/?i=tt3896198&apikey=64d40c11

const SearchBar = styled.form`
  font-size:1.5rem;
  padding:10px 0;
  & * {
    margin-right:10px;
    font-size:inherit;    
  }
  & input {
    font-size: 1.1rem;
    padding:.3em;
  }
  `

const Pagination = styled.div`
  padding:10px 0;
  & *{
    font-size:1rem;
    padding:10px;
    margin-right: 10px;
  }
`


function App() {
  const [movies, setMovies] = useState({})
  const [search, setSearch] = useState("")
  const [page, setPages] = useState(1)

  const handleNext = () => {
    setPages(page+1)
  }

  const handlePrev = () => {
    if(page <=1) return;
    setPages(page - 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      if(!search) return;

      console.log("fetch running");
      try {
        const resp = await fetch(`http://www.omdbapi.com/?s=${search}&page=${page}&apikey=64d40c11`)
        const data = await resp.json()
        if(!resp.Response){
          setMovies(data)
        }
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [search,page])

  return (
    <div className="container">
      <h1>Movie Database</h1>
      <SearchBar>
        <label htmlFor="search">Search</label>
        <input
          type="text" 
          id='search' 
          placeholder='Search ...' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBar>
      {search && <Movies movies={movies}/>}
      <Pagination>
        <button onClick={handlePrev}>Prev</button>
        <span>{page}</span>
        <button onClick={handleNext}>Next</button>
      </Pagination>
    </div>
  )
}

export default App
