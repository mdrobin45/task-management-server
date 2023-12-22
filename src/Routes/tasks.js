const express = require("express");
const createTask = require("../Controllers/Task/createTask");
const getAllTask = require("../Controllers/Task/getAllTask");

const taskRoute = express.Router();
// Get all task
taskRoute.get("/", getAllTask);

// Create new task
taskRoute.post("/", createTask);

// Export route
module.exports = taskRoute;
