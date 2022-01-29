const calculateBtn = document.getElementsByClassName("calculate")[0];
let inputBill = document.getElementsByClassName("input__bill")[0];
let serviceType = document.getElementsByClassName("service-type")[0];
let inputPeople = document.getElementsByClassName("input__people")[0];
const tipDisplay = document.getElementsByClassName("tip")[0];

calculateBtn.addEventListener("click", (e) => {
e.preventDefault();

const bill = parseInt(inputBill.value)
const tipInPercent = parseFloat(serviceType.value)
const people = parseInt(inputPeople.value)

const tip = (bill + bill * tipInPercent) / people

tipDisplay.innerHTML = tip.toFixed(2);

console.log(bill)
console.log(tipInPercent)
console.log(people)
console.log(tip)

});

function calculate() {

}