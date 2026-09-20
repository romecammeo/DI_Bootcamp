const emojiDisplay = document.getElementById("emoji");
const optionsContainer = document.getElementById("options");
const guessForm = document.getElementById("guess-form");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");


async function loadGame() {
  const response = await fetch("/game");
  const game = await response.json();

  console.log(game);
}

emojiDisplay.textContent = game.emoji;
scoreDisplay.textContent = `Score: ${game.score}`;

optionsContainer.innerHTML = "";


guessForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const selected = document.querySelector(
    'input[name="guess"]:checked'
  );

  if (!selected) {
    feedback.textContent = "Choose an answer first.";
    return;
  }

  const response = await fetch("/guess", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      guess: selected.value
    })
  });

  const result = await response.json();

  feedback.textContent =
    result.correct ? "Correct!" : "Incorrect!";

  scoreDisplay.textContent = `Score: ${result.score}`;

  await loadGame();
});