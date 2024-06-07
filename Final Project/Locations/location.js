const map = L.map("map").setView([40.4093, 49.8671], 10);
let currentMarker = null;

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const buttonMay = document.querySelector(".may");
const buttonYasamal = document.querySelector(".yasamal");
const buttonGenclik = document.querySelector(".genclik");
const addInfoP = document.querySelector(".add-info");
buttonMay.addEventListener("click", () => {
  if (currentMarker) {
    map.removeLayer(currentMarker);
  }
  currentMarker = L.marker([40.377057, 49.849393]).addTo(map);
  map.setView([40.377057, 49.849393], 13);

  addInfoP.innerText = "28 may, working 9:00 - 22:00 everyday";
});

buttonYasamal.addEventListener("click", () => {
  if (currentMarker) {
    map.removeLayer(currentMarker);
  }
  currentMarker = L.marker([40.377092, 49.809415]).addTo(map);
  map.setView([40.377092, 49.809415], 13);
  addInfoP.innerText = "Yasamal, working 10:00 - 22:00 not including weekends";
});

buttonGenclik.addEventListener("click", () => {
  if (currentMarker) {
    map.removeLayer(currentMarker);
  }
  currentMarker = L.marker([40.403314, 49.84745]).addTo(map);
  map.setView([40.403314, 49.84745], 13);

  addInfoP.innerText = "Ganclik, working 13:00 - 20:00 not including weekends";
});
