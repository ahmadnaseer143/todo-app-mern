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
  completedTime: Date,
  creationTime: Date,
});

module.exports = Book = mongoose.model("task", taskSchema);
