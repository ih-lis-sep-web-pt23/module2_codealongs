import { useState } from "react";
import movieData from "../assets/movies.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState(movieData);
  const [show, setShow] = useState(true);

  const deleteMovie = id => {
    const filteredMovies = movies.filter(movie => id !== movie._id);
    setMovies(filteredMovies);
  };

  const toggleVisibility = () => {
    /*    if(show){
      setShow(false)
    } else{
      setShow(true)
    } */
    setShow(!show);
    console.log(show);
  };

  return (
    <div>
      <h2>Movie List</h2>

      <button onClick={toggleVisibility}>
        {show ? "Hide" : "Show"} movies
      </button>

      {show &&
        movies.map(movie => {
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
