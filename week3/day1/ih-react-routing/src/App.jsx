import "./App.css";
import projectsData from "./assets/projects.json";
//Routes will allow us to have individual Route components
import { Routes, Route } from "react-router-dom";
// SPA - Single Page Application
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import ProjectDetails from "./pages/ProjectDetails";
import Query from "./pages/Query";

//URL Params
//Query string
//search?type=hotel&country=pt

function App() {
  return (
    <>
      <Navbar />
      {/* Routes will wrap the individual Route component */}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/projects"
          element={<Projects projectsData={projectsData} />}
        />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails projectsData={projectsData} />}
        />
        <Route
          path="/search"
          element={<Query />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </>
  );
}

export default App;
