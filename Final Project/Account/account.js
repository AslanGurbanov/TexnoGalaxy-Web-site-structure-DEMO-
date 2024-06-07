document.addEventListener("DOMContentLoaded", function () {
  const userName = localStorage.getItem("username");
  const userEmail = localStorage.getItem("email");
  const userContactNumber = localStorage.getItem("contactNumber");
  const accountContent = document.querySelector(".account-content");

  const userNameHeading = document.createElement("h3");
  userNameHeading.textContent = `Hi ${userName}`;
  userNameHeading.classList = "userName-header";
  accountContent.appendChild(userNameHeading);

  const userInfo = document.createElement("p");
  userInfo.classList.add("user-info-p");
  userInfo.innerText = "User information: ";
  accountContent.appendChild(userInfo);

  const userEmailParagraph = document.createElement("p");
  userEmailParagraph.textContent = `User email: ${userEmail}`;
  userEmailParagraph.classList.add("user-email");

  accountContent.appendChild(userEmailParagraph);

  const contactNumberParagraph = document.createElement("p");
  contactNumberParagraph.classList.add("contact-number");

  if (userContactNumber) {
    contactNumberParagraph.textContent = `Contact Number: ${userContactNumber}`;
  } else {
    contactNumberParagraph.textContent =
      "You haven't set a contact number yet.";
  }
  accountContent.appendChild(contactNumberParagraph);

  const setNumberButton = document.createElement("button");
  setNumberButton.textContent = "Set Contact Number";
  setNumberButton.classList.add("set-number-button");
  accountContent.appendChild(setNumberButton);

  setNumberButton.addEventListener("click", function () {
    const newContactNumber = prompt("Please enter your contact number:");
    if (newContactNumber) {
      localStorage.setItem("contactNumber", newContactNumber);
      contactNumberParagraph.textContent = `Contact Number: ${newContactNumber}`;
    } else {
      alert("Please enter a valid contact number.");
    }
  });

  const wishList = document.querySelector(".wish-list");
  wishList.addEventListener("click", () => {
    const productName = localStorage.getItem("nameForAccount");
    const userFunctionDiv = document.querySelector(".user-functions-div");
    console.log(productName);
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("products-div-account");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = productName;
    ul.appendChild(li);
    productsDiv.appendChild(ul);
    userFunctionDiv.appendChild(productsDiv);
  });
});
