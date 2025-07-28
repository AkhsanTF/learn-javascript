const button = document.querySelector("button");
const img = document.querySelector("img");

button.addEventListener("click", (event) => {
  if (img.style.display === "none") {
    img.style.display = "block";
    button.textContent = "Hide";
  } else {
    img.style.display = "none";
    button.textContent = "Show";
  }
});
