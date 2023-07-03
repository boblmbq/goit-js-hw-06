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
