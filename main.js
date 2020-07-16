const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");

const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const swapBtn = document.getElementById("swap");
const rateDiv = document.getElementById("rate");

//  EventListeners

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);
