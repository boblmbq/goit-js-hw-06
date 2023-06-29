const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
const spanEl = document.querySelector("#value");

function increase() {
  spanEl.innerHTML = Number(spanEl.innerHTML) + 1;
  return spanEl.innerHTML;
}
function decrement() {
  spanEl.innerHTML = Number(spanEl.innerHTML) - 1;
  return spanEl.innerHTML;
}

//! more, but not really, specificated to the buttons input

// function increase() {
//   spanEl.innerHTML =
//     Number(spanEl.innerHTML) + Number(Array.from(btnIncrement.textContent)[1]);
//   return spanEl.innerHTML;
// }
// function decrement() {
//   spanEl.innerHTML =
//     Number(spanEl.innerHTML) - Number(Array.from(btnDecrement.textContent)[1]);
//   return spanEl.innerHTML;
// }

btnIncrement.addEventListener("click", increase);
btnDecrement.addEventListener("click", decrement);
