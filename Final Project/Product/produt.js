document.addEventListener("DOMContentLoaded", function () {
  const productDetails = JSON.parse(localStorage.getItem("productDetails"));

  const picturesDiv = document.querySelector(".product-card .pictures");
  picturesDiv.style.display = "flex";
  picturesDiv.style.flexWrap = "wrap";

  productDetails.images.forEach((imageSrc) => {
    const imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.style.width = "150px";
    imageElement.style.marginRight = "10px";
    imageElement.style.marginBottom = "10px";
    picturesDiv.appendChild(imageElement);
  });

  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");

  const productDescription = document.getElementById("productDescription");

  const brand = document.createElement("p");
  brand.classList.add("brand");
  brand.textContent = `Brand: ${productDetails.brand}`;
  productDescription.appendChild(brand);

  const descriptionLabel = document.createElement("p");
  descriptionLabel.textContent = "Description:";
  productDescription.appendChild(descriptionLabel);

  const descriptionText = document.createElement("p");
  descriptionText.classList.add("description");
  descriptionText.textContent = productDetails.description;
  productDescription.appendChild(descriptionText);

  const rating = document.createElement("p");
  rating.classList.add("rating");
  rating.textContent = `Rating: ${productDetails.rating} / 5`;
  productDescription.appendChild(rating);

  const stock = document.createElement("p");
  stock.classList.add("stock");
  stock.textContent = `Stock: ${productDetails.stock} items left`;
  productDescription.appendChild(stock);
  const priceDiv = document.createElement("div");

  productName.textContent = productDetails.name;
  productPrice.textContent = "Total price : " + productDetails.price + " AZN";
  productPrice.classList.add("price");
  const exchangeButton = document.createElement("button");
  exchangeButton.textContent = "Exchange to Dollar";
  exchangeButton.classList.add("exchange-button");
  priceDiv.appendChild(productPrice);
  priceDiv.appendChild(exchangeButton);
  priceDiv.classList.add("price-div");
  productDescription.appendChild(priceDiv);
  let isDollar = false;
  exchangeButton.addEventListener("click", () => {
    if (isDollar) {
      productPrice.textContent =
        "Total price : " + productDetails.price + " AZN";
      exchangeButton.innerText = "Exchange to USD";
    } else {
      const dollarPrice = productDetails.price / 1.7;
      productPrice.textContent =
        "Total price : " + dollarPrice.toFixed(2) + " $";
      exchangeButton.innerText = "Exchange to AZN";
    }
    isDollar = !isDollar;
  });

  const addToWishlistButton = document.createElement("button");
  addToWishlistButton.textContent = "Add to Wishlist";
  addToWishlistButton.classList.add("wishlist-btn");
  addToWishlistButton.addEventListener("click", function () {
    addToWishlist(productDetails);
  });
  productDescription.appendChild(addToWishlistButton);

  function addToWishlist(productDetails) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({
      name: productDetails.name,
      price: productDetails.price,
      image: productDetails.images[0],
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Product added to wishlist!");
    console.log(productDetails.name);
  }
});
