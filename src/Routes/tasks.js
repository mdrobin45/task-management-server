const express = require("express");
const createTask = require("../Controllers/Task/createTask");
const getAllTask = require("../Controllers/Task/getAllTask");
const deleteTask = require("../Controllers/Task/deleteTask");

const taskRoute = express.Router();
// Get all task
taskRoute.get("/", getAllTask);

// Create new task
taskRoute.post("/", createTask);

// Delete task
taskRoute.delete("/:id", deleteTask);

// Export route
module.exports = taskRoute;
