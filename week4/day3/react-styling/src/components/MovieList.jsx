import { useState } from "react";
import movieData from "../assets/movies.json";

const MovieList = () => {
  const [movies, setMovies] = useState(movieData);

  return (
    <div className="m-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map(movie => (
          <div
            key={movie._id}
            className="flex items-center shadow-md rounded-md bg-gray-100 p-4 hover:shadow-lg hover:transition-shadow duration-300"
          >
            <img
              src="https://i.pinimg.com/originals/67/42/c8/6742c8271d7f88414f895ba8379f33df.jpg"
              alt="poster"
              className="max-w-[100px] rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl text-bold">{movie.title}</h2>
              <p className="text-gray-500">{movie.director}</p>

              <p
                className={movie.hasOscars ? "text-green-600" : "text-red-600"}
              >
                {movie.hasOscars ? "Great movie, won an oscar" : "Bad movie"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
