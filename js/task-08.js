const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (Object.values(data).some((value) => value.trim() === "")) {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(data);
    formElem.reset();
  }
}
