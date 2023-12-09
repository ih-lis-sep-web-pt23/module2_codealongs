import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function EditProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();

  const navigate = useNavigate();

  const getSingleProject = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects/${projectId}`);

      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async () => {
    try {
      await axios.delete(`${API_URL}/projects/${projectId}`);
      navigate("/projects");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProject();
  }, []);

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const requestBody = { title, description };

      await axios.put(`${API_URL}/projects/${projectId}`, requestBody);

      navigate(`/projects/${projectId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditProject">
      <h3>Edit Project</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Edit</button>
      </form>

      <button onClick={deleteProject}>Delete</button>
    </div>
  );
}

export default EditProject;
