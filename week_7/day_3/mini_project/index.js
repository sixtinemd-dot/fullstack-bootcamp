// Import Express framework to create the HTTP server
const express = require('express');

// Import the tasks router that handles all /tasks routes
const tasksRouter = require('./routes/tasks.js');

// Create an Express application instance
const app = express();

// Define the port on which the server will run
const PORT = 3000;

// Enable middleware to parse incoming JSON request bodies
app.use(express.json());

// Mount the tasks router so all task routes are prefixed with /tasks
app.use("/tasks", tasksRouter);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

