

///DAILY CHALLENGE
// 

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
    question: currentQuestion.question,
    progress: `${currentQuestionIndex + 1} of ${triviaQuestions.length}`
  });
});


router.post('/quiz', (req, res) => {

  const submittedAnswer = req.body.answer;

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (typeof submittedAnswer ===! 'string') {
    return res.status(400).json({
      message: "Please submit a valid answer bruh"
    });
  }

  const normalizedUserAnswer = submittedAnswer.trim().toLowerCase();
  const normalizedCorrectAnswer = currentQuestion.answer.trim().toLowerCase();


  const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

  if (isCorrect) {
    score++;
  }

  currentQuestionIndex++;

  const feedback = isCorrect ? "Correct!" : `Incorrect! The correct answer was: ${currentQuestion.answer}`;

  res.json({
    message: feedback,
    score: score
  });
});

router.get('/quiz', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: "Quiz complete",
      score
    });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  res.json({
    question: currentQuestion.question,
    progress: `${currentQuestionIndex + 1} of ${triviaQuestions.length}`
  });
});

router.post('/quiz/reset', (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.json({ message: "Quiz reset successfully!" });
});

module.exports = router;
