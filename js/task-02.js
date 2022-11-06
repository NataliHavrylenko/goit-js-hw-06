const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const storageEll = [];
const listEl = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  storageEll.push(itemEL);
});
listEl.append(...storageEll);