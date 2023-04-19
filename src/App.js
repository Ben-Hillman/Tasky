// import React, { useState } from "react";
// import "./App.css";

// import Sidebar from "./components/Sidebar";
// import Task from "./components/Task";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (newTask) => {
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };

//   const removeTask = (taskIdToRemove) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskIdToRemove));
//   };

//   return (
//     <div className="app-container">
//       <Sidebar addTask={addTask} />
//       <div className="task-feed">
//         {tasks.map((task) => (
//           <Task key={task.id} task={task} removeTask={removeTask} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      });
      return updatedTasks;
    });
    localStorage.setItem("task-" + updatedTask.id, JSON.stringify(updatedTask));
  };

  const removeTask = (taskIdToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskIdToRemove));
    localStorage.removeItem("task-" + taskIdToRemove);
  };

  useEffect(() => {
    const savedTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("task-")) {
        const task = JSON.parse(localStorage.getItem(key));
        savedTasks.push(task);
      }
    }
    setTasks(savedTasks.reverse());
  }, []);

  return (
    <div className="app-container">
      <Sidebar addTask={addTask} />
      <div className="task-feed">
        {tasks.map((task) => (
          <Task key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
