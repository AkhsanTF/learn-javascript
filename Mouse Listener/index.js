const myBox = document.getElementById("myBox");

function changeColor(event) {
  event.target.style.backgroundColor = "hsl(0, 93%, 62%)";
  event.target.textContent = "OUCH! 🤕";
}
myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "hsl(0, 93%, 62%)";
  event.target.textContent = "OUCH! 🤕";
});
myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Dont do it 😨";
});
myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me! ☺️";
});
