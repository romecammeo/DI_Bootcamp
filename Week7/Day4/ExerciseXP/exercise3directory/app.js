const express = require('express');
const app = express();

app.use(express.json());

const booksRouter = require('./routerdirectory/books.js');

app.use('/books', booksRouter);

app.listen(3000, 'localhost', () => {
  console.log("Our Server is running");
});


