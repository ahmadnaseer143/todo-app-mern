var mongoose = require("mongoose");

//Define a schema
var taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
  completedTime: {
    type: Date,
    default: null,
  },
  creationTime: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("task", taskSchema);
