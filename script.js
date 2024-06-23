const easyQuestions = [
  {
    question: 'Who won the FIFA World Cup in 2018?',
    answers: [
      { text: 'Brazil', correct: false },
      { text: 'Germany', correct: false },
      { text: 'France', correct: true },
      { text: 'Argentina', correct: false },
    ],
  },
  {
    question: 'Which player has won the most Ballon d\'Or awards?',
    answers: [
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'Michel Platini', correct: false },
      { text: 'Johan Cruyff', correct: false },
    ],
  },
  // Add 48 more easy questions here
  // Example format:
  {
    question: 'Which country has won the most FIFA World Cup titles?',
    answers: [
      { text: 'Germany', correct: false },
      { text: 'Italy', correct: false },
      { text: 'Brazil', correct: true },
      { text: 'Argentina', correct: false },
    ],
  },
  {
    question: 'Who is the all-time top scorer in the UEFA Champions League?',
    answers: [
      { text: 'Raúl', correct: false },
      { text: 'Robert Lewandowski', correct: false },
      { text: 'Cristiano Ronaldo', correct: true },
      { text: 'Lionel Messi', correct: false },
    ],
  },
  {
    question: 'Which country hosted the 2014 FIFA World Cup?',
    answers: [
      { text: 'Brazil', correct: true },
      { text: 'Russia', correct: false },
      { text: 'South Africa', correct: false },
      { text: 'Germany', correct: false },
    ],
  },
  {
    question: 'Who won the Golden Boot in the 2018 FIFA World Cup?',
    answers: [
      { text: 'Lionel Messi', correct: false },
      { text: 'Harry Kane', correct: true },
      { text: 'Antoine Griezmann', correct: false },
      { text: 'Romelu Lukaku', correct: false },
    ],
  },
  {
    question: 'Which team won the UEFA Champions League in 2019?',
    answers: [
      { text: 'Barcelona', correct: false },
      { text: 'Liverpool', correct: true },
      { text: 'Real Madrid', correct: false },
      { text: 'Bayern Munich', correct: false },
    ],
  },
  {
    question: 'Who is known as "The King of Football"?',
    answers: [
      { text: 'Diego Maradona', correct: false },
      { text: 'Pele', correct: true },
      { text: 'Zinedine Zidane', correct: false },
      { text: 'Lionel Messi', correct: false },
    ],
  },
  {
    question: 'Which club has won the most Premier League titles?',
    answers: [
      { text: 'Chelsea', correct: false },
      { text: 'Manchester United', correct: true },
      { text: 'Arsenal', correct: false },
      { text: 'Liverpool', correct: false },
    ],
  },
  {
    question: 'Who won the Ballon d\'Or in 2019?',
    answers: [
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'Virgil van Dijk', correct: false },
      { text: 'Luka Modric', correct: false },
    ],
  },
];

const hardQuestions = [
  {
    question: 'Which club won the first-ever UEFA Champions League in 1992-1993?',
    answers: [
      { text: 'AC Milan', correct: false },
      { text: 'Barcelona', correct: false },
      { text: 'Marseille', correct: true },
      { text: 'Real Madrid', correct: false },
    ],
  },
  {
    question: 'Who scored the fastest goal in Premier League history?',
    answers: [
      { text: 'Alan Shearer', correct: false },
      { text: 'Sadio Mane', correct: false },
      { text: 'Shane Long', correct: true },
      { text: 'Thierry Henry', correct: false },
    ],
  },
  // Add 48 more hard questions here
  // Example format:
  {
    question: 'Which player holds the record for most goals in a calendar year?',
    answers: [
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'Gerd Muller', correct: false },
      { text: 'Zlatan Ibrahimovic', correct: false },
    ],
  },
  {
    question: 'Which country won the first-ever World Cup in 1930?',
    answers: [
      { text: 'Argentina', correct: false },
      { text: 'Uruguay', correct: true },
      { text: 'Brazil', correct: false },
      { text: 'Italy', correct: false },
    ],
  },
  {
    question: 'Which player has the most assists in the Premier League?',
    answers: [
      { text: 'Cesc Fabregas', correct: false },
      { text: 'Frank Lampard', correct: false },
      { text: 'Ryan Giggs', correct: true },
      { text: 'Wayne Rooney', correct: false },
    ],
  },
  {
    question: 'Which club has won the most La Liga titles?',
    answers: [
      { text: 'Barcelona', correct: false },
      { text: 'Real Madrid', correct: true },
      { text: 'Atletico Madrid', correct: false },
      { text: 'Valencia', correct: false },
    ],
  },
  {
    question: 'Who is the youngest player to score in a World Cup?',
    answers: [
      { text: 'Pelé', correct: true },
      { text: 'Lionel Messi', correct: false },
      { text: 'Michael Owen', correct: false },
      { text: 'Kylian Mbappé', correct: false },
    ],
  },
  {
    question: 'Which player has won the most Champions League titles?',
    answers: [
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Lionel Messi', correct: false },
      { text: 'Paco Gento', correct: true },
      { text: 'Andres Iniesta', correct: false },
    ],
  },
  {
    question: 'Which club has won the most FA Cup titles?',
    answers: [
      { text: 'Arsenal', correct: true },
      { text: 'Manchester United', correct: false },
      { text: 'Liverpool', correct: false },
      { text: 'Chelsea', correct: false },
    ],
  },
  {
    question: 'Who scored the "Hand of God" goal?',
    answers: [
      { text: 'Diego Maradona', correct: true },
      { text: 'Pelé', correct: false },
      { text: 'Zinedine Zidane', correct: false },
      { text: 'Lionel Messi', correct: false },
    ],
  },
];

const startContainer = document.getElementById('start-container');
const easyButton = document.getElementById('easy-button');
const hardButton = document.getElementById('hard-button');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const currentQuestionElement = document.getElementById('current-question');
const resultsContainer = document.getElementById('results');

let shuffledQuestions, currentQuestionIndex, score, selectedAnswers;

easyButton.addEventListener('click', () => startGame('easy'));
hardButton.addEventListener('click', () => startGame('hard'));
restartButton.addEventListener('click', () => location.reload());

function startGame(difficulty) {
  startContainer.classList.add('hide');
  quizContainer.classList.remove('hide');
  shuffledQuestions = shuffleArray(difficulty === 'easy' ? easyQuestions : hardQuestions).slice(0, 10);
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = [];
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  updateProgress();
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';
  selectedAnswers.push({
    question: shuffledQuestions[currentQuestionIndex].question,
    selected: selectedButton.innerText,
    correctAnswer: shuffledQuestions[currentQuestionIndex].answers.find(a => a.correct).text,
    isCorrect: correct
  });
  if (correct) {
    score++;
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setNextQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.classList.add('hide');
  scoreContainer.classList.remove('hide');
  scoreElement.innerText = score;
  displayResults();
}

function updateProgress() {
  currentQuestionElement.innerText = currentQuestionIndex + 1;
}

function displayResults() {
  resultsContainer.innerHTML = selectedAnswers.map(answer => `
    <div>
      <h3>${answer.question}</h3>
      <p>Your Answer: ${answer.selected}</p>
      <p>Correct Answer: ${answer.correctAnswer}</p>
      <p class="${answer.isCorrect ? 'correct-text' : 'wrong-text'}">${answer.isCorrect ? 'Correct' : 'Wrong'}</p>
    </div>
  `).join('');
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
