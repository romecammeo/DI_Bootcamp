const express = require('express');
const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;


router.get('/quiz', (req, res) => {
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  res.json({
    question: currentQuestion.question
  });
});

router.post('/quiz', (req, res) => {
const submittedAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[currentQuestionIndex];
  if (submittedAnswer === currentQuestion.answer) {
  score++;
}
  currentQuestionIndex++;

const feedback = subhmittedAnswer === currentQuestion.answer? "Correct!" : "incorrect!"
res.json({
  message: feedback,
  score
});
});


module.exports = router