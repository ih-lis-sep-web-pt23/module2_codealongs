import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function AddTask({ projectId, getSingleProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      projectId = Number(projectId);

      const requestBody = { title, description, projectId };
      await axios.post(`${API_URL}/tasks`, requestBody);

      //"Refreshes" the page by going to the API and grabbing the updated information
      getSingleProject();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddTask">
      <h3>Add new Task</h3>

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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
