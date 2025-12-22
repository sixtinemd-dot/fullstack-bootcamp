/**
 * Exercise 1 - Routes for homepage and about page
 * Mounted in app.js at '/'
 */

const express = require('express');
const router = express.Router();

// GET homepage
router.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

// GET about page
router.get('/about', (req, res) => {
  res.send('About us page');
});

module.exports = router;