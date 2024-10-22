/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const validate = () => {
  let cardNumber = document.getElementById("card-number").value;
  let cvc = document.getElementById("cvc").value;
  let amount = document.getElementById("amount").value;
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let postalCode = document.getElementById("postal-code").value;
  let message = document.getElementById("message").value;
  let warning = ``;

  // Reset background colors
  document.getElementById("card-number").style.backgroundColor = "";
  document.getElementById("cvc").style.backgroundColor = "";
  document.getElementById("amount").style.backgroundColor = "";
  document.getElementById("first-name").style.backgroundColor = "";
  document.getElementById("last-name").style.backgroundColor = "";
  document.getElementById("city").style.backgroundColor = "";
  document.getElementById("postal-code").style.backgroundColor = "";

  if (cardNumber.length > 16 || cardNumber.length < 15) {
    warning += `<li>Credit Card Numbers Incorrect</li>`;
    document.getElementById("card-number").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  }

  if (cvc.length < 3 || cvc.length > 4) {
    warning += `<li>CVC Incorrect</li>`;
    document.getElementById("cvc").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  }

  if (amount <= 0) {
    warning += `<li>Amount Incorrect</li>`;
    document.getElementById("amount").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  }

  //else {
  //   document.getElementById("amount").style.backgroundColor = "white";
  // }
  if (state == "-1") {
    warning += `<li>State Incorrect</li>`;
    document.getElementById("state").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  } else {
    document.getElementById("state").style.backgroundColor = "white";
  }

  if (postalCode.length != 5 || postalCode.trim() === "") {
    warning += `<li>Postal Code Incorrect</li>`;
    document.getElementById("postal-code").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  }

  if (firstName.length <= 1) {
    warning += `<li>First Name Incorrect</li>`;
    document.getElementById("first-name").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  }

  if (lastName.length <= 1) {
    warning += `<li>Last Name Incorrect</li>`;
    document.getElementById("last-name").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  }

  if (city.length <= 1) {
    warning += `<li>City Incorrect</li>`;
    document.getElementById("city").style.backgroundColor = "pink";
    document.getElementById("missingfields").style.backgroundColor = "red";
  }

  if (warning == "") {
    document.getElementById("missingfields").style.backgroundColor = "white";
  }
  document.querySelector("#missingfields").innerHTML = `<ul>${warning}</ul>`;
};

document.getElementById("button-submit").addEventListener("click", event => {
  event.preventDefault();
  validate();
});
