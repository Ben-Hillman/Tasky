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

import React, { useEffect } from "react";
import "../styles/task.css";

function Task(props) {
  const { task, removeTask } = props;

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

  return (
    <div className="task-container">
      <div className="task-header">
        <h2 contentEditable="true">{task.name}</h2>
        <i className="fa-solid fa-xmark" onClick={handleRemoveClick}></i>
      </div>
      <span className="task-date" contentEditable="true">{formatDate(task.date)}</span>
      <hr />
      <pre className="task-description" contentEditable="true">{task.description}</pre>
    </div>
  );
}

export default Task;
