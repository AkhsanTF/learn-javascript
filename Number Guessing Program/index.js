const minNum = 1;
const maxNum = 100;
const answer = Math.ceil(Math.random() * maxNum - minNum) + minNum;
const playBtn = document.getElementById(`playBtn`);
const p = document.getElementById(`p`);

let guess;
let attempts = 0;
let running = true;

function guessingNumber() {
  while (running) {
    guess = window.prompt(`Guess a number between ${minNum} to ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)) {
      window.alert(`Please enter a valid number!`);
    } else if (guess == 0) {
      window.alert(`Please enter a Number!`);
    } else if (guess < minNum || guess > maxNum) {
      window.alert(`Your number is NOT between ${minNum} to ${maxNum}`);
    } else {
      attempts++;
      if (guess < answer) {
        window.alert(`Your number is TOO LOW`);
      } else if (guess > answer) {
        window.alert(`Your number is TOO HIGH`);
      } else {
        window.alert(
          `CONGRATULATIONS the number was ${answer}, you took ${attempts} attempts`
        );
        running = false;
      }
    }
  }
}

guessingNumber();

playBtn.onclick = function () {
  running = true;
  guessingNumber();
};
