import { useState } from "react";
import "./App.css";

//import Counter from "./components/Counter";
//import ProjectList from "./components/ProjectList";
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
    //theme = event.target.value; <- this will not update the state
    console.log(theme);
  };

  /*  
 if we need to do something else other than a return inside an if statement, wee need the curly brackets
 if (loading){
    console.log("")
    return <Spinner/>
  } 
  otherwise we can use the short form
  */

  if (loading) return <Spinner />;

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
