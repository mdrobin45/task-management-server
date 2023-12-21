const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
   {
      title: { type: String, required: true },
      description: { type: String, required: true },
      dueDate: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

module.exports = taskSchema;
