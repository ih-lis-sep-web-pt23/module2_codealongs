import { useState } from "react";
import movieData from "../assets/movies.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState(movieData);

  const deleteMovie = id => {
    const filteredMovies = movies.filter(movie => id !== movie._id);
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>

      {movies.map(movie => {
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
