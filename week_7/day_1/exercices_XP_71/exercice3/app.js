const express = require('express');
const app = express();

app.use(express.json());

const bookRouter = require('./routes/books.js');

app.use('/books', bookRouter);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
