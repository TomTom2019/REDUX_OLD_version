import React from "react";
import { useDispatch, useSelector } from "react-redux";
// USEDISPATCH DISPACTCH ACTION
//USESELECTOR IS MAPSTATETOPROPS
import { movieData } from "../store/actions"; // IMPORT ACTION

const Movie = (props) => {
  const movies = useSelector((state) => state.movies); // MOVIES = movies:
  //USESELECTOR =  state.movies   STATE
  const dispatch = useDispatch();

  const getMovie = () => {
    dispatch(movieData()); // MOVIEDATA IS ACTION
  };

  console.log(movies);
  return (
    <>
      {movies && movies.movieData ? ( // SHOW DATA
        <div>
          <div>Name:{movies.movieData.name}</div>
          <div>Director:{movies.movieData.director}</div>
          <div>Year:{movies.movieData.year}</div>
        </div>
      ) : null}
      <button onClick={() => getMovie()}>Get movie</button>
    </>
  );
};

export default Movie;

// import React from 'react';  METHODE 1  NO HOOKS
// import { connect } from 'react-redux';

// const Movie = (props) => {

//     console.log(props)
//     return(
//         <>
//         Movie
//         </>
//     )
// }

// const mapStateToProps = (state) => { YOU GET DATA
//     return { movies: state.movies }
// }

// export default connect(mapStateToProps)(Movie);
