const refs = {
  btn: document.querySelector("button[type=submit]"),
  form: document.querySelector(".login-form"),
};

const { btn, form } = refs;

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
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
