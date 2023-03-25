import React from "react";
import "../styles/sidebar.css";

import TaskForm from "./TaskForm";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-left">
          <i className="fa-solid fa-calendar-check"></i>
          <h1>Tasky</h1>
        </div>
        <form className="color-picker">
        <input className="color-switch" type="checkbox" />
        <div className="sun">
          <div className="sun-line deg0"></div>
          <div className="sun-line deg45"></div>
          <div className="sun-line deg90"></div>
          <div className="sun-line deg135"></div>
        </div>
        <div className="moon">
          <div className="moon-inner-circle"></div>
        </div>
      </form>
      </div>
      <hr />
      <TaskForm addTask={props.addTask} />
    </aside>
  );
}

export default Sidebar;
