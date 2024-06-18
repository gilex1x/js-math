/**
 * Get canvas methods autocomplete
 * @type {HTMLCanvasElement}
 */
const canvasMap = document.getElementById("game-canvas-map");
const gameCanva = canvasMap.getContext("2d");
//player canvas
const canvasPlayer = document.getElementById("game-canvas-player");
const playerCanva = canvasPlayer.getContext("2d");
const btnUp = document.getElementById("up-btn");
const btnRight = document.getElementById("right-btn");
const btnDown = document.getElementById("down-btn");
const btnLeft = document.getElementById("left-btn");
let elementSize;
let currentMap;
let canvasSize;
let currentLevel = 0;
//Player
const playerPosition = {
  x: 0,
  y: 0,
};

//map
const giftPosition = {
  x: 0,
  y: 0,
};

let enemiesPositions = [];

function setMap(mapIndex) {
  gameCanva.clearRect(0, 0, canvasSize, canvasSize);
  playerCanva.clearRect(0, 0, canvasSize, canvasSize);
  const map = maps[mapIndex];
  currentMap = map.map((row) => row.split(""));
  currentMap.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementSize * (colIndex + 1);
      const posY = elementSize * (rowIndex + 1);
      gameCanva.fillText(emoji, posX, posY);
      if (col == "O") {
        playerPosition.x = posX;
        playerPosition.y = posY;
      } else if (col == "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == "X") {
        enemiesPositions.push({
          x: posX,
          y: posY,
        });
      }
    });
  });
  playerCanva.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

function setCanvasSize() {
  //Config canvas size

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  canvasMap.setAttribute("width", canvasSize);
  canvasMap.setAttribute("height", canvasSize);
  canvasPlayer.setAttribute("width", canvasSize);
  canvasPlayer.setAttribute("height", canvasSize);
  elementSize = Math.floor(canvasSize / 10); // Set te values to int number and prevent errors
  gameStart();
}

function gameStart() {
  //config elemnts size
  gameCanva.font = `${elementSize}px Verdana`;
  gameCanva.textAlign = "end";
  playerCanva.font = `${elementSize}px Verdana`;
  playerCanva.textAlign = "end";
  setMap(currentLevel);
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
  checkCollition();
}

function moveUp() {
  let newPosiotion = playerPosition.y - elementSize;
  if (newPosiotion >= elementSize && newPosiotion < canvasSize) {
    playerPosition.y = newPosiotion;
    playerCanva.clearRect(0, 0, canvasSize, canvasSize);
    playerCanva.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
  }
}
function moveRigth() {
  let newPosiotion = playerPosition.x + elementSize;
  if (newPosiotion > elementSize && newPosiotion < canvasSize) {
    playerPosition.x = newPosiotion;
    playerCanva.clearRect(0, 0, canvasSize, canvasSize);
    playerCanva.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
  }
}
function moveDown() {
  let newPosiotion = playerPosition.y + elementSize;
  if (newPosiotion > elementSize && newPosiotion <= canvasSize) {
    playerPosition.y = newPosiotion;
    playerCanva.clearRect(0, 0, canvasSize, canvasSize);
    playerCanva.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
  }
}
function moveLeft() {
  let newPosiotion = playerPosition.x - elementSize;
  if (
    Math.floor(newPosiotion) >= Math.floor(elementSize) &&
    newPosiotion < canvasSize
  ) {
    playerPosition.x = newPosiotion;
    playerCanva.clearRect(0, 0, canvasSize, canvasSize);
    playerCanva.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
  }
}

function checkCollition() {
  let bombCollosion = enemiesPositions.find(
    (enemy) => enemy.x == playerPosition.x && enemy.y == playerPosition.y
  );
  if (bombCollosion) {
    gameStart();
    return;
  }
  //parse playerposition to 0-10
  if (
    playerPosition.x == giftPosition.x &&
    playerPosition.y == giftPosition.y
  ) {
    //set new level
    if (currentLevel + 1 == maps.length) {
      currentLevel = 0;
    } else {
      currentLevel = currentLevel + 1;
    }
    enemiesPositions = [];
    gameStart();
  }
}
//Events
btnUp.addEventListener("click", playerMove);
btnRight.addEventListener("click", playerMove);
btnDown.addEventListener("click", playerMove);
btnLeft.addEventListener("click", playerMove);
window.addEventListener("keydown", playerMove);
window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
