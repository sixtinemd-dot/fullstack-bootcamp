/**
 * Exercise 2 - Express app for To-Do List API
 * This file initializes the server and mounts routes for todos.
 */

const express = require('express');
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Import router for todos
const todosRouter = require('./routes/todos.js');

// Mount router at '/todos'
app.use('/todos', todosRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})