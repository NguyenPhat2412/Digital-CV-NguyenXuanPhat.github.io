"use strict";

// Pet Array
const breedArr = [];
// DOM Elements
const petTableBody = document.getElementById("tbody");
const editForm = document.getElementById("container-form");
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

function renderPetTable() {
  petTableBody.innerHTML = "";
  petArr.forEach((pet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${pet.id}</td>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.type}</td>
            <td>${pet.weight} kg</td>
            <td>${pet.length} cm</td>
            <td>${pet.breed}</td>
            <td><i class="bi bi-square-fill" style="color: ${
              pet.color
            }"></i></td>
            <td>${pet.vaccinated ? "✔" : "✘"}</td>
            <td>${pet.dewormed ? "✔" : "✘"}</td>
            <td>${pet.sterilized ? "✔" : "✘"}</td>
            <td>${pet.date}</td>
            <td><button class="btn btn-warning" onclick="startEditPet('${
              pet.id
            }')">Edit</button></td>
        `;
    petTableBody.appendChild(row);
  });
}

// Khi nhấn "Edit", điền dữ liệu vào form
function startEditPet(petId) {
  const pet = petArr.find((p) => p.id === petId);
  if (!pet) return;

  // Hiển thị dữ liệu của pet lên form
  idInput.value = pet.id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  weightInput.value = pet.weight;
  lengthInput.value = pet.length;
  colorInput.value = pet.color;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;
  updateBreedOptions(pet.type);
  breedInput.value = pet.breed;

  editForm.classList.remove("hide");
}

typeInput.addEventListener("change", function () {
  updateBreedOptions(typeInput.value);
});

function updateBreedOptions(type) {
  breedInput.innerHTML = `<option>Select Breed</option>
                        <option>Tabby</option>
                      <option>Domestic Medium Hair</option>
                      <option>Mixed Breed</option>
                      <option>Domestic Short Hair</option>
                      <option>Terrier</option>
                      <option>Greyhound</option>
                      <option>Persian</option>
                      <option>Rottweiler</option>`;
  const breeds = breedArr.filter((b) => b.type === type);
  breeds.forEach((b) => {
    const option = document.createElement("option");
    option.textContent = b.breed;
    breedInput.appendChild(option);
  });
}

submitBtn.addEventListener("click", function () {
  const pet = petArr.find((p) => p.id === idInput.value);
  if (!pet) return;

  const updatedData = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    breed: breedInput.value,
    color: colorInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
  };

  if (!validateData(updatedData)) return;

  Object.assign(pet, updatedData);

  editForm.classList.add("hide");

  renderPetTable();
});

function validateData(data) {
  if (
    !data.name ||
    !data.age ||
    !data.type ||
    !data.weight ||
    !data.length ||
    !data.breed
  ) {
    alert("All fields must be filled!");
    return false;
  }
  if (data.age < 1 || data.age > 15) {
    alert("Age must be between 1 and 15!");
    return false;
  }
  if (data.weight < 1 || data.weight > 15) {
    alert("Weight must be between 1 and 15 kg!");
    return false;
  }
  if (data.length < 1 || data.length > 100) {
    alert("Length must be between 1 and 100 cm!");
    return false;
  }
  if (data.type === "Select Type") {
    alert("Please select a valid Type!");
    return false;
  }
  if (data.breed === "Select Breed") {
    alert("Please select a valid Breed!");
    return false;
  }
  return true;
}

// Hiển thị bảng thú cưng khi tải trang
renderPetTable();
