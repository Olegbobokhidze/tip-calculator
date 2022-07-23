"use strict";
const firstValue = document.querySelector(".value");
const secondValue = document.querySelector(".value2");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const error = document.getElementById("error");
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");

// this five click events are 5%,10%,15%,25% and 50% tips.
first.addEventListener("click", function () {
  if (firstValue.value > 0 && secondValue.value > 0) {
    tipAmount.textContent = `${(
      (firstValue.value * 0.05) /
      secondValue.value
    ).toFixed(2)}`;
    totalAmount.textContent = `${
      Number(tipAmount.textContent) + Number(firstValue.value)
    }`;
    tipAmount.textContent = "$" + tipAmount.textContent;
    totalAmount.textContent = "$" + totalAmount.textContent;
  }
  errorMessage();
});
second.addEventListener("click", function () {
  if (firstValue.value > 0 && secondValue.value > 0) {
    tipAmount.textContent = `${(
      (firstValue.value * 0.1) /
      secondValue.value
    ).toFixed(2)}`;
    totalAmount.textContent = `${
      Number(tipAmount.textContent) + Number(firstValue.value)
    }`;
    tipAmount.textContent = "$" + tipAmount.textContent;
    totalAmount.textContent = "$" + totalAmount.textContent;
  }
  errorMessage();
});
third.addEventListener("click", function () {
  if (firstValue.value > 0 && secondValue.value > 0) {
    tipAmount.textContent = `${(
      (firstValue.value * 0.15) /
      secondValue.value
    ).toFixed(2)}`;
    totalAmount.textContent = `${
      Number(tipAmount.textContent) + Number(firstValue.value)
    }`;
    tipAmount.textContent = "$" + tipAmount.textContent;
    totalAmount.textContent = "$" + totalAmount.textContent;
  }
  errorMessage();
});
fourth.addEventListener("click", function () {
  if (firstValue.value > 0 && secondValue.value > 0) {
    tipAmount.textContent = `${(
      (firstValue.value * 0.25) /
      secondValue.value
    ).toFixed(2)}`;
    totalAmount.textContent = `${
      Number(tipAmount.textContent) + Number(firstValue.value)
    }`;
    tipAmount.textContent = "$" + tipAmount.textContent;
    totalAmount.textContent = "$" + totalAmount.textContent;
  }
  errorMessage();
});
fifth.addEventListener("click", function () {
  if (firstValue.value > 0 && secondValue.value > 0) {
    tipAmount.textContent = `${(
      (firstValue.value * 0.5) /
      secondValue.value
    ).toFixed(2)}`;
    totalAmount.textContent = `${
      Number(tipAmount.textContent) + Number(firstValue.value)
    }`;
    tipAmount.textContent = "$" + tipAmount.textContent;
    totalAmount.textContent = "$" + totalAmount.textContent;
  }
  errorMessage();
});
// this is custom tip.
custom.addEventListener("keyup", function () {
  if (firstValue.value > 0 && secondValue.value > 0) {
    tipAmount.textContent = `${(
      (firstValue.value * (custom.value / 100)) /
      secondValue.value
    ).toFixed(2)}`;
    totalAmount.textContent = `${
      Number(tipAmount.textContent) + Number(firstValue.value)
    }`;
    tipAmount.textContent = "$" + tipAmount.textContent;
    totalAmount.textContent = "$" + totalAmount.textContent;
  }
  errorMessage();
});
// when number of people is less than 0 or equal 0 errormmessage activates.
const errorMessage = function () {
  if (secondValue.value <= 0) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".value2").style.border = "2px solid #E17052";
    document.querySelector(".error").style.color = "#E17457";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".value2").style.border = "none";
  }
};
// this is reset event, when we click it everything is resetting.
reset.addEventListener("click", function () {
  firstValue.value = 0;
  secondValue.value = 0;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
