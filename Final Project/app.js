const searchButton = document.querySelector(".search-btn");
const searchPartDiv = document.querySelector(".search-part-div");
const searchSideDiv = document.querySelector(".search-side");
const username = localStorage.getItem("username");
const accountParagraph = document.querySelector(".account-p");
const input = document.createElement("input");
const deleteSearch = document.createElement("button");
const searchImageDiv = document.querySelector(".search-img-div");
const isLogin = localStorage.getItem("isLogin") === "true";
const accountLink = document.getElementById("accountLink");

if (!isLogin) {
  accountLink.href = "./Login/login.html";
}

if (username !== "null") {
  accountParagraph.textContent = "Hi, " + username;
} else {
  accountParagraph.textContent = "User";
}
accountLink.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "./account.html";
});

let flagForInput = false;

function renderProducts(objectInfo) {
  const productsDiv = document.querySelector(".products-div");
  productsDiv.innerHTML = "";

  if (objectInfo.length === 0) {
    const notFoundMessage = document.createElement("p");
    notFoundMessage.textContent = "Product Not Found ! ";

    notFoundMessage.classList.add("not-found-message");
    productsDiv.appendChild(notFoundMessage);
  } else {
    objectInfo.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imagePart = document.createElement("div");
      imagePart.classList.add("image-part");
      const image = document.createElement("img");
      image.classList.add("card-image");

      if (product.images.length > 0) {
        image.src = product.images[0];
      } else {
        image.src = "default-image.jpg";
      }

      imagePart.appendChild(image);
      card.appendChild(imagePart);

      const namePart = document.createElement("p");
      namePart.textContent = product.title;
      namePart.classList.add("name-part");
      card.appendChild(namePart);

      const pricePart = document.createElement("p");
      pricePart.textContent = product.price + " AZN";
      pricePart.classList.add("price-part");
      card.appendChild(pricePart);

      const buyButton = document.createElement("button");
      buyButton.textContent = "Inspect";
      buyButton.classList.add("inspect-btn");
      card.appendChild(buyButton);

      productsDiv.appendChild(card);

      const productDetails = {
        name: product.title,
        price: product.price,
        description: product.description,
        images: product.images,
        rating: product.rating,
        brand: product.brand,
        stock: product.stock,
      };

      card.addEventListener("click", () => {
        localStorage.setItem("productDetails", JSON.stringify(productDetails));
        window.location.href = "./product.html";
      });
    });
  }
}

const clickToOpenSearch = () => {
  if (!flagForInput) {
    deleteSearch.innerText = "X";
    searchImageDiv.appendChild(input);
    searchImageDiv.appendChild(deleteSearch);
    input.classList.add("input");
    input.style.display = "block";
    deleteSearch.style.display = "block";
    deleteSearch.classList.add("delete-btn");
    flagForInput = true;

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        searchWithInput(input.value.trim().toLowerCase());
      }
    });

    deleteSearch.addEventListener("click", () => {
      input.style.display = "none";
      deleteSearch.style.display = "none";
      input.value = "";
      flagForInput = false;
      searchButton.addEventListener("click", clickToOpenSearch);
    });
  }
};

function searchWithInput(input) {
  fetch(`https://dummyjson.com/products/search?q=${input}`)
    .then((res) => res.json())
    .then((res) => {
      const inputInfo = res.products;
      renderProducts(inputInfo);
    });
}

searchButton.addEventListener("click", clickToOpenSearch);

function performSearch(category) {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((res) => {
      const objectInfo = res.products;
      renderProducts(objectInfo);
      console.log(objectInfo);
    });
}
performSearch("laptops");

const laptopsButton = document.querySelector(".laptops-btn");
laptopsButton.addEventListener("click", () => {
  performSearch("laptops");
});
const smartphonesButton = document.querySelector(".smartphones-btn");
smartphonesButton.addEventListener("click", () => {
  performSearch("smartphones");
});
const tabletsButton = document.querySelector(".tablets-btn");
tabletsButton.addEventListener("click", () => {
  performSearch("tablets");
});
const mobileAcc = document.querySelector(".mobil-acc-btn");
mobileAcc.addEventListener("click", () => {
  performSearch("mobile-accessories");
});
