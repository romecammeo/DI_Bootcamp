const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const { fetchPosts } = require("./dataService.js");


app.get("/posts", async (request, response) => {
    const fetchedData = await fetchPosts();
    response.json({ message: "Hello! data is ok bruh" });
});