//exercice 1

const express = require('express');
const app = express();

const indexRouter = require('./routes');

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});