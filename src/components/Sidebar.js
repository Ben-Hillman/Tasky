import React from "react";
import "../styles/sidebar.css";

import TaskForm from "./TaskForm";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <i className="fa-solid fa-calendar-check"></i>
        <h1>Tasky</h1>
      </div>
      <hr />
      <TaskForm addTask={props.addTask} />
    </aside>
  );
}

export default Sidebar;
