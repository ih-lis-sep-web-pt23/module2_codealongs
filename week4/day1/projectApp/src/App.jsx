import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsList from "./pages/ProjectsList";
import CreateProject from "./pages/CreateProject";
import ProjectDetails from "./pages/ProjectDetails";
import EditProject from "./pages/EditProject";

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
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />
        <Route
          path="/projects/edit/:projectId"
          element={<EditProject />}
        />
      </Routes>
    </div>
  );
}

export default App;
