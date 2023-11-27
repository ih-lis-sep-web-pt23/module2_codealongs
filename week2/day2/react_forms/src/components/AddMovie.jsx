import { useState } from "react";

function AddMovie({ addNewMovie }) {
  // const {addNewMovie} = props

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(false);

  //Data down, actions up
  // Lifting the sate up

  // Handler functions
  const handleTitle = e => setTitle(e.target.value);
  const handleDirector = e => setDirector(e.target.value);
  const handleIMDBRating = e => setIMDBRating(e.target.value);
  const handleHasOscars = e => setHasOscars(e.target.checked);

  const handleSubmit = e => {
    //preventDefault is needed so the submit doesn't reload the page
    e.preventDefault();
    //console.log(title, director, IMDBRating, hasOscars);
    const newMovie = {
      _id: Math.random(),
      title,
      director,
      IMDBRating,
      hasOscars,
    };
    addNewMovie(newMovie);

    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(false);
  };

  return (
    <div>
      <h2>Add a movie</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitle}
          id="title"
          required
        />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={handleDirector}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          value={IMDBRating}
          onChange={handleIMDBRating}
          min={0}
          max={10}
          //step={0.1}
        />
        <label htmlFor="oscars">Oscars</label>
        <input
          type="checkbox"
          name="oscars"
          checked={hasOscars}
          onChange={handleHasOscars}
        />
        <button type="submit">Add a movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
