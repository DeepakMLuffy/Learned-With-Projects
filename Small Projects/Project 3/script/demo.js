/** @format */

const buttonElement = document.querySelector(".js-subscribe-button");

function button() {
  if (buttonElement.innerHTML === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add('is-subscribe')
  } else {
    buttonElement.innerHTML = "Subscribe";
    buttonElement.classList.remove('is-subscribe')
  }
}
function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost = cost + 10;
  }
  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}
function key(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
