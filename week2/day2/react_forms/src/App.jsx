import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner";

function App() {
  let [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const toggleTheme = event => {
    setTheme(event.target.value);
    console.log(theme);
  };

  if (loading) return <Spinner />;

  return (
    <div className={`App ${theme}`}>
      <select onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <MovieList />
    </div>
  );
}

export default App;
