document.body.style.backgroundColor = "black";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input[type=number]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  btnCreate: document.querySelector("button[data-create]"),
  div: document.getElementById("boxes"),
};
const { input, btnDestroy, btnCreate, div } = refs;

const inputMin = Number(input.min);
const inputMax = Number(input.max);

btnDestroy.addEventListener("click", () => {
  div.innerHTML = "";
});

function createBoxes(amount) {
  if (amount < inputMin || amount > inputMax) {
    alert(
      `${amount} is not in limit. The limit is from ${inputMin} to ${inputMax}`
    );
    input.value = "";
    return;
  }

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    boxes.push(divEl);
  }
  div.append(...boxes);
}

const onCreateClick = () => {
  const lol = Number(input.value);
  createBoxes(lol);
};

btnCreate.addEventListener("click", onCreateClick);
