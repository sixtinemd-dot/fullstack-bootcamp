//exercice 1

const express = require('express');
const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

// Basic error handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});