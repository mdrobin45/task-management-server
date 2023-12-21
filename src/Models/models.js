const mongoose = require("mongoose");
const taskSchema = require("../Schemas/taskSchema");

const TaskModel = mongoose.model("TaskList", taskSchema);

// Export model
module.exports = { TaskModel };
