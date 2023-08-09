const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
const createFragmentIngredients = document.createElement("ul");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  createFragmentIngredients.appendChild(li);
  ul.appendChild(createFragmentIngredients);
});
