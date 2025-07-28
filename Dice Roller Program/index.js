function diceRoller() {
  const numInput = document.getElementById("numInput");
  const result = document.getElementById("result");
  const imgResult = document.getElementById("imgResult");
  const btn = document.getElementById("btn");
  const values = [];
  const images = [];

  for (let i = 0; i < numInput.value; i++) {
    const roll = Math.ceil(Math.random() * 6);
    values.push(roll);
    images.push(`<img src="images/dice${roll}.png" alt="Dice ${roll}">`);
  }

  // console.log(values);
  result.textContent = `Dice :${values.join(`, `)}`;
  imgResult.innerHTML = images.join(" ");
}

// btn.onclick = diceRoller;
