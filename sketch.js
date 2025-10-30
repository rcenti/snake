const GRID_SIZE = 20;
let width = 600;
let height = 600;
let snakeX = [40];
let snakeY = [40];
let foodX;
let foodY;
// food 
let numberOfCells = width / GRID_SIZE;
let randomCell; 
let randomCellFloor; 
//direction
let xDir = 1;
let yDir = 0;
let gameOver = false
let speedX;
let speedY;




function setup() {
    createCanvas(600, 600);
    
    foodX = newFoodCoordinate();
    foodY = newFoodCoordinate();
    print(foodX);
    frameRate(5);
}


function draw() {
    background(0);
    ellipse(foodX, foodY, GRID_SIZE, GRID_SIZE);
    isgameOver();
    isSnakeOver();
    
}  




/**
 * checks if the snake has hit a wall
 * @returns game over, if it has hit a wall, and continues like normal if not.
 */
function isgameOver(){
    if (!gameOver) {  // if the snake has not hit anything, keep moving (by calling the snake function)
        snake();

    }

    if (snakeX[0] >= width || snakeX[0] < 0 || snakeY[0] >= height || snakeY[0] < 0) { // if the snake hits the wall, framerate to 0. 
        frameRate(0);
        gameOver = true;
        textSize(32);
        fill(255, 0, 0);
        text('Game Over', width / 2 - 80, height / 2);
    return gameOver;
}
}



/**
 * places food on a random cell on the canvas
 * @returns the food in a random place
 */
function newFoodCoordinate(){
    randomCell = random(numberOfCells);
    randomCellFloor = floor(randomCell);

return randomCellFloor * GRID_SIZE + GRID_SIZE / 2;

}

/**
 * snake (lol)
 */
function snake() {
  // move the body (from tail to head)
  for (let i = snakeX.length - 1; i > 0; i--) {
    snakeX[i] = snakeX[i - 1];
    snakeY[i] = snakeY[i - 1];
  }

  // move the head
  snakeX[0] += GRID_SIZE * xDir;
  snakeY[0] += GRID_SIZE * yDir;

  // draw everything
  fill(255);
  for (let i = 0; i < snakeX.length; i++) {
    rect(snakeX[i], snakeY[i], GRID_SIZE, GRID_SIZE);
  }

}


/**
 * checks if direction has changed if player presses controls
 */
function keyPressed() {
    if (keyCode === UP_ARROW) {
        xDir = 0;
        yDir = -1;  // Y
    } 
    if (keyCode === DOWN_ARROW) {
        xDir = 0;
        yDir = 1; //y
    }
    if (keyCode === LEFT_ARROW) {
        xDir = -1;
        yDir = 0; //x
    }
    if (keyCode === RIGHT_ARROW) {
        xDir = 1;
        yDir = 0;  // x
    }

    if (key === 'w' || key === 'W') {
        xDir = 0;
        yDir = -1;
    } 
    if (key === 's' || key === 'S') {
        xDir = 0;
        yDir = 1;
    }
    if (key === 'a' || key === 'A') {
        xDir = -1;
        yDir = 0;
    }
    if (key === 'd' || key === 'D') {
        xDir = 1;
        yDir = 0;
    }
}


function isSnakeOver() {
 if (snakeX[0] <= foodX && snakeX[0] + GRID_SIZE > foodX && snakeY[0] <= foodY && snakeY[0] + GRID_SIZE > foodY){
    foodX = newFoodCoordinate();
    foodY = newFoodCoordinate();
    addSegment();
 }
    
}

function addSegment() {
    snakeX.push(snakeX[snakeX.length - 1]);
    snakeY.push(snakeY[snakeY.length - 1]);
  }
