function MovieCard(props) {
  const createLabel = score => {
    if (score > 9) return <p className="green">{score}</p>;
    else if (score < 7) return <p className="red">{score}</p>;
    else return <p className="yellow">{score}</p>;
  };

  return (
    <div>
      <h3>{props.movie.title}</h3>
      <p>{props.movie.director}</p>
      {props.movie.hasOscars ? (
        <p>Won an Oscar!</p>
      ) : (
        <p>Great movie, but no Oscar!</p>
      )}

      {createLabel(props.movie.IMDBRating)}

      <button onClick={() => props.deleteMovie(props.movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
