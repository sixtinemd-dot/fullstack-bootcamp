//exercice 1
/**
 * Exercise 1 - Express app for homepage and about page
 * This file initializes the Express server.
 * Routes are defined in routes/index.js and mounted at '/'
 */

const express = require('express');
const app = express();

// Import the router for Exercise 1
const indexRouter = require('./routes/index');

// Middleware for JSON parsing (for future POST/PUT requests)
app.use('/', indexRouter);

// Basic error handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});