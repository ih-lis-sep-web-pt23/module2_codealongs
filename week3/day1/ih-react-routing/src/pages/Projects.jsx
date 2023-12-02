import { Link } from "react-router-dom";

function Projects({ projectsData }) {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map(project => {
        return (
          <div
            key={project._id}
            className="project"
          >
            <Link to={`/projects/${project._id}`}>
              <h3>{project.name}</h3>
            </Link>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
