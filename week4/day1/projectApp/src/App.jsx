import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsList from "./pages/ProjectsList";
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/projects"
          element={<ProjectsList />}
        />
        <Route
          path="/projects/create"
          element={<CreateProject />}
        />
      </Routes>
    </div>
  );
}

export default App;
