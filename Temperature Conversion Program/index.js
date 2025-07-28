// const submitBtn = document.getElementById("submitBtn");
const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const myH2 = document.getElementById("myH2");
let temp;

function one() {
  myH2.textContent = "You Selected Celsius to Fahrenheit";
}

function two() {
  myH2.textContent = "You Selected Fahrenheit to Celsius";
}
// function conversion() {
//   // console.log("test");
//   if (toFahrenheit.checked) {
//     temp = Number(textBox.value);
//     temp = (temp * 9) / 5 + 32;
//     myH2.textContent = temp + "°F";
//   } else if (toCelsius.checked) {
//     temp = Number(textBox.value);
//     temp = (temp - 32) * (5 / 9);
//     myH2.textContent = temp + "°C";
//   } else {
//     console.log("test");
//     myH2.textContent = "Select a Conversion First";
//   }
// }

submitBtn.onclick = function () {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    myH2.textContent = temp + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    myH2.textContent = temp + "°C";
  } else {
    console.log("test");
    myH2.textContent = "Select a Conversion First";
  }
};
