const wordList = [
  'vis',
  'toeter',
  'developer',
  'telefoon',
  'moeder',
  'snoer',
  'geeuw'
];

const randomWordPicker = function() {
  let index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
};

let inputs;
const wordGuessed = function(word, inputs) {
  let remaining = word.filter(function(letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

const clean = function() {
  document.querySelector('input').value = '';
};

const winTheGame = function() {
  document.querySelector('.win').style.display = 'block';
  gameOver = true;
};

const loseTheGame = function() {
  document.querySelector('.lose').style.display = 'block';
  gameOver = true;
};

const spanTheWord1 = function(word) {
  document.querySelector('.lose p span').innerHTML = `"${word.join('')}"`;
};

const updateTriesDisplay = function(tries) {
  document.querySelector('.lives span').innerHTML = 5 - tries;
};

const letters = function(word, inputs) {
  let wrongLetters = inputs.filter(function(letter) {
    return !word.includes(letter);
  });
  document.querySelector('.guessed_letters').innerHTML = wrongLetters.join(' ');
};

const showWord = function(word, inputLetterWords) {
  let display = word.map(function(letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return '_';
    }
  });
  document.querySelector('.the_word').innerHTML = display.join(' ');
};

const guessLetter = function() {
  if (gameOver) {
    return;
  }
  const input1 = document.querySelector('input').value;
  document.querySelector('input').value = '';

  if (inputs.includes(input1) || input1 === '') {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    updateTriesDisplay(tries);
  }

  inputs.push(input1);
  showWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    loseTheGame();
  }
};

function beginTheGame() {
  gameOver = false;
  document.querySelector('.win').style.display = 'none';
  document.querySelector('.lose').style.display = 'none';
  document.querySelector('input').value = '';

  word = randomWordPicker(wordList).split('');

  tries = 0;
  document.querySelector('.lives span').innerHTML = 5;

  inputs = [];
  showWord(word, inputs);
  letters(word, inputs);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.guess').addEventListener('click', guessLetter);
  document.querySelector('.restart').addEventListener('click', beginTheGame);
  beginTheGame();
});
