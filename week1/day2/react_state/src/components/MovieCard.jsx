function MovieCard(props) {
  return (
    <div>
      <h3>{props.movie.title}</h3>
      <p>{props.movie.director}</p>
      <p>{props.movie.IMDBRating}</p>
      <button onClick={() => props.deleteMovie(props.movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
