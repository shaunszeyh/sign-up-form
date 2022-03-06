const form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", (e) => {
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");
  const error = document.getElementsByClassName("error")[0];
  if (password.value != confirm.value) {
    e.preventDefault();
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
});
