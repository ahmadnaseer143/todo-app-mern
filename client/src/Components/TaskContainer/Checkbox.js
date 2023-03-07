import React from "react";
import "./checkbox.css";
const Checkbox = ({ task, handleCompletion }) => {
  return (
    <div className="group">
      <input
        id="inp"
        type="checkbox"
        checked={task?.completed}
        onChange={(e) => handleCompletion(e, task)}
      />
      <label htmlFor="inp" className="label"></label>
    </div>
  );
};

export default Checkbox;
