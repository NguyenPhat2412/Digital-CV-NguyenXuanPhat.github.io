"use strict";

const breedInput = document.getElementById("input-breed");
const typeInput = document.getElementById("input-type");
const btnSubmit = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");

renderTableBreed();
// event submit
btnSubmit.addEventListener("click", function () {
  const data = {
    bread: breedInput.value,
    type: typeInput.value,
  };

  const isValidate = validateData(data);

  if (isValidate) {
    breedArr.push(data);

    // save data
    saveToStorage("breedArr", breedArr);
    renderTableBreed();
    deleteForm();
  }
});

function validateData(data) {
  let isValidate = true;
  if (breedInput.value.trim().length === 0) {
    alert("Please input for breed");
    isValidate = false;
  }
  if (data.type === "Select Type") {
    alert("Please input for type");
    isValidate = false;
  }
  return isValidate;
}
function deleteForm() {
  breedInput.value = "";
  typeInput.value = "Select Type";
}

// render table data
function renderTableBreed() {
  tableBodyEl.innerHTML = "";
  breedArr.forEach(function (data, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${data.breed}</td>
      <td>${data.type}</td>
      <td>
        <button class="btn btn-danger" onclick="deleteBreed('${
          data.breed
        }')">Delete</button>
      </td>
    `;
    tableBodyEl.appendChild(tr);
  });
}

// delete cac breed
function deleteBreed(breedID) {
  if (confirm("Are you sure?")) {
    const index = breedArr.findIndex((breed) => breed.id === breedID);
    if (index !== -1) {
      breedArr.splice(index, 1);
      // cap nhat lai du lieu duoi local storage
      saveToStorage("breedArr", breedArr);
      renderTableData(breedArr);
    }
  }
}
