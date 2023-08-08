const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (evt) => {
  const userName = evt.target.value;
  output.textContent = userName || "Anonymous";
});
