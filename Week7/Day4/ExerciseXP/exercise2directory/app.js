
///exercise 2

const express = require('express');
const app = express();

app.use(express.json());

const todoRouter = require('./routerdirectory/todo.js');

app.use('/todos', todoRouter)

app.listen(3000, 'localhost' , () => {
     console.log("Our Server is running")
}); 