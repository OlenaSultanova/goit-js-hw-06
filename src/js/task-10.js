const controlsContainer = document.getElementById("controls");
const boxesContainer = document.getElementById("boxes");
const createButton = controlsContainer.querySelector("[data-create]");
const destroyButton = controlsContainer.querySelector("[data-destroy]");
const input = controlsContainer.querySelector("input");

createButton.addEventListener("click", () => createBoxes(input.value));
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = color;

    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
