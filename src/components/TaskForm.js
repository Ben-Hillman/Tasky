import React, { useState } from "react";
import "../styles/taskform.css";

function TaskForm(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length !== 0) {
      const task = { 
        id: Date.now(), 
        name, 
        date, 
        description 
      };
      props.addTask(task);
    }
    setName("");
    setDate("");
    setDescription("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label>Enter Task:</label>
      <input
        type="text"
        name="task"
        placeholder="ex: workout"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label>Enter Date:</label>
      <input 
        type="date" 
        name="date" 
        value={date} 
        onChange={handleDateChange} 
        required />
      <label>Add Description:</label>
      <textarea
        name="description"
        placeholder="ex: Workout for 1 hour before eating breakfast."
        value={description}
        onChange={handleDescriptionChange}
      />
      <button className="add-task-btn" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
