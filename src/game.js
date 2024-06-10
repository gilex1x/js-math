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
  currentMap.forEach((row, rowIndex )=> {
    row.forEach((col,colIndex)=>{
      const emoji = emojis[col];
      const posX = elementSize * (colIndex + 1);
      const posY = elementSize * (rowIndex + 1);
      gameCanva.fillText(emoji,posX,posY);
      
    })
  });
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

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
