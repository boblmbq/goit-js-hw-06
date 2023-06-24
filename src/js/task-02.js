const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allLi = [];

ingredients.forEach((el) => {
  const createLi = document.createElement("li");
  createLi.textContent = el;
  createLi.classList.add(".item")
  allLi.push(createLi)
});

console.log(allLi)

const ul = document.querySelector("#ingredients")
ul.append(...allLi)

console.log(ul)
