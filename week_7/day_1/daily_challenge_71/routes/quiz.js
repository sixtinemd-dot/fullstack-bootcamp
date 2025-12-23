const express = require('express'); // Import Express.js
const router = express.Router();    // Create a router for quiz routes

// Hard-coded trivia questions
const triviaQuestions = [
  { question: "What is the capital of Belgium?", answer: "Bruxelles" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// Simple in-memory state
let currentIndex = 0;
let score = 0;

// GET /quiz - start or continue quiz
router.get('/', (req, res) => {

    // Check if all questions have been answered
    if (currentIndex >= triviaQuestions.length) {
        return res.json({
        message: "Quiz finished! Check your score at /quiz/score",
    });
  }

    res.json({
        "question number": currentIndex + 1,
        question: triviaQuestions[currentIndex].question,
  });
});

// POST /quiz - submit answer
router.post('/', (req, res) => {
    const { answer } = req.body;

    if (currentIndex >= triviaQuestions.length) {
        return res.json({
        message: "Quiz finished! Check your score at /quiz/score",
        });
    }

    const correctAnswer = triviaQuestions[currentIndex].answer;

    let feedback;
    if (answer && answer.toLowerCase() === correctAnswer.toLowerCase()) {
        score += 1;
        feedback = "Correct!";
    } else {
        feedback = `Incorrect, the correct answer was: ${correctAnswer}`;
    }

    currentIndex += 1;

    if (currentIndex >= triviaQuestions.length) {
        return res.json({
        feedback,
        message: "Quiz finished! Check your score at /quiz/score",
        });
    }

    res.json({
        feedback,
        "next question number": currentIndex + 1,
        "next question": triviaQuestions[currentIndex].question,
    });
});

// GET /quiz/score - final score

router.get('/score', (req, res) => {
    res.json({
        score,
        "total questions": triviaQuestions.length,
        message: "Thanks for playing!",
    });

    // Reset quiz after showing score
    currentIndex = 0;
    score = 0;
});


// Export the router to be used in server.js
module.exports = router;

