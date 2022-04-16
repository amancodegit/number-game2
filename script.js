'use strict';

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `🎉correct number`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
// document.querySelector(`.number`).textContent = secretnumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector(`.message`).textContent = `🚨 no number!`;
    displayMessage(`🚨 no number!`);
    // WHEN PLAYERS WIN
  } else if (guess === secretnumber) {
    // document.querySelector(`.message`).textContent = `🎉correct number`;
    displayMessage(`🎉correct number`);
    document.querySelector(`.number`).textContent = secretnumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }

  // when guess is different
  else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretnumber ? `🚀too high!` : `❄too low!`;
      displayMessage(guess > secretnumber ? `🚀too high!` : `❄too low!`);
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = `😫🤢you loss the game `;
      displayMessage(`😫🤢you loss the game `);
      document.querySelector(`.score`).textContent = 0;
    }
  }

  //   // WHEN GUESS IS TOO HIGH
  // } else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `🚀too high!`;
  //     score = score - 1;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `😫🤢you loss the game `;
  //   }

  //   // WHEN GUESS IS TOO LOW
  // } else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `❄too low!`;
  //     score = score - 1;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `😫🤢you loss the game `;
  //   }
  // }
});

// FOR MAKE GAME RESTORED BY CLICKING AGAIN BUTTON!
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.number`).textContent = `?`;

  // document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);

  document.querySelector(`.guess`).value = '';

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
