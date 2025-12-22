/**
 * Exercise 3 - Express app for Book Management API
 * This file initializes the server and mounts routes for books.
 * Author: Your Name
 */

const express = require('express');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Import router for books
const bookRouter = require('./routes/books.js');


// Mount router at '/books'
app.use('/books', bookRouter);


// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})