// fire function as soon as submit is pressed.
// add invalid class on any inputs that do not all inputs

const inputs = document.querySelectorAll("input");
const button = document.querySelector("#submit");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cardNum = document.querySelector("#card-num");
const cvc = document.querySelector("#cvc");

function validate() {
  console.log("firing")
  inputs.forEach(input => input.setAttribute("required","required"))
  cardNum.setAttribute("minlength", "16")
  month.setAttribute("minlength", "2")
  year.setAttribute("minlength", "2")
  cvc.setAttribute("minlength", "3")
}

button.addEventListener("click", validate)

month.addEventListener("keyup", (event) => {
  if (month.value.length == 2) {
    console.log("testing!")
    month.nextElementSibling.focus()
  }
})
