import React from "react";
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
  
  
  

  return (
    <div className="task-container">
      <div className="task-header">
        <h2>{task.name}</h2>
        <i className="fa-solid fa-xmark" onClick={handleRemoveClick}></i>
      </div>
      <span className="task-date">{formatDate(task.date)}</span>
      <hr />
      <p className="task-description">{task.description}</p>
    </div>
  );
}

export default Task;
