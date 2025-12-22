const express = require('express');
const app = express();

app.use(express.json());

const todosRouter = require('./routes/todos.js');

app.use('/todos', todosRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})