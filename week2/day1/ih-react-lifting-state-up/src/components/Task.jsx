// src/components/Task.jsx

function Task(props) {
  const { task, toggleFunction } = props;

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{task.name}</h1>
        {task.completed ? <span>DONE </span> : <span>PENDING ⌛</span>}

        <h2>Task Description</h2>
        <p>{task.description}</p>

        <button
          className="add"
          onClick={() => toggleFunction(task._id)}
        >
          {task.completed ? <span>UNDO </span> : <span>✔️</span>}
        </button>
      </div>
    </div>
  );
}

export default Task;
