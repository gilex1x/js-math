/**
 * Get canvas methods autocomplete
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("game-canvas");
const gameCanva = canvas.getContext("2d");

function gameLoop() {
    gameCanva.fillRect(0,0,100,100);
}

window.addEventListener('load',gameLoop);