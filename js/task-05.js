const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

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
input.addEventListener("input", inpt);
