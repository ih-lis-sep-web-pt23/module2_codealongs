import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    completed: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    completed: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    completed: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTask = id => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach(task => {
      if (task._id === id) {
        task.completed = !task.completed;

        /*  task.completed ? setTasksCompleted(tasksCompleted + 1) : setTasksCompleted(tasksCompleted - 1) */
        if (task.completed) setTasksCompleted(tasksCompleted + 1);
        else setTasksCompleted(tasksCompleted - 1);
      }
    });

    setTasks(tasksCopy);
  };

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className="todo-container">
        {tasks.map(task => (
          <Task
            key={task._id}
            toggleFunction={toggleTask}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
