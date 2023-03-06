import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Options from "./Components/Options";
import Header from "./Components/Header";
import Checkbox from "./Components/Checkbox";
import bgImg from "./Images/man.avif";

function App() {
  const [tasks, setTasks] = useState();
  const [taskInput, setTaskInput] = useState("");

  const addTask = (taskInput) => {
    if (taskInput) {
      let time = new Date();
      axios
        .post("http://localhost:5000/api/addtask", {
          task: taskInput,
          completed: false,
          creationTime: time,
        })
        .then((res) => {
          console.log(res.data);
          setTasks([...tasks, res.data]);
          setTaskInput("");
        })
        .catch((err) => console.log(err));
    }
  };

  const removeTask = (taskId) => {
    axios
      .delete("http://localhost:5000/api/removetask", {
        data: {
          _id: taskId,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTasks(tasks.filter((t) => t._id !== res.data._id));
      })
      .catch((err) => console.log(err));
  };

  const handleCompletion = (e, task) => {
    // console.log(e.target.checked);
    let time = new Date();
    let myObj = {};

    // if user mark task completed then post completed time as well
    if (e.target.checked) {
      myObj = {
        _id: task._id,
        completed: e.target.checked,
        completedTime: time,
      };
    }
    // otherwise let completed time be empty
    else {
      myObj = {
        _id: task._id,
        completed: e.target.checked,
        completedTime: null,
      };
    }
    axios
      .put("http://localhost:5000/api/updatetask", myObj)
      .then((res) => {
        console.log(res.data);
        // now update tasks with the new obj
        setTasks(
          tasks.map((t) => {
            if (t._id === res.data._id) {
              t.completed = res.data.completed;
            }
            return t;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const fetchData = async () => {
    try {
      const dataObj = await axios.get("http://localhost:5000/api/tasks");
      // console.log(dataObj.data);
      setTasks(dataObj.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="background-cover"></div>
      <div className="content">
        <div className="avatar">
          <img src={bgImg} alt="AVATAR" />
        </div>
        <div className="tasks-container">
          <Header
            setTaskInput={setTaskInput}
            addTask={addTask}
            taskInput={taskInput}
          />
          <ul className="tasks">
            {tasks?.map((task, index) => (
              <>
                <li key={index} className="li-container">
                  <Checkbox task={task} handleCompletion={handleCompletion} />
                  <span>{task?.task}</span>
                  <Options removeTask={removeTask} task={task} />
                </li>
                <hr />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
