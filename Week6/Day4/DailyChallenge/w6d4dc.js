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

app.get("/game", (request, response) => {
  response.json({
    emoji: correctEmoji.emoji
  });
});

app.post("/guess", (request, response) => {
  if (request.body.guess === correctEmoji.name) {
    score += 1;

    response.json({
      correct: true,
      score: score
    });
  } else {
    response.json({
      correct: false,
      score: score
    });
  }
    chooseRandomEmoji();

});


app.get("/game", (request, response) => {
  const options = emojis.map(item => item.name);
  const sortedoption = options.sort(() => Math.random() - 0.5 )

  response.json({
    emoji: correctEmoji.emoji,
    options: options
  });
});
