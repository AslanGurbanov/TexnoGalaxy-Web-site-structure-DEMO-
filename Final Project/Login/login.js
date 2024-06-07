document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");

  showPasswordCheckbox.addEventListener("change", function () {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    if (password.length < 8 || !/[a-zA-Z]/.test(password)) {
      alert("Password must be at least 8 characters long and contain letters.");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    console.log("Username:", username);
    console.log("Email:", email);
    window.location.href = "../index.html";
  });
});
