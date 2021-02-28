import React, { useRef, useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const homeClick = () => {
    props.homeClick();
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <div className="card-deck">
          {props.movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} homeClick={homeClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
