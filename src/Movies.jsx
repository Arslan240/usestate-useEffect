import React from 'react'
import styled from 'styled-components';
import Movie from './Movie';


const Movies = ({movies}) => {
    if(movies.Response === 'False') return;
    const {Search : moviesList} = movies;
    return (
        <>
            {moviesList?.map((movie) => {
                // console.log(movie)
                return (
                    <Movie movie={movie} key={movie.imdbID}/>
                )
            })}
        </>
  )
}

export default Movies