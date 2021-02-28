import React from "react";
import Filter from "./Filter";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function Home(props) {
  const homeClick = () => {
    props.homeClick();
  };

  return (
    <div>
      <MovieForm movies={props.movies} updateMovies={props.updateMovies} />
      <Filter handleChange={props.handleChange} />
      <MovieList movies={props.searchResults} homeClick={homeClick} />
    </div>
  );
}
// <MovieForm movies={props.movies} updateMovies={props.updateMovies} />
//       <Filter handleChange={props.handleChange} />
export default Home;
