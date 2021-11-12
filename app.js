let firstSide = document.querySelector("#firstside");
let secondSide = document.querySelector("#secondside");
let thirdSide = document.querySelector("#thirdside");
let btn = document.querySelector(".button");
let result = document.querySelector("#span-result");

btn.addEventListener("click", checkTriangle);

function checkTriangle() {
  let fsValue = Number(firstSide.value);
  let ssValue = Number(secondSide.value);
  let tsValue = Number(thirdSide.value);
  if (
    (fsValue < 0 || ssValue < 0 || tsValue < 0,
    (fsValue + ssValue < tsValue && Math.abs(fsValue - ssValue) < tsValue) ||
      (fsValue + tsValue < ssValue && Math.abs(fsValue - tsValue) < ssValue) ||
      (ssValue + tsValue < fsValue && Math.abs(ssValue - tsValue) < fsValue))
  ) {
    result.textContent = "This is not a triangle.";
  } else if (fsValue == ssValue && ssValue == tsValue && fsValue == tsValue) {
    result.textContent = "This a equilateral.";
  } else if (fsValue != ssValue && ssValue != tsValue && fsValue != tsValue) {
    result.textContent = "This is a scalene.";
  } else if (fsValue == ssValue || fsValue == tsValue || tsValue == ssValue) {
    result.textContent = "This is an isosceles.";
  }
}

// function checkTriangle() {
//   let fsValue = Number(firstSide.value);
//   let ssValue = Number(secondSide.value);
//   let tsValue = Number(thirdSide.value);

//   if (fsValue == ssValue && ssValue == tsValue && fsValue == tsValue) {
//     console.log("This a equilateral ");
//   } else if (fsValue != ssValue && ssValue != tsValue && fsValue != tsValue) {
//     console.log("This is a scalene");
//   } else if (fsValue == ssValue || fsValue == tsValue || tsValue == ssValue) {
//     console.log("This is an isosceles");
//   }
// }
