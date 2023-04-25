// import React from "react";
// import "../styles/task.css";

// function Task(props) {
//   const { task, removeTask } = props;

//   const handleRemoveClick = () => {
//     removeTask(task.id);
//   };

//   const formatDate = (date) => {
//     const options = {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       timeZone: "UTC"
//     };
//     return new Date(date).toLocaleDateString(undefined, options);
//   };
  
  
  

//   return (
//     <div className="task-container">
//       <div className="task-header">
//         <h2 contentEditable="true">{task.name}</h2>
//         <i className="fa-solid fa-xmark" onClick={handleRemoveClick}></i>
//       </div>
//       <span className="task-date" contentEditable="true">{formatDate(task.date)}</span>
//       <hr />
//       <pre className="task-description" contentEditable="true">{task.description}</pre>
//     </div>
//   );
// }

// export default Task;

// import React, { useEffect } from "react";
// import "../styles/task.css";

// function Task(props) {
//   const { task, removeTask } = props;

import React, { useState, useEffect } from "react";
import "../styles/task.css";

function Task(props) {
  const { task, removeTask, updateTask } = props;
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);
  const [description, setDescription] = useState(task.description);

  const handleRemoveClick = () => {
    removeTask(task.id);
  };

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  // Save the task to local storage when it changes
  useEffect(() => {
    localStorage.setItem("task-" + task.id, JSON.stringify(task));
  }, [task]);

  const handleNameChange = (event) => {
    setName(event.target.textContent);
  };

  const handleDateChange = (event) => {
    setDate(event.target.textContent);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.textContent);
  };

  const handleBlur = () => {
    const updatedTask = {
      id: task.id,
      name,
      date,
      description,
    };
    updateTask(updatedTask);
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <h2 contentEditable="true" onBlur={handleBlur} onInput={handleNameChange}>{task.name}</h2>
        <i className="fa-solid fa-xmark" onClick={handleRemoveClick}></i>
      </div>
      <span className="task-date" contentEditable="true" onBlur={handleBlur} onInput={handleDateChange}>{formatDate(task.date)}</span>
      <hr />
      <pre className="task-description" contentEditable="true" onBlur={handleBlur} onInput={handleDescriptionChange}>{task.description}</pre>
    </div>
  );
}

export default Task;
