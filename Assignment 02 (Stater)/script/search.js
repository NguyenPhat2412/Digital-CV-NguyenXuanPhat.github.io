"use strict";

"use strict";

// data test
const breedArr = [
  { breed: "Golden Retriever", type: "Dog" },
  { breed: "Bulldog", type: "Dog" },
  { breed: "Beagle", type: "Dog" },
  { breed: "Labrador", type: "Dog" },
  { breed: "Persian", type: "Cat" },
  { breed: "Siamese", type: "Cat" },
  { breed: "Maine Coon", type: "Cat" },
];

const tableBody = document.getElementById("tbody");
const findBtn = document.getElementById("find-btn");

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

typeInput.addEventListener("change", function () {
  updateBreedOptions(typeInput.value);
});

function updateBreedOptions(type) {
  breedInput.innerHTML = `<option>Select Bread</option>`;
  const breeds = breedArr.filter((b) => b.type === type);
  breeds.forEach((b) => {
    const option = document.createElement("option");
    option.textContent = b.breed;
    breedInput.appendChild(option);
  });
}

findBtn.addEventListener("click", function () {
  const searchResults = petArr.filter((pet) => {
    return (
      (idInput.value === "" ||
        pet.id.toLowerCase().includes(idInput.value.toLowerCase())) &&
      (nameInput.value === "" ||
        pet.name.toLowerCase().includes(nameInput.value.toLowerCase())) &&
      (typeInput.value === "Select Type" || pet.type === typeInput.value) &&
      (breedInput.value === "Select Breed" || pet.breed === breedInput.value) &&
      (!vaccinatedInput.checked || pet.vaccinated) &&
      (!dewormedInput.checked || pet.dewormed) &&
      (!sterilizedInput.checked || pet.sterilized)
    );
  });

  renderTableData(searchResults);
});

function renderTableData(arr) {
  tableBody.innerHTML = "";
  arr.forEach((pet) => {
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
        `;
    tableBody.appendChild(row);
  });
}

// display table data
renderTableData(petArr);
