const GRID_SIZE = 20;
let headX = 40;
let headY = 40;
let foodX;
let foodY;
let numberOfCells = 600 / GRID_SIZE;
let randomCell ; 
let randomCellFloor; 
let xDir = 1;
let yDir = 0;
let gameOver = false
let speedX;
let speedY;




function setup() {
    createCanvas(600, 600);
    randomCell = random(numberOfCells);
    randomCellFloor = floor(randomCell);
       foodX = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
       foodY = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
    frameRate(3);
    //keyPressed() i dont know why this doesnt need to be here but it works

    
}

function draw() {
    background(0);
    ellipse(foodX, foodY, GRID_SIZE, GRID_SIZE);

    if (!gameOver) {  // if the snake has not hit anything, keep moving (by calling the snake function)
        snake();
    }

     if (headX >= width || headX < 0 || headY >= height || headY < 0) { // if the snake hits the wall, framerate to 0. 
        frameRate(0);
        gameOver = true;
        textSize(32);
        fill(255, 0, 0);
        text('Game Over', width / 2 - 80, height / 2);


    }


   
    }
    
function snake() {
    fill(255);

    rect(headX, headY, GRID_SIZE, GRID_SIZE);
    headX += GRID_SIZE * xDir;
    headY += GRID_SIZE * yDir;


}
        
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
    
    






