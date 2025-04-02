document.getElementById("generate-btn").addEventListener("click", function () {
  const minLength = parseInt(document.getElementById("min-length").value);
  const maxLength = parseInt(document.getElementById("max-length").value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeSpecial = document.getElementById("include-special").checked;

  if (
    isNaN(minLength) ||
    isNaN(maxLength) ||
    minLength < 1 ||
    maxLength < minLength
  ) {
    alert("Podaj poprawne wartości dla długości hasła.");
    return;
  }

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

  let allChars = lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeSpecial) allChars += specialChars;

  let password = "";
  const passwordLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  alert("Wygenerowane hasło: " + password);
});
