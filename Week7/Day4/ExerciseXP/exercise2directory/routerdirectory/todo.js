const express = require('express');
const { todo } = require('node:test');
const router = express.Router();

const todos = [];


router.get('/', (request, response) =>{
  response.json(todos);
});

router.post('/', (request, response) => {
  const task = request.body.task;

  const newTodo = {
    id: todos.length + 1,
    task: task
  };

  todos.push(newTodo);

  response.status(201).json(newTodo);

});

module.exports = router;

router.put('/:id', (request, response) => {
  const id = Number(request.params.id)
    const task = request.body.task;
    const index = todos.findIndex(todo => todo.id === id);
  const updatedTodo = {
  id,
  task
};
 todos[index] = updatedTodo;

  response.status(200).json(updatedTodo);
});



router.delete('/:id', (request, response) => {
  const id = Number(request.params.id);
  const index = todos.findIndex(todo => todo.id === id);

todos.splice(index, 1)
  response.status(200).json("Delete successful");
});
