const express = require("express");
const app = express();

app.use(express.json());

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" }
];

let score = 0;
let correctEmoji;

function chooseRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  correctEmoji = emojis[randomIndex];
}

chooseRandomEmoji();

app.get("/game", (request, response) => {
  const options = emojis.map(item => item.name);

  options.sort(() => Math.random() - 0.5);

  response.json({
    emoji: correctEmoji.emoji,
    options: options,
    score: score
  });
});

app.post("/guess", (request, response) => {
  const guess = request.body.guess;

  const isCorrect = guess === correctEmoji.name;

  if (isCorrect) {
    score += 1;
  }

  response.json({
    correct: isCorrect,
    score: score
  });

  chooseRandomEmoji();
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


app.use(express.static("public"));