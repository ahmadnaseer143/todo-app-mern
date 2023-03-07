import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import "./options.css";
const Options = ({ removeTask, task }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="options-container" data-testid="options-container-test">
      {show ? (
        <RxCross1 className="menu-btn" onClick={handleClick} />
      ) : (
        <div className="menu-btn">
          <div className="menu-btn-line" onClick={handleClick}></div>
        </div>
      )}
      {show && (
        <BsTrash
          className="delete-btn"
          onClick={() => {
            setShow(false);
            removeTask(task._id);
          }}
        />
      )}
    </div>
  );
};

export default Options;
