// Напиши скрипт, який змінює кольори фону
// елемента < body > через інлайн - стиль по
// кліку на button.change - color і виводить
// значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

function onClickBtn() {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

btn.addEventListener("click", onClickBtn)