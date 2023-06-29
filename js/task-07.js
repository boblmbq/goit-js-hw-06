// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і
// змінює інлайн - стиль span#text, оновлюючи
// властивість font - size.
// В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const refs = {
  input: document.getElementById("font-size-control"),
  spanText: document.getElementById("text"),
};

const { input, spanText } = refs;

input.addEventListener("input", onChangeInput);

function onChangeInput(e) {
  const currentValue = Number(e.currentTarget.value);
  console.dir(e.currentTarget);
  spanText.style.fontSize = `${currentValue}px`;
}
