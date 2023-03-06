const express = require("express");
const router = express.Router();
const Task = require("../model/tasks");

// get all tasks
router.get("/tasks", (req, res, next) => {
  Task.find({}, (err, result) => {
    if (err) return next(err);
    res.status(200).json(result);
  });
});

//  create a task in mongoose
router.post("/addtask", (req, res, next) => {
  // console.log(req.body);
  var newTask = new Task(req.body);
  newTask.save((err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(result);
  });
});

// update a task
router.put("/updatetask", (req, res, next) => {
  // we use new:true so that new updated object will be returned
  Task.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        completed: req.body.completed,
        completedTime: req.body.completedTime,
      },
    },
    { new: true },
    (err, result) => {
      if (err) return next(err);
      res.status(200).json(result);
    }
  );
});

//delete a task
router.delete("/removetask", (req, res, next) => {
  // console.log(req.body);
  Task.findOneAndDelete({ _id: req.body._id }, (err, result) => {
    if (err) return next(err);
    res.status(200).json(result);
  });
});

module.exports = router;
