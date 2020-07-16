const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");

const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const swapBtn = document.getElementById("swap");
const rateDiv = document.getElementById("rate");

function calculate() {
  const currencyOneValue = currencyOne.value;
  const currencyTwoValue = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[currencyTwoValue];
      rateDiv.innerHTML = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue} `;
      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}
function swapCurrency() {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
}

//  EventListeners

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swapBtn.addEventListener("click", swapCurrency);
