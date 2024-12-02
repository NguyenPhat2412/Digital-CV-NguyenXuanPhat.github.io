function validateEmail() {
  var emailInput = document.getElementById("emailInput").value;
  var personalInfo = document.querySelector(".personalInfo");
  var error = document.getElementById("error");
  var emailForm = document.getElementById("emailForm");

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(emailInput)) {
    personalInfo.style.display = "block";
    emailForm.style.display = "none";
    error.style.display = "none";
  } else {
    personalInfo.style.display = "none";
    emailForm.style.display = "block";
    error.style.display = "block";
    error.textContent = "Nhập lại email";
  }
}

function toggleDetails(element) {
  var details = element.nextElementSibling;
  var button = element.querySelector("button");
  if (details.style.display === "none") {
    button.textContent = "View Less";
    details.style.display = "block";
  } else {
    button.textContent = "View More";
    details.style.display = "none";
  }
}
