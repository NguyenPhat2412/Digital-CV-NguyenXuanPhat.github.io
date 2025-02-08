"use strict";
const petActive = document.getElementById("sidebar");

// animation sidebar
petActive.addEventListener("click", function () {
  petActive.classList.toggle("active");
});
// data test
const petArr = [
  {
    id: "P001",
    name: "Buddy",
    age: 5,
    type: "Dog",
    weight: 10,
    length: 50,
    breed: "Golden Retriever",
    color: "#FFD700",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    bmi: ((10 * 703) / 50 ** 2).toFixed(2),
    date: "02/02/2025",
  },
  {
    id: "P002",
    name: "Kitty",
    age: 3,
    type: "Cat",
    weight: 5,
    length: 40,
    breed: "Persian",
    color: "#FF5733",
    vaccinated: false,
    dewormed: true,
    sterilized: true,
    bmi: ((5 * 886) / 40 ** 2).toFixed(2),
    date: "02/02/2025",
  },
  {
    id: "P003",
    name: "Rocky",
    age: 7,
    type: "Dog",
    weight: 12,
    length: 55,
    breed: "Bulldog",
    color: "#8B4513",
    vaccinated: true,
    dewormed: false,
    sterilized: false,
    bmi: ((12 * 703) / 55 ** 2).toFixed(2),
    date: "02/02/2025",
  },
  {
    id: "P004",
    name: "Luna",
    age: 2,
    type: "Cat",
    weight: 4,
    length: 35,
    breed: "Siamese",
    color: "#D2691E",
    vaccinated: true,
    dewormed: true,
    sterilized: false,
    bmi: ((4 * 886) / 35 ** 2).toFixed(2),
    date: "02/02/2025",
  },
  {
    id: "P005",
    name: "Max",
    age: 6,
    type: "Dog",
    weight: 9,
    length: 48,
    breed: "Beagle",
    color: "#A52A2A",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    bmi: ((9 * 703) / 48 ** 2).toFixed(2),
    date: "02/02/2025",
  },
];

// lay du lieu tu petArr
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setFromStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
