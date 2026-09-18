const express = require("express");
const app = express();
app.use(express.json());
const books = [
  {
    id: 5,
    title: "Rome vs. Judea: Both Sides of the Story",
    author: "Steve Weizman",
    publishedYear: 2024
  },

  
  {
    id: 7,
    title: "Gattaca",
    author: "Andrew Niccol",
    publishedYear: 1997
  },

];



app.get("/api/books", (request, response) => {
  response.json(books);
});




app.listen(5000, () => {
  console.log("Server running on port 5000");
});


app.get("/api/books/:bookid", (request, response) => {
const id = Number (request.params.bookid)
 const book = books.find(book => book.id === id);
  response.json(book)
});


app.post("/api/books", (request, response) => {
    const newId = Math.max(...books.map(book => book.id)) + 1;
    const newbook = {
        id:newId,
     title: request.body.title,
    author: request.body.author,
    publishedYear: request.body.publishedYear
  };
  books.push(newBook);

response.status(201).json(newBook);
    });
