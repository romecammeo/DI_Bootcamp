const express = require("express");
const { fetchPosts } = require("/.data/dataService.js");

const app = express();

app.get("/posts", async (request, response) => {
  const posts = await fetchPosts();

  response.json(posts);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});