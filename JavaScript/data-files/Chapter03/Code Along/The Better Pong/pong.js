// Create JS Representation From The DOM
const startText = document.getElementById('startText');

// Game Variables
let gameRunning = false;
let keysPressed = {};

document.addEventListener('keydown', startGame); //press any key to start game
document.addEventListener('keydown', handleKeyDown); //listen for pressed key
document.addEventListener('keyup', handleKeyUp); //listen for unpressed key



// Start Game
function startGame() {
  gameRunning = true;
  startText.style.display = 'none';
  document.removeEventListener('keydown', startGame);
  gameLoop();
}

function gameLoop() {
  if (gameRunning) {
    updatePaddle1()
    setTimeout(gameLoop, 8);
  }
}

//check for key being pressed
function handleKeyDown(e) {
  keysPressed[e.key] = true;
}
//check for key not being pressed
function handleKeyUp(e) {
  keysPressed[e.key] = false;

}

function updatePaddle1() {

}

//i left off at 1:21:24 in the video