const express = require("express");
const cors = require("cors");
const database = require("./src/database");
const rootRoute = require("./src/Routes/root");
const taskRoute = require("./src/Routes/tasks");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

// Use middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.LOCAL_SITE }));

// Database connection
database();

// Application routes
app.use("/", rootRoute);
app.use("/task", taskRoute);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
