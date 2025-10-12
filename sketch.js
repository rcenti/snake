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




function setup() {
    createCanvas(600, 600);
    randomCell = random(numberOfCells);
    randomCellFloor = floor(randomCell);
       foodX = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
       foodY = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
    frameRate(3);
    keyPressed();
    
}

function draw() {
    background(0);
    snake();
    ellipse(foodX, foodY, GRID_SIZE, GRID_SIZE);

    // go from checking if its hit gameover
   
    }
    
function snake() {
    fill(255);

    rect(headX, headY, GRID_SIZE, GRID_SIZE);
    headX += GRID_SIZE * xDir;
    headY += GRID_SIZE * yDir;

    if (headX >= width) {
        headX = width - GRID_SIZE;
    }

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
    
    






