const GRID_SIZE = 20;
let headX = 40;
let headY = 40;
let foodX;
let foodY;
let numberOfCells = 600 / GRID_SIZE;
let randomCell ; 
let randomCellFloor; 



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
   
    }
    
function snake() {
    fill(255);

    rect(headX, headY, GRID_SIZE, GRID_SIZE);
    headX += GRID_SIZE;

    if (headX >= width) {
        headX = width - GRID_SIZE;
    }

}
        
function keyPressed() {
    if (keyCode === UP_ARROW) {
        headX -= GRID_SIZE;
    } 
    if (keyCode === DOWN_ARROW) {
        headY += GRID_SIZE;
    }
    if (keyCode === LEFT_ARROW) {
        headX -= GRID_SIZE;
    }
    if (keyCode === RIGHT_ARROW) {
        headX += GRID_SIZE;
    }

    if (key === 'w' || key === 'W') {
        headY -= GRID_SIZE;
    } 
    if (key === 's' || key === 'S') {
        headY += GRID_SIZE;
    }
    if (key === 'a' || key === 'A') {
        headX -= GRID_SIZE;
    }
    if (key === 'd' || key === 'D') {
        headX += GRID_SIZE;
    }
}
    
    






