// Input selectors
const month = document.querySelector("#month");
const year = document.querySelector("#year")
const cardNum = document.querySelector("#card-num");
const cvc = document.querySelector("#cvc");
const cardName = document.querySelector("#name");

// Card selectors
const frontNum = document.querySelector("#front-num");
const frontName = document.querySelector("#front-name");
const frontMonth = document.querySelector("#front-mm");
const frontYear = document.querySelector("#front-yy");
const backCvc = document.querySelector("#back-cvc")

cardNum.addEventListener("keyup", (event) => {
  if (cardNum.value.length == 0) {
    frontNum.innerText = "0000 0000 0000 0000"
  } else {
    frontNum.innerText = cardNum.value
  }
})

cardName.addEventListener("keyup", (event) => {
  if (cardName.value.length == 0) {
    frontName.innerText = "JANE APPLESEED"
  } else {
    frontName.innerText = cardName.value
  }
})

month.addEventListener("keyup",(event) => {
  if (month.value.length == 0) {
    frontMonth.innerText = "00"
  } else {
    frontMonth.innerText = month.value
  }
})

year.addEventListener("keyup",(event) => {
  if (year.value.length == 0) {
    frontYear.innerText = "00"
  } else {
    frontYear.innerText = year.value
  }
})

cvc.addEventListener("keyup", (event) => {
  if (cvc.value.length == 0) {
    backCvc.innerText = "000"
  } else {
    backCvc.innerText = cvc.value
    console.log(cvc.value)
  }
})
