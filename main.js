const height = document.querySelector(".height");
const width = document.querySelector(".width");
const side = document.querySelector(".side");
const radius = document.querySelector(".radius");
const btn = document.querySelector(".btn");

const rectangle_a = document.querySelector(".rectangle_area");
const rectangle_p = document.querySelector(".rectangle_perimeter");
const square_a = document.querySelector(".square_area");
const square_p = document.querySelector(".square_perimeter");
const circle_a = document.querySelector(".circle_area");
const circle_p = document.querySelector(".circle_perimeter");

function circle() {
  const areaValue = Math.PI * radius.value ** 2;
  const perimeterValue = 2 * Math.PI * radius.value;
  circle_a.value = areaValue.toFixed(3);
  circle_p.value = perimeterValue.toFixed(3);
}

function square() {
  const areaValue = side.value ** 2;
  const perimeterValue = 4 * side.value;
  if (parseFloat(areaValue) % 1 !== 0 && parseFloat(perimeterValue) % 1 !== 0) {
    square_a.value = areaValue.toFixed(3);
    square_p.value = perimeterValue.toFixed(3);
  } else {
    square_a.value = areaValue;
    square_p.value = perimeterValue;
  }
}

function rectangle() {
  const areaValue = height.value * width.value;
  const perimeterValue = 2 * height.value + 2 * width.value;
  if (parseFloat(areaValue) % 1 !== 0 && parseFloat(perimeterValue) % 1 !== 0) {
    rectangle_a.value = areaValue.toFixed(3);
    rectangle_p.value = perimeterValue.toFixed(3);
  } else {
    rectangle_a.value = areaValue;
    rectangle_p.value = perimeterValue;
  }
}

radius.addEventListener("input", circle);
side.addEventListener("input", square);
btn.addEventListener("click", rectangle);
