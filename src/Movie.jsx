import React from 'react'
import styled from 'styled-components'
import 'react-icons/ri'
import { RiGamepadLine, RiMovie2Line, RiMovieLine } from 'react-icons/ri'

const MovieCont = styled.div`

    width:100%;
    background-color: #032030;
    display:flex;
    gap:3em;
    margin-bottom:20px;
    border:1px solid rgb(123,123,123);
    padding:20px;
    & section {
        width:65%;
        color: #c0d4f6;
    }
    & img {
        height:220px;
        width: 190px;
        object-fit:cover;
        object-position:center;
    }
    & span, .icon {
        display:inline-block;
        margin-right: 10px;
    }

    & .details {
        display:flex;
    }
   
`

// {Title, Year, Type, Poster}
const Movie = ({ movie }) => {
    const { Title, Year, Type, Poster } = movie;

    function getIconByYear(type) {
        switch (type) {
          case "game":
            return <RiGamepadLine className='icon' color='#fdc007' size="20px"/>;
          case "movie":
            return <RiMovieLine className='icon' color='#fdc007' size="20px"/>;
          case "series":
            return <RiMovie2Line className='icon' color='#fdc007' size="20px"/>;
          default:
            return null;
        }
      }

    return (
        <MovieCont>
            <section>
                <h2 className="title">{Title}</h2>
                <div className="details">
                    {getIconByYear(Type)}                   
                    {/* {Year.endsWith("–") && console.log(`${Year} Present`)} */}
                    <span className="year">{Year.charCodeAt(Year.length - 1) === 150 ? `${Year.replace("/–$/", " - Present")}` : `${Year}`}</span>
                    <span className="type">{Type}</span>
                </div>
            </section>
            <div className='imageContainer'>
                <img src={Poster} alt="" />
            </div>
        </MovieCont>
    )
}

export default Movie