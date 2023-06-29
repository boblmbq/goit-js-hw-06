// Якщо користувач заповнив усі поля і
// відправив форму, збери значення полів в
// об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості.

// Виведи об'єкт із введеними даними в консоль і
// очисти значення полів форми методом reset.

const refs = {
  btn: document.querySelector("button[type=submit]"),
  form: document.querySelector(".login-form"),
};

const { btn, form } = refs;

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  // const formData = new FormData(e.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(`this is value ${value}`);
  //   console.log(`this is name ${name}`);
  // });

  const {
    elements: { email, password },
  } = e.currentTarget;

  const emailLenght = email.value.length;
  const passwortLenght = password.value.length;

  if (emailLenght === 0 || passwortLenght === 0) {
    alert("you have not fulled all inputs");
  } else {
    const passwordName = password.name;
    const emailName = email.name;
    const formData = {
      [emailName]: email.value,
      [passwordName]: password.value,
    };
    console.log(formData);
    form.reset();
  }
}
