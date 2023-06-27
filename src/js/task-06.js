// Напиши скрипт, який під час втрати фокусу на
// інпуті(подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи
// valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");

const inputLenghtMax = Number(input.dataset.length);

function onInputHandler(event) {
  const lengthOfOutput = event.currentTarget.value.length;
  if (lengthOfOutput === inputLenghtMax) {
    return input.classList.add("valid");
  }
  alert("please, write there only 6 symbols");
  return input.classList.add("invalid");
}

input.addEventListener("blur", onInputHandler);
