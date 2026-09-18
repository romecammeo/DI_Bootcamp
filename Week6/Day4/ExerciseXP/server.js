const express = require("express");
const app = express();

app.use(express.json());

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "Hello"
  }
];

app.get("/posts", (request, response) => {
  response.json(posts);
});
app.get("/posts/:id", (request, response) => {
  const id = Number(request.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) {
    return response.status(404).json({
      message: "Post not found"
    });
  }

  response.json(post);
});


app.post("/posts", (request, response) => {
  const newPost = {
    id: posts.length + 1,
    title: request.body.title,
    content: request.body.content
  };

  posts.push(newPost);

  response.status(201).json(newPost);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});