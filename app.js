// let blockEl = document.querySelector("#block");
// let verticalPosition = document.querySelector("#position-y");
// let horizontalPosition = document.querySelector("#position-x");
// let blockSize = document.querySelector("#size");
// let shapeSelector = document.querySelector("#shape-select");
// let okBtn = document.querySelector("#ok-btn");
// let rgbaR = document.querySelector("#rgba-r");
// let rgbaG = document.querySelector("#rgba-g");
// let rgbaB = document.querySelector("#rgba-b");
// let rgbaA = document.querySelector("#rgba-a");
// let rgbaContainer = document.querySelector(".rgba-container");
// let rgbaInputs = rgbaContainer.querySelectorAll("input");

// // Vertical Position Changer
// verticalPosition.addEventListener("change", function () {
//   blockEl.style.top = verticalPosition.value + "px";
// });

// // Horizontal Position Changer
// horizontalPosition.addEventListener("change", function () {
//   blockEl.style.left = horizontalPosition.value + "px";
// });

// // Size Changer
// blockSize.addEventListener("change", function () {
//   blockEl.style.transform = "scale(" + blockSize.value + ")";
// });

// // Shape Changer
// okBtn.addEventListener("click", function () {
//   let shapeOption = shapeSelector.value;
//   if (shapeOption === "1") {
//     blockEl.style.borderRadius = "0";
//   } else if (shapeOption === "2") {
//     blockEl.style.borderRadius = "50%";
//   }
// });

// // Background Color Changer
// for (let i = 0; i < rgbaInputs.length; i++) {
//   // console.log(rgbaInputs[i]);
//   rgbaInputs[i].addEventListener("change", function () {
//     blockEl.style.backgroundColor =
//       "rgba(" +
//       rgbaR.value +
//       "," +
//       rgbaG.value +
//       "," +
//       rgbaB.value +
//       "," +
//       rgbaA.value +
//       ")";
//   });
// }

// find a way!

// horizontal and vertical shape
let blockEl = document.querySelector("#block");
let verticalPosition = document.querySelector("#position-y");
let horizontalPosition = document.querySelector("#position-x");
// block size and shape
let blockSize = document.querySelector("#size");
let shapeSelector = document.querySelector("#shape-select");
let okBtn = document.querySelector("#ok-btn");
// rgb background color changer for the box/circle
let rgbaR = document.querySelector("#rgba-r");
let rgbaG = document.querySelector("#rgba-g");
let rgbaB = document.querySelector("#rgba-b");
let rgbaA = document.querySelector("#rgba-a");
let rgbaContainer = document.querySelector(".rgba-container");
let rgbaInputs = rgbaContainer.querySelectorAll("input");

// vertical position changer

verticalPosition.addEventListener("change", () => {
  blockEl.style.top = verticalPosition.value + "px";
  // console.log(verticalPosition.value);
});

// horizontal position changer

horizontalPosition.addEventListener("change", () => {
  blockEl.style.left = horizontalPosition.value + "px";
  // console.log(horizontalPosition.value);
});

// size changer
blockSize.addEventListener("change", () => {
  blockEl.style.transform = "scale(" + blockSize.value + ")";
  // console.log(blockEl.style.transform);
});

// shape changer
okBtn.addEventListener("click", () => {
  let shapeOption = shapeSelector.value;
  // console.log(shapeOption);
  if (shapeOption === "1") {
    blockEl.style.borderRadius = "0";
  } else if (shapeOption === "2") {
    blockEl.style.borderRadius = "50%";
  }
});

// color changer

for (let i = 0; i < rgbaInputs.length; i++) {
  // console.log(rgbaInputs[i]);
  rgbaInputs[i].addEventListener("change", () => {
    blockEl.style.backgroundColor =
      "rgba(" +
      rgbaR.value +
      "," +
      rgbaG.value +
      "," +
      rgbaB.value +
      "," +
      rgbaA.value +
      ")";
  });
}
