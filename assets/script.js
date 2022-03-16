import { correctWord, lowerWordsArray } from "./words-array.js";

console.log(lowerWordsArray.length);

const wordLength = 5;
const flipAnimationTime = 500;

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

function pressKey(key) {
  const activeLetter = getActiveLetter();
  if (activeLetter.length >= wordLength) return;

  const nextGuess = boardGrid.querySelector(":not([data-letter])");
  nextGuess.dataset.letter = key.toLowerCase();
  nextGuess.innerText = key;
  nextGuess.dataset.state = "active";
}

function enterGuess() {
  const activeLetter = Array.from(getActiveLetter());
  if (activeLetter.length !== wordLength) {
    swal({
      title: "Um erro ocorreu!",
      text: "Você precisa preencher todos os espaços.",
      icon: "warning",
    });
    return;
  }

  const guess = activeLetter.reduce((word, letter) => {
    return word + letter.dataset.letter;
  }, "");

  if (!lowerWordsArray.includes(guess)) {
    swal({
      title: "Um erro ocorreu!",
      text: "Essa palavra não existe no dicionário.",
      icon: "warning",
    });
    return;
  }

  stopInteraction();
  activeLetter.forEach((...args) => flipLetter(...args, guess));
}

function flipLetter(tile, index, array, guess) {
  const letter = tile.dataset.letter;
  const key = keyboard.querySelector(`[data-key="${letter}"i]`);

  setTimeout(() => {
    tile.classList.add("flip-letter");
  }, (index * flipAnimationTime) / 2);

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip-letter");

      if (correctWord[index] === letter) {
        tile.dataset.state = "correct";
        key.classList.add("correct");
      } else if (correctWord.includes(letter)) {
        tile.dataset.state = "wrong-location";
        key.classList.add("wrong-location");
      } else {
        tile.dataset.state = "wrong";
        key.classList.add("wrong");
      }

      if (index === array.length - 1) {
        startInteraction();
        checkIfWins(guess);
      }
    },
    { once: true }
  );
}

function checkIfWins(guess) {
  if (guess === correctWord) {
    swal({
      title: "Você acertou a palavra do dia!",
      text: `Após 4 tentativas, você acertou a palavra que era ${correctWord.toUpperCase()}`,
      icon: "success",
    });
    stopInteraction();
    return;
  }

  const remainingLetters = boardGrid.querySelectorAll(":not([data-letter])");

  if (remainingLetters.length === 0) {
    swal({
      title: "Você não conseguiu acertar!",
      text: `A palavra correta do dia era ${correctWord.toUpperCase()}`,
      icon: "error",
    });
    stopInteraction();
    return;
  }
}

function deleteGuess() {
  const activeLetter = getActiveLetter();
  const activeLetterLength = activeLetter.length;
  const lastLetter = activeLetter[activeLetterLength - 1];

  if (!lastLetter) return null;
  lastLetter.innerText = "";
  delete lastLetter.dataset.state;
  delete lastLetter.dataset.letter;
}

function getActiveLetter() {
  return boardGrid.querySelectorAll("[data-state=active]");
}
