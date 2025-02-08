"use strict";

// create new data structure

const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const colorInput = document.getElementById("input-color-1");
const lengthInput = document.getElementById("input-length");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody");
const healthBtn = document.getElementById("healthy-btn");
let healthyCheck = false;

typeInput.addEventListener("click", renderBreed);

// submit validation
submitBtn.addEventListener("click", function () {
  const data = {
    id: idInput.value,
    age: parseInt(ageInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    date: new Date().toLocaleDateString(),
    name: nameInput.value,
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
  };
  data.bmi = calculateBMI(data);
  // Validate the data
  if (validateData(data)) {
    petArr.push(data);
    clearInput();
    renderTableData(petArr);
  }
});

// Function to add a new pet
function validateData(data) {
  if (!data.id || petArr.some((pet) => pet.id === data.id)) {
    alert("ID must be unique");
    return false;
  }
  if (
    !data.name ||
    !data.age ||
    !data.type ||
    !data.weight ||
    !data.length ||
    !data.breed
  ) {
    alert("All fields must be filled");
    return false;
  }
  if (data.age < 1 || data.age > 15) {
    alert("Age must be between 1 and 15");
    return false;
  }
  if (data.weight < 1 || data.weight > 15) {
    alert("Weight must be between 1 and 15");
    return false;
  }
  if (data.length < 1 || data.length > 100) {
    alert("Length must be between 1 and 100");
    return false;
  }
  if (data.type === "Select Type") {
    alert("Select Type");
    return false;
  }
  if (data.breed === "Select Breed") {
    alert("Select Breed");
    return false;
  }
  return true;
}

// renderTableData
function renderTableData(arr) {
  tableBodyEl.innerHTML = "";
  arr.forEach((pet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope = "row">${pet.id}</th>
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.type}</td>
      <td>${pet.weight} kg</td>
      <td>${pet.length} cm</td>
      <td>${pet.breed}</td>
      <td><i class="bi bi-square-fill" style = "color: ${pet.color}"></i></td>
      <td>${pet.vaccinated ? "✔" : "✘"}</td>
      <td>${pet.dewormed ? "✔" : "✘"}</td>
      <td>${pet.sterilized ? "✔" : "✘"}</td>
      <td>${pet.bmi}</td>
      <td>${pet.date}</td>
      <td><button class = "btn btn-danger" onclick = "deletePet('${
        pet.id
      }')">Delete</button></td>
    `;
    tableBodyEl.appendChild(row);
  });
}

// ClearInput
function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  colorInput.value = "#000000";
  lengthInput.value = "";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

function deletePet(petId) {
  if (confirm("Are you sure?")) {
    const index = petArr.findIndex((pet) => pet.id === petId);
    if (index !== -1) {
      petArr.splice(index, 1);
      // cap nhat lai du lieu duoi local storage
      saveToStorage("petArr", petArr);
      renderTableData(petArr);
    }
  }
}
healthBtn.addEventListener("click", function () {
  healthyCheck = !healthyCheck;
  healthBtn.textContent = healthyCheck ? "Show All Pets" : "Show Healthy Pets";
  const filteredArr = healthyCheck
    ? petArr.filter((pet) => pet.vaccinated && pet.dewormed && pet.sterilized)
    : petArr;
  renderTableData(filteredArr);
});

// calculate BMI
function calculateBMI(pet) {
  if (pet.type === "Dog") {
    return ((pet.weight * 703) / pet.length ** 2).toFixed(2);
  } else if (pet.type === "Cat") {
    return ((pet.weight * 886) / pet.length ** 2).toFixed(2);
  }
  return "N/A";
}

function renderBreed() {
  breedInput.innerHTML = `<option>Select Breed</option>
  <option>Tabby</option>
                      <option>Domestic Medium Hair</option>
                      <option>Mixed Breed</option>
                      <option>Domestic Short Hair</option>
                      <option>Terrier</option>
                      <option>Greyhound</option>
                      <option>Persian</option>
                      <option>Rottweiler</option>`;

  // display dog
  if ((typeInput, value === "Dog")) {
    const breedDogs = breedArr.filter((breedItem) => breedItem.type === "Dog");
    breedDogs.forEach(function (breedItem) {
      const option = document.createElement("option");
      option.innerHTML = `${breedItem.breed}`;
      breedInput.appendChild(option);
    });
  }
  // display cat
  if ((typeInput, value === "Cat")) {
    const breedCats = breedArr.filter((breedItem) => breedItem.type === "Cat");
    breedCats.forEach(function (breedItem) {
      const option = document.createElement("option");
      option.innerHTML = `${breedItem.breed}`;
      breedInput.appendChild(option);
    });
  }
}
