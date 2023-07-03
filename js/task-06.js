const input = document.querySelector("#validation-input");

const inputLenghtMax = Number(input.dataset.length);

function onInputHandler(event) {
  const lengthOfOutput = event.currentTarget.value.length;
  if (lengthOfOutput === inputLenghtMax) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    return input.classList.add("valid");
  }
  alert("please, write there only 6 symbols");
  input.classList.remove("valid");
  input.classList.add("invalid");
  return;
}

input.addEventListener("blur", onInputHandler);
