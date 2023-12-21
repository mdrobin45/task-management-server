const express = require("express");
const createTask = require("../Controllers/Task/createTask");

const taskRoute = express.Router();

taskRoute.post("/", createTask);

// Export route
module.exports = taskRoute;
