const express = require('express');
const app = express();

app.use(express.json());

const quizRouter = require('./routes/quiz.js');

app.use('/', quizRouter);

app.listen(3000, 'localhost', () => {
  console.log('Server is running');
});