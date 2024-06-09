/**
 * Get canvas methods autocomplete
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("game-canvas");
const gameCanva = canvas.getContext("2d");
let elementSize;
let currentMap;

function setMap(mapIndex) {
  const map = maps[mapIndex];
  currentMap = map.map((row) => row.split(''));
}

function setCanvasSize() {
  //Config canvas size
  let canvasSize;
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementSize = canvasSize / 10;
  gameStart();
}

function gameStart() {
  //config elemnts size
  gameCanva.font = `${elementSize}px Verdana`;
  gameCanva.textAlign = "end";
  setMap(0);
  for (let row = 1; row <= 10; row++) {
    // rows
    for (let col = 1; col <= 10; col++) {
      //columns
      gameCanva.fillText(
        emojis[currentMap[row - 1][col - 1]],
        elementSize * col,
        elementSize * row
      );
    }
  }
}

// function gameLoop() {
//   setCanvasSize();
//   setInterval(() => console.log("Game loop:", emojis), 1000);
// }

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
