import { useState } from "react";
import movieData from "../assets/movies.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";

function MovieList() {
  //movies is the original list, we can only add or delete
  const [movies, setMovies] = useState(movieData);
  const [showMovies, setShowMovies] = useState(movieData);

  const [show, setShow] = useState(true);

  const deleteMovie = id => {
    const filteredMovies = movies.filter(movie => id !== movie._id);
    setMovies(filteredMovies);
  };

  const addNewMovie = movie => {
    const updatedMovies = [movie, ...movies];
    setMovies(updatedMovies);
  };

  const searchedMovies = query => {
    //We filter the original movie state ...
    const filteredMovies = movies.filter(movie => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });

    // ... but we set the state only for the showMovies
    setShowMovies(filteredMovies);
  };

  const toggleVisibility = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={toggleVisibility}>
        {show ? "Hide" : "Show"} movies
      </button>
      <AddMovie addNewMovie={addNewMovie} />

      <SearchBar searchedMovies={searchedMovies} />

      {show &&
        showMovies.map(movie => {
          return (
            <MovieCard
              key={movie._id}
              movie={movie}
              deleteMovie={deleteMovie}
            />
          );
        })}
    </div>
  );
}

export default MovieList;
