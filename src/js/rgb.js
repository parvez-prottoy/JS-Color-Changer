const colorBox = document.querySelector("#color");
const colorText = document.querySelector("#color p");
const generateBtn = document.querySelector("#btn-generate");
const copyBtn = document.querySelector("#btn-copy");

colorBox.style.backgroundColor = "rgb(0, 0, 0)";
colorText.textContent = "rgb(0, 0, 0)";
colorText.style.color = "white";

generateBtn.addEventListener("click", function () {
  copyBtn.textContent = "Copy RGB Color";
  const randomColor = generateRandomColor();
  colorBox.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
  colorText.style.color = "black";
});
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(colorText.textContent);
  copyBtn.textContent = "Copied ✅";
});
function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
