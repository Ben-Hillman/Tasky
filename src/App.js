import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (taskIdToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <div className="app-container">
      <Sidebar addTask={addTask} />
      <div className="task-feed">
        {tasks.map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
