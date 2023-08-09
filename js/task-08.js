const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const email = formElem.elements.email.value;
  const password = formElem.elements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  formElem.reset();
}
