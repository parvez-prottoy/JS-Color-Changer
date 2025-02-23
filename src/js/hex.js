const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorBox = document.querySelector("#color");
const colorText = document.querySelector("#color p");
const generateBtn = document.querySelector("#btn-generate");
const copyBtn = document.querySelector("#btn-copy");

colorBox.style.backgroundColor = "#F1F1F1";
colorText.textContent = "#F1F1F1";
generateBtn.addEventListener("click", function () {
  copyBtn.textContent = "Copy HEX Color";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colorBox.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;
});
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(colorText.textContent);
  copyBtn.textContent = "Copied ✅";
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
