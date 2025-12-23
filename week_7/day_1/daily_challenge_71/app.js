const express = require('express'); // Import Express.js
const app = express();  // Create an Express app

app.use(express.json());  // Middleware to parse JSON request bodies

const quizRouter = require('./routes/quiz.js'); // Import quiz routes

app.use('/quiz', quizRouter); // Mount quiz routes at /quiz

// Error handler for server errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

// Handle invalid routes (404)
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = 3003;  // Set port for server
app.listen(PORT, () => {
    console.log(`Quiz running on port ${PORT}`);
});

