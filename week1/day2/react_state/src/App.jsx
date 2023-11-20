import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";
import ProjectList from "./components/ProjectList";
import MovieList from "./components/MovieList";

function App() {
  let [theme, setTheme] = useState("light");

  const toggleTheme = event => {
    setTheme(event.target.value);
    //theme = event.target.value; <- this will not update the state
    console.log(theme);
  };

  // App light  // App dark
  return (
    <div className={`App ${theme}`}>
      {/*       <select onChange={e => setTheme(e.target.value)}> */}
      <select onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {/* <Counter /> 
      <ProjectList />*/}
      <MovieList />
    </div>
  );
}

export default App;
