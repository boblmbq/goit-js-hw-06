// Напиши скрипт, який під час набору тексту в
// інпуті input#name - input(подія input),
//  підставляє його поточне значення в span#name
// - output.Якщо інпут порожній, у спані повинен
//  відображатися рядок "Anonymous".

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

// ! more better but not enought
function inpt(event) {
  if (event.data === " " && event.currentTarget.value === " ") {
    return (output.textContent = event.currentTarget.value);
  } else if (event.data === " " || event.currentTarget.value === " ") {
    return (output.textContent = "Anonymous");
  } else if (event.currentTarget.value === "") {
    return (output.textContent = "Anonymous");
  } else if (event.data === null) {
    return (output.textContent = event.currentTarget.value);
  }
  output.textContent = event.currentTarget.value;
}

// function inpt(event) {
//   if (event.currentTarget.value !== "") {
//     output.textContent = event.currentTarget.value;
//   } else {
//     output.textContent = "Anonymous";
//   }
// }

input.addEventListener("input", inpt);
