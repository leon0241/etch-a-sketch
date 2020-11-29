const gridContainer = document.querySelector('.gridContainer');

let gridLength = 16;
let gridHeight = 16;

console.log("a")
for (var i = 0; i < gridLength * gridHeight; i++){
  let createBox = document.createElement('div')
  gridContainer.appendChild(createBox).className = "a"
}
