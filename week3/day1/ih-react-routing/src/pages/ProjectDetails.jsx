import { Link, useParams } from "react-router-dom";

function ProjectDetails({ projectsData }) {
  const { projectId } = useParams();

  const singleProject = projectsData.find(project => project._id === projectId);
  // singleProject = {}
  // using filter singleProject = [{}]

  // const singleProject = await fetch('www.myDatabase.com/projects/${projectId}')

  return (
    <div>
      <h1>Project Details</h1>
      {!singleProject && <h3>Project not found</h3>}

      {singleProject && (
        <>
          <h1>{singleProject.name}</h1>
          <h3>Tech stack: {singleProject.technologies}</h3>
          <p>{singleProject.description}</p>
        </>
      )}

      <Link to="/projects">Back to project list</Link>
    </div>
  );
}

export default ProjectDetails;
