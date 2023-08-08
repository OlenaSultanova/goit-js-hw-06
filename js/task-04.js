const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

decrement.addEventListener("click", onDecrementBtnClick);
increment.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue--;
  updateCounterValue();
}

function onIncrementBtnClick() {
  counterValue++;
  updateCounterValue();
}

let counterValue = 0;

function updateCounterValue() {
  value.textContent = counterValue;
}
