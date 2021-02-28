import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
// import MovieAdd from "./Components/MovieAdd";
import MovieForm from "./Components/MovieForm";
import MovieDetails from "./Components/MovieDetails";
import Home from "./Components/Home";

function App(props) {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "Bonnie and Clyde (1967)",
      rate: 7.2,
      trailerUrl: "https://youtu.be/SLC0omm3N98",
      posterUrl:
        "https://static01.nyt.com/images/2021/01/04/arts/00netflix-best-of-bonnie-and-clyde/merlin_9796950_839a6fa1-c96c-49c2-b52f-a8505158969c-jumbo.jpg?quality=90&auto=webp",
      description:
        "This here’s Miss Bonnie Parker. I’m Clyde Barrow. We rob banks.” With those simple but accurate words, the producer and star Warren Beatty helped kick off a whole new movement of subversive, challenging, youth-oriented moviemaking",
    },
    {
      id: 1,
      title: "Good Fellas (1990)",
      rate: 7.8,
      trailerUrl: "https://youtu.be/qo5jJpHtI1Y",
      posterUrl:
        "https://static01.nyt.com/images/2021/01/04/arts/00netflix-best-goodfellas/merlin_166320645_19274b44-23c9-4961-b7bd-da6729c92f2c-jumbo.jpg?quality=90&auto=webp",
      description:
        "Martin Scorsese tells the true story of Henry Hill, an average kid whose idolatry of the neighborhood gangsters made him an errand boy, then a low-level thief, then an architect of the 1978 Lufthansa heist — before he lost it all in a haze of drugs and deception",
    },
    {
      id: 2,
      title: "Fruitvale Station (2013)",
      rate: 8.3,
      trailerUrl: "https://youtu.be/TbnwyuQ03OE",
      posterUrl:
        "https://static01.nyt.com/images/2017/07/07/watching/fruitvale-station-watching/fruitvale-station-watching-jumbo-v2.jpg?quality=90&auto=webp",
      description:
        "Too many people only know Oscar Grant III because of the final moments of his life, in which he was shot to death by a Bay Area transit cop on a subway platform in the early hours of New Year’s Day, 2009 — a tragedy captured by the cameras of several passengers",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(movies);

  const handleChange = (searchVal) => {
    setSearchText(searchVal);
  };

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };
  const homeClick = () => {
    setSearchText("");
  };

  useEffect(() => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.rate.toString().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredMovies);
  }, [searchText, movies]);

  return (
    <main>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Home
              searchResults={searchResults}
              handleChange={handleChange}
              movies={movies}
              updateMovies={updateMovies}
              homeClick={homeClick}
              {...props}
            />
          )}
        />
        <Route path="/:indx">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
