const express = require('express');
const router = express.Router();

const books = [];


router.get('/', (request, response) =>{
  response.json(books);
});


router.post('/', (request, response) => {
  const title = request.body.title;

  const newBook = {
    id: books.length + 1,
    title
  };

  books.push(newBook);

  response.status(201).json(newBook);
});


router.put('/:id', (request, response) => {
  const id = Number(request.params.id);
  const booktitle = request.body.title;

  const index = books.findIndex(book => book.id === id);

  const updatedBook = {
    id,
    title: booktitle
  };

  books[index] = updatedBook;

  response.status(200).json(updatedBook);
});

router.delete('/:id', (request, response) => {
  const id = Number(request.params.id);

  const index = books.findIndex(book => book.id === id);

  books.splice(index, 1);

  response.status(200).json("Delete successful");
});

module.exports = router;