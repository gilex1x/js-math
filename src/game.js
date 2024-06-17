/**
 * Get canvas methods autocomplete
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("game-canvas");
const gameCanva = canvas.getContext("2d");
const btnUp = document.getElementById("up-btn");
const btnRight = document.getElementById("right-btn");
const btnDown = document.getElementById("down-btn");
const btnLeft = document.getElementById("left-btn");
let elementSize;
let currentMap;
//Player
let playerPosition = {
  x: 0,
  y: 0,
};

function setMap(mapIndex) {
  const map = maps[mapIndex];
  currentMap = map.map((row) => row.split(""));
  currentMap.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementSize * (colIndex + 1);
      const posY = elementSize * (rowIndex + 1);
      if (col == "O") {
        playerPosition.x = posX;
        playerPosition.y = posY;
      }
      gameCanva.fillText(emoji, posX, posY);
    });
  });
  gameCanva.fillText(emojis['PLAYER'],playerPosition.x,playerPosition.y);
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
  setMap(1);
}

function playerMove(event) {
  let direction = event.key || event.target.getAttribute("direction");

  switch (direction) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowRight":
      moveRigth();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
  }
}

function moveUp() {
  console.log("MOVE UP");
}
function moveRigth() {
  console.log("MOVE RIGH");
}
function moveDown() {}
function moveLeft() {}

//Events
btnUp.addEventListener("click", playerMove);
btnRight.addEventListener("click", playerMove);
btnDown.addEventListener("click", playerMove);
btnLeft.addEventListener("click", playerMove);
window.addEventListener("keydown", playerMove);
window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
