function passGenerator(
  lengthPassword,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}:<>?;-=[]";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (lengthPassword < 1) {
    return `(Your password must atleast be 1 character)`;
  }
  if (allowedChars.length === 0) {
    return `(Your must atleast choose 1 password type)`;
  }

  for (let i = 0; i < lengthPassword; i++) {
    const indexChars = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[indexChars];
  }
  return password;
}

submitBtn.onclick = function () {
  const lengthPassword = document.getElementById("lengthPassword").value;
  const includeLowerCase = document.getElementById("lowerCase").checked;
  const includeUpperCase = document.getElementById("upperCase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const generatedPassword = document.getElementById("generatedPassword");
  const submitBtn = document.getElementById("submitBtn");

  const password = passGenerator(
    lengthPassword,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
  generatedPassword.textContent = `Your Password is : ${password}`;
};
