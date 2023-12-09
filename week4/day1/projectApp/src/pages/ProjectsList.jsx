import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects?_embed=tasks`);
      //console.log(response);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="ProjectList">
      <h1>Projects</h1>

      {/*  {projects.map(project => (
        <p key={project.id}>
          <div></div>
          {project.title}
        </p>
      ))} */}

      {projects.map(project => {
        return (
          <div
            key={project.id}
            className="ProjectCard card"
          >
            <Link to={`/projects/${project.id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;
