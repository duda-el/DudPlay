//navBar
const menuOpen = document.querySelector(".men");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


//signIn
const userName = document.getElementById("userName");
const password = document.querySelector("#password");
const button = document.querySelector("#btn");
const usernameError = document.getElementById("usernameError");
const passwordError = document.querySelector("#passwordError");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (userName.value.length === 0) {
    usernameError.style.display = "block";
    usernameError.innerHTML = "Input can't be empty";
    userName.style.border = "2px solid red";
  } else {
    usernameError.style.display = "none";
    userName.style.border = "1px solid rgb(186, 186, 186)";
  }

  if (password.value.length === 0) {
    password.nextElementSibling.style.display = "block";
    passwordError.innerHTML = "Input can't be empty";
    password.style.border = "1px solid red";
  } else if (password.value.length > 0 && password.value.length < 8) {
    password.nextElementSibling.style.display = "block";
    passwordError.innerHTML = "Password must have at least 8 charachters";
    password.style.border = "1px solid red";
  } else {
    passwordError.style.display = "none";
    password.style.border = "1px solid rgb(186, 186, 186)";
  }
});

