// import * as validation from "./validate.js"

const inputs = document.querySelectorAll("input");
const button = document.querySelector("#submit");

function validate() {
  console.log("firing")
  inputs.forEach(input => input.setAttribute("required","required"));
}

button.addEventListener("click", validate())
