import { todayWord, lowerWordsArray } from "./words-array.js";

const wordLength = 5; //Total length of words
const flipAnimationTime = 500; //Duration of flip animation;
let numberOfGuesses = 0;

const boardGrid = document.querySelector("[data-guess-board]");
const keyboard = document.querySelector("[data-keyboard]");

startInteraction();

function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKey);
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKey);
}

//Interaction of user with keyboard created with HTML/CSS
function handleMouseClick({ target }) {
  if (target.matches("[data-key]")) {
    pressKey(target.dataset.key);
    return;
  }

  if (target.matches("[data-enter]")) {
    enterGuess();
    return;
  }

  if (target.matches("[data-delete]")) {
    deleteGuess();
    return;
  }
}

//Interaction of user with real keyboard
function handleKey({ key }) {
  if (key === "Enter") {
    enterGuess();
    return;
  }

  if (key === "Backspace" || key === "Delete") {
    deleteGuess();
    return;
  }

  if (key.match(/^[a-z]$/)) {
    pressKey(key);
    return;
  }
}

//After interaction, add a letter to board
function pressKey(key) {
  const activeLetter = getActiveLetter();
  if (activeLetter.length >= wordLength) return;

  const nextGuess = boardGrid.querySelector(":not([data-letter])"); //Select from board the tiles who still doesn't have letters
  nextGuess.dataset.letter = key.toLowerCase();
  nextGuess.innerText = key;
  nextGuess.dataset.state = "active";
}

//When press Enter, verify if tiles are fullfilled and word exists, if yes, check the letters
function enterGuess() {
  const activeLetter = Array.from(getActiveLetter());
  if (activeLetter.length !== wordLength) {
    Swal.fire({
      title: "Um erro ocorreu!",
      html: "Você precisa preencher todos os espaços.",
      icon: "warning",
    });
    return;
  }

  const guess = activeLetter.reduce((word, letter) => {
    return word + letter.dataset.letter;
  }, "");

  if (!lowerWordsArray.includes(guess)) {
    Swal.fire({
      title: "Um erro ocorreu!",
      html: "Essa palavra não existe em nosso banco de palavras.",
      icon: "warning",
    });
    return;
  }

  stopInteraction();
  numberOfGuesses++;
  activeLetter.forEach((...args) => flipLetter(...args, guess));
}

//Function to check if the respective letter matches the word
function flipLetter(tile, index, array, guess) {
  const letter = tile.dataset.letter;
  const key = keyboard.querySelector(`[data-key="${letter}"i]`);
  const guessLetters = [];
  let checkWord = todayWord;

  //Uses array from 'activeLetters' and create an object with respective letter and initial state as wrong, pushing to array 'guessLetters'
  array.forEach((letter) => {
    guessLetters.push({ letter: letter.dataset.letter, state: "wrong" });
  });

  //Letter correct = state correct
  guessLetters.forEach((guess, index) => {
    if (guess.letter === todayWord[index]) {
      guess.state = "correct";
      checkWord = checkWord.replace(guess.letter, "");
    }
  });

  //Letter correct in wrong place = state wrong-location
  guessLetters.forEach((guess) => {
    if (checkWord.includes(guess.letter) && guess.state != "correct") {
      guess.state = "wrong-location";
      checkWord = checkWord.replace(guess.letter, "");
    }
  });

  setTimeout(() => {
    tile.classList.add("flip-letter");
  }, (index * flipAnimationTime) / 2);

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip-letter");
      tile.dataset.state = guessLetters[index].state;
      key.classList.add(guessLetters[index].state);

      if (index === array.length - 1) {
        startInteraction();
        checkIfWins(guess);
      }
    },
    { once: true }
  );
}

//Check if user was capable of guess the right word of today
function checkIfWins(guess) {
  if (guess === todayWord) {
    Swal.fire({
      title: "Você acertou a palavra!",
      html: `Após ${numberOfGuesses} tentativa(s), você acertou a palavra que é <strong>${todayWord.toUpperCase()}</strong>`,
      icon: "success",
    });
    stopInteraction();
    return;
  }

  const remainingLetters = boardGrid.querySelectorAll(":not([data-letter])");

  if (remainingLetters.length === 0) {
    Swal.fire({
      title: "Você não conseguiu acertar!",
      html: `A palavra correta do dia é <strong>${todayWord.toUpperCase()}</strong>`,
      icon: "error",
    });
    stopInteraction();
    return;
  }
}

//Delete the last letter from board
function deleteGuess() {
  const activeLetter = getActiveLetter();
  const activeLetterLength = activeLetter.length;
  const lastLetter = activeLetter[activeLetterLength - 1];

  if (!lastLetter) return null;
  lastLetter.innerText = "";
  delete lastLetter.dataset.state;
  delete lastLetter.dataset.letter;
}

//Return all letters there are in board
function getActiveLetter() {
  return boardGrid.querySelectorAll("[data-state=active]");
}
