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

btnIncrement.addEventListener("click", increase);
btnDecrement.addEventListener("click", decrement);
