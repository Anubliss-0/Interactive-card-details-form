// fire function as soon as submit is pressed.
// add invalid class on any inputs that do not all inputs

const inputs = document.querySelectorAll("input");
const button = document.querySelector("#submit");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cardNum = document.querySelector("#card-num");
const cvc = document.querySelector("#cvc");
const monthInvalid = document.querySelector("#month-invalid");
const yearInvalid = document.querySelector("#year-invalid");


function validate() {
  console.log("firing")
  inputs.forEach(input => input.setAttribute("required","required"))
  cardNum.setAttribute("minlength", "16")
  month.setAttribute("minlength", "2")
  year.setAttribute("minlength", "2")
  cvc.setAttribute("minlength", "3")
  if (month.value.length == 0) {
    monthInvalid.innerText = "Can't be blank"
  }
  if (year.value.length == 0) {
    yearInvalid.innerText = "Can't be blank"
  }
}

button.addEventListener("click", validate)

cardNum.addEventListener("keyup", (event) => {

  cardNum.value = cardNum.value.replace(/.{4}/g, "$&' '");
})

month.addEventListener("keyup", (event) => {
  if (month.value.length >= 1) {
    monthInvalid.innerText = "";
  }
  if (month.value.length == 2) {
    month.nextElementSibling.focus()
  }
})

month.addEventListener("keypress", (event) => {
  const REGEXP = /[0-9\/]+/;
  if (!REGEXP.test(event.key)) {
    event.preventDefault();
  }
})

year.addEventListener("keyup", (event) => {
  if (year.value.length >= 1) {
    yearInvalid.innerText = "";
  }
})

year.addEventListener("keypress", (event) => {
  const REGEXP = /[0-9\/]+/;
  if (!REGEXP.test(event.key)) {
    event.preventDefault();
  }
})
