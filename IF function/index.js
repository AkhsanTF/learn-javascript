const myInput = document.getElementById(`myInput`);
const myBtn = document.getElementById(`myBtn`);
const myResult = document.getElementById(`myResult`);

let age;

myBtn.onclick = function () {
  age = myInput.value;

  age = Number(age);

  check = myInput.value.trim();
  if (check === "") {
    if (age >= 100) {
      myResult.textContent = `You are TOO OLD cant enter.`;
    } else if (age == 0) {
      myResult.textContent = `Enter your age please.`;
    } else if (age < 0) {
      myResult.textContent = `Your age cant be below 0.`;
    } else if (age >= 18) {
      myResult.textContent = `You can enter the website.`;
    } else if (age < 18) {
      myResult.textContent = `You cant enter the website.`;
    }
  } else {
    myResult.textContent = `You are JUST BORN cant enter.`;
  }
};
