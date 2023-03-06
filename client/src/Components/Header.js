import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
// import { MdExpandMore } from "react-icons/md";
import "./header.css";
const Header = ({ setTaskInput, addTask, taskInput }) => {
  return (
    <div className="add-task">
      <div className="menu-btn">
        <div className="menu-btn-line-horizontal"></div>
        <div className="menu-btn-line-horizontal"></div>
        <div className="menu-btn-line-horizontal"></div>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="To do today"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(taskInput);
            }
          }}
        />
      </div>
      <div className="header-btns">
        <AiOutlinePlusCircle
          className="down-arrow"
          onClick={() => addTask(taskInput)}
        />
      </div>
    </div>
  );
};

export default Header;
