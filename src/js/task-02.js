const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//! this code i wrote before repeating the 6th block

// const allLi = [];

// ingredients.forEach((el) => {
//   const createLi = document.createElement("li");
//   createLi.textContent = el;
//   createLi.classList.add(".item")
//   allLi.push(createLi)
// });

// console.log(allLi)

// const ul = document.querySelector("#ingredients")
// ul.append(...allLi)

// console.log(ul)

// ? and this after

const newArr = ingredients
  .map((el) => {
    return `<li class = "item" >${el}</li>`;
  }).join(" ");

document.querySelector("#ingredients").innerHTML = newArr;
